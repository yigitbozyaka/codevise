import { readFileSync } from "fs";
import * as core from "@actions/core";
import { Ollama } from "ollama";
import { Octokit } from "@octokit/rest";
import parseDiff, { Chunk, File } from "parse-diff";
import { minimatch } from "minimatch";

const GITHUB_TOKEN: string = core.getInput("GITHUB_TOKEN");
const OLLAMA_ADDRESS: string = core.getInput("OLLAMA_ADDRESS");
const LLM_MODEL: string = core.getInput("LLM_MODEL");
const octokit = new Octokit({ auth: GITHUB_TOKEN });
const ollama = new Ollama({ host: OLLAMA_ADDRESS });

const systemMessage: string = core.getInput("SYSTEM_MESSAGE");

interface PRDetails {
  owner: string;
  repo: string;
  pull_number: number;
  title: string;
  description: string;
}

async function getPRDetails(): Promise<PRDetails> {
  const { repository, number } = JSON.parse(
    readFileSync(process.env.GITHUB_EVENT_PATH || "", "utf8")
  );
  const prResponse = await octokit.pulls.get({
    owner: repository.owner.login,
    repo: repository.name,
    pull_number: number,
  });
  return {
    owner: repository.owner.login,
    repo: repository.name,
    pull_number: number,
    title: prResponse.data.title ?? "",
    description: prResponse.data.body ?? "",
  };
}

function formatLine(change: any): string {
  const lineNum = getLineNumber(change);
  const prefix = change.type === 'add' ? '+' : change.type === 'del' ? '-' : ' ';
  const content = change.content || '';
  
  return `${String(lineNum).padStart(4, ' ')} ${prefix} ${content}`;
}

async function getDiff(
  owner: string,
  repo: string,
  pull_number: number
): Promise<string | null> {
  const response = await octokit.pulls.get({
    owner,
    repo,
    pull_number,
    mediaType: { format: "diff" },
  });
  // @ts-expect-error - response.data is a string
  return response.data;
}

async function analyzeCode(
  parsedDiff: File[],
  prDetails: PRDetails
): Promise<Array<{ body: string; path: string; line: number }>> {
  const comments: Array<{ body: string; path: string; line: number }> = [];

  for (const file of parsedDiff) {
    if (file.to === "/dev/null") continue; // Ignore deleted files
    for (const chunk of file.chunks) {
      const prompt = createPrompt(file, chunk, prDetails);
      const aiResponse = await getAIResponse(prompt);
      if (aiResponse) {
        const newComments = createComment(file, chunk, aiResponse);
        comments.push(...newComments);
      }
    }
  }
  return comments;
}

function createPrompt(file: File, chunk: Chunk, prDetails: PRDetails): string {
  const fileExt = file.to?.split('.').pop() || '';
  
  const addedLines = chunk.changes.filter(c => c.type === 'add').length;
  const deletedLines = chunk.changes.filter(c => c.type === 'del').length;
  
  return `
Code Review Analysis Request
===========================

Context
-------
File: ${file.to}
Language: ${fileExt.toUpperCase()}
Lines Changed: +${addedLines}/-${deletedLines}
PR Title: ${prDetails.title}
PR Description: ${prDetails.description}

Code Changes
-----------
${chunk.changes.map(formatLine).join('\n')}

Review Requirements
-----------------
1. Code Quality Assessment:
   - Identify potential bugs or logic errors
   - Check for edge cases
   - Assess performance implications
   - Verify error handling

2. Security Review:
   - Check for security vulnerabilities
   - Validate input handling
   - Verify authentication/authorization

3. Best Practices:
   - Code style and consistency
   - Design patterns usage
   - Documentation completeness

Response Format
-------------
{
  "summary": "Brief description of changes (max 100 words)",
  "risk_level": "LOW|MEDIUM|HIGH",
  "triage": "APPROVED|NEEDS_REVIEW",
  "issues": [
    {
      "line_start": <number>,
      "line_end": <number>,
      "type": "BUG|SECURITY|IMPROVEMENT",
      "severity": "LOW|MEDIUM|HIGH",
      "description": "Issue description",
      "suggestion": "Code suggestion if applicable"
    }
  ]
}

Important:
- Focus only on the visible code changes
- Provide specific, actionable feedback
- Include line numbers for all issues
- Be concise but thorough
`
}

function processAIResponse(response: string): string {
  try {
    const parsed = JSON.parse(response);
    return `
### Summary
${parsed.summary}

### Risk Level: ${parsed.risk_level}
### Triage: ${parsed.triage}

${parsed.issues.map((issue: any) => `
#### ${issue.type} (Severity: ${issue.severity})
- Lines ${issue.line_start}-${issue.line_end}
- ${issue.description}
${issue.suggestion ? `\n\`\`\`suggestion\n${issue.suggestion}\n\`\`\`` : ''}`
).join('\n')}
    `.trim();
  } catch (e) {
    // Fallback for non-JSON responses
    return response;
  }
}

async function getAIResponse(prompt: string): Promise<string | null> {
  try {
    const res = await ollama.generate({
      model: LLM_MODEL,
      system: systemMessage,
      prompt: prompt,
      options: {
        temperature: 0.3,
        top_p: 0.9,
      }
    });
    return processAIResponse(res.response);
  } catch (error) {
    core.error(`Error with AI response: ${error}`);
    return null;
  }
}

function getLineNumber(change: any): number {
  if (!change) return 0;
  
  if (change.type === 'add' && typeof change.ln === 'number') {
    return change.ln;
  }
  if (change.type === 'del' && typeof change.ln1 === 'number') {
    return change.ln1;
  }
  if (typeof change.ln2 === 'number') return change.ln2;
  if (typeof change.ln1 === 'number') return change.ln1;
  
  return 0;
}

function createComment(
  file: File,
  chunk: Chunk,
  aiResponse: string
): Array<{ body: string; path: string; line: number }> {
  const comments: Array<{ body: string; path: string; line: number }> = [];
  
  const firstChange = chunk.changes.find(change => change.type === 'add');
  const lastChange = chunk.changes.reverse().find(change => change.type === 'add');
  
  const lineNumber = firstChange ? getLineNumber(firstChange) : 
                    (chunk.newStart || chunk.oldStart || 0);
  
  const lineRange = `Lines ${chunk.newStart}-${chunk.newStart + chunk.newLines - 1}`;
  
  comments.push({
    body: `**${lineRange}**\n\n${aiResponse}`,
    path: file.to!,
    line: lineNumber,
  });

  return comments.filter(comment => 
    comment.path && 
    comment.line > 0 && 
    comment.body.trim().length > 0
  );
}


export const COMMENT_GREETING = `<img src='https://i.ibb.co/hdbmmbV/Untitled.png' alt='CodeVise' width='160' height='50'>`
export const COMMENT_TAG = '<!-- This is an auto-generated comment by CodeVise -->'

async function createReviewComment(
  owner: string,
  repo: string,
  pull_number: number,
  comments: Array<{ body: string; path: string; line: number }>,
  commit_id: string
): Promise<void> {
  const body = `${COMMENT_GREETING}\n\n${COMMENT_TAG}\n`;
  const maxAttempts = 3;

  if (!comments || comments.length === 0) {
    core.warning('No comments to submit in the review');
    return;
  }

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      await octokit.pulls.createReview({
        owner,
        repo,
        pull_number,
        comments,
        body,
        event: "COMMENT",
        commit_id,
      });
      core.info(`Review successfully submitted on attempt ${attempt}`);
      break;
    } catch (error: any) {
      core.error(`Attempt ${attempt} failed with error: ${error.message}`);
      if (attempt === maxAttempts) throw error;
    }
  }
}

async function main() {
  const prDetails = await getPRDetails();
  const eventName = process.env.GITHUB_EVENT_NAME;
  let diff: string | null;
  const eventData = JSON.parse(
    readFileSync(process.env.GITHUB_EVENT_PATH ?? "", "utf8")
  );

  if (eventName === "issue_comment" && eventData.action === "created") {
    const comment = eventData.comment.body;
    const commentAuthor = eventData.comment.user.login;
    const isBotMentioned = comment.includes("@codevise");

    if (isBotMentioned) {
      const prompt = `User ${commentAuthor} commented: ${comment}\n\nRespond to this message.`;
      const aiResponse = await getAIResponse(prompt);

      if (aiResponse) {
        await octokit.issues.createComment({
          owner: eventData.repository.owner.login,
          repo: eventData.repository.name,
          issue_number: eventData.issue.number,
          body: `${COMMENT_GREETING}\n\n${COMMENT_TAG}\n${aiResponse}`,
        });
      }
    }
  } else if (eventName === "pull_request") {
    if (eventData.action === "opened") {
      diff = await getDiff(
        prDetails.owner,
        prDetails.repo,
        prDetails.pull_number
      );
    } else if (eventData.action === "synchronize") {
      const newBaseSha = eventData.before;
      const newHeadSha = eventData.after;

      const response = await octokit.repos.compareCommits({
        headers: {
          accept: "application/vnd.github.v3.diff",
        },
        owner: prDetails.owner,
        repo: prDetails.repo,
        base: newBaseSha,
        head: newHeadSha,
      });

      diff = String(response.data);
    } else {
      core.warning(`Unsupported event: ${process.env.GITHUB_EVENT_NAME}`);
      return;
    }

    if (!diff) {
      core.warning("No diff data available for this PR");
      return;
    }
    const parsedDiff = parseDiff(diff);

    const excludePatterns = core
      .getInput("exclude")
      .split(",")
      .map((s) => s.trim());

    const filteredDiff = parsedDiff.filter((file) => {
      return !excludePatterns.some((pattern) =>
        minimatch(file.to ?? "", pattern)
      );
    });

    const comments = await analyzeCode(filteredDiff, prDetails);
    const commit_id = eventData.pull_request.head.sha;  
    try {
      await createReviewComment(
        prDetails.owner,
        prDetails.repo,
        prDetails.pull_number,
        comments,
        commit_id
      );
      core.info(`Review submitted for PR #${prDetails.pull_number}`)
    } catch (error) {
      core.info(`Couldn't submit review for PR #${prDetails.pull_number}\n\nError: ${error}`)
    }
  }
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});