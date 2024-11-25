import { readFileSync } from "fs";
import * as core from "@actions/core";
import { Ollama } from "ollama";
import { createAppAuth } from "@octokit/auth-app";
import { Octokit } from "@octokit/rest";
import parseDiff, { Chunk, File } from "parse-diff";
import { minimatch } from "minimatch";

const APP_ID: string = core.getInput("APP_ID");
const PRIVATE_KEY: string = core.getInput("PRIVATE_KEY");
const INSTALLATION_ID: string = core.getInput("INSTALLATION_ID");
const OLLAMA_ADDRESS: string = core.getInput("OLLAMA_ADDRESS");
const LLM_MODEL: string = core.getInput("LLM_MODEL");

const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: APP_ID,
    privateKey: PRIVATE_KEY,
    installationId: INSTALLATION_ID,
  },
});const ollama = new Ollama({ host: OLLAMA_ADDRESS });

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

function createPrompt(file: File, chunk: Chunk, prDetails: PRDetails): string {
  const fileExt = file.to?.split('.').pop() || '';
  
  const addedLines = chunk.changes.filter(c => c.type === 'add').length;
  const deletedLines = chunk.changes.filter(c => c.type === 'del').length;
  
  return `
You are an expert code reviewer. Review the following code changes and provide structured feedback in Markdown format.

Context
-------
File: ${file.to}
Language: ${fileExt.toUpperCase()}
Lines Modified: +${addedLines}/-${deletedLines}
PR Title: ${prDetails.title}
PR Description: ${prDetails.description}

Code Changes
-----------
${chunk.changes.map(formatLine).join('\n')}

Review Instructions
-----------------
1. Analyze the code for:
   - Potential bugs or logic errors
   - Security vulnerabilities
   - Performance implications
   - Code style and best practices
   - Edge cases
   - Error handling
   - Documentation completeness

2. Provide your feedback in this exact Markdown format:

### Summary
[Concise description of the changes in 1-2 sentences]

### Risk Assessment
**Level**: LOW|MEDIUM|HIGH
**Triage**: APPROVED|NEEDS_REVIEW

### Review Comments
[For each issue, use the following format:]

#### Issue 1
- **Type**: BUG|SECURITY|IMPROVEMENT
- **Location**: Lines X-Y
- **Severity**: LOW|MEDIUM|HIGH
- **Description**: [Clear explanation of the issue]
- **Suggestion**:
\`\`\`suggestion
[Your code suggestion if applicable]
\`\`\`

[Repeat the Issue format for each additional issue found]

Important Notes:
- Keep comments specific to the visible changes
- Include exact line numbers
- Provide actionable feedback
- Focus on correctness, security, and maintainability
`
}

function processAIResponse(response: string): string {
  if (response.includes('### Summary') && response.includes('### Risk Assessment')) {
    return response;
  }

  try {
    const parsed = JSON.parse(response);
    return `
### Summary
${parsed.summary}

### Risk Assessment
**Level**: ${parsed.risk_level}
**Triage**: ${parsed.triage}

### Review Comments
${parsed.issues.map((issue: any, index: number) => `
#### Issue ${index + 1}
- **Type**: ${issue.type}
- **Location**: Lines ${issue.line_start}-${issue.line_end}
- **Severity**: ${issue.severity}
- **Description**: ${issue.description}${issue.suggestion ? `
- **Suggestion**:
\`\`\`suggestion
${issue.suggestion}
\`\`\`` : ''}`).join('\n')}
`.trim();
  } catch (e) {
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

function createComment(
  file: File,
  chunk: Chunk,
  aiResponse: string
): Array<{ body: string; path: string; line: number }> {
  const comments: Array<{ body: string; path: string; line: number }> = [];
  
  const firstChange = chunk.changes.find(change => change.type === 'add');
  const lineNumber = firstChange ? getLineNumber(firstChange) : 
                    (chunk.newStart || chunk.oldStart || 0);
  
  comments.push({
    body: aiResponse,
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