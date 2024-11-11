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
  return `
Review Instructions

Please review the following code diff in the file ${file.to} with the pull request title and description in mind.

PR Title:
${prDetails.title}

PR Description:

${prDetails.description}

Git diff to review:

${chunk.content}
${chunk.changes
      // @ts-expect-error - ln and ln2 exists where needed
      .map((c) => `${c.ln ? c.ln : c.ln2} ${c.content}`)
      .join("\n")}

Task:

 1. Summary:
 - Write a succinct summary (within 100 words) of the changes in the code diff. The summary should mention any alterations to exported function signatures, global data structures, variables, or changes that might affect the external interface or behavior of the code.
 2. Triage:
 - Below the summary, provide a triage decision, either NEEDS_REVIEW or APPROVED, following these guidelines:
 - Use NEEDS_REVIEW if the diff involves any changes to logic, control structures, or function calls that might impact code behavior.
 - Use APPROVED only if the changes are minor (e.g., typos, formatting, or variable renaming) and do not affect functionality.
 - Strictly format the triage section as follows:

  - TRIAGE: <NEEDS_REVIEW or APPROVED>

Additional Review Guidance:

 - For each section of the new hunk (annotated with line numbers), identify substantive issues within the line number range.
 - Line Number Ranges: Provide the exact line number range for each issue (inclusive). Focus on issues within the provided context only.
 - Comment Scope: Comments should be objective, specific, and limited to the code changes. Avoid speculative remarks about the larger impact or system-wide consequences outside of the given context.

Code Suggestions:

 - If necessary, provide replacement code suggestions in suggestion blocks. Use the correct line number range that maps to the exact lines in the diff.
 - If proposing new code snippets, use fenced code blocks and specify the correct language identifier.

Important Restrictions:

 - Avoid general feedback, summaries, or compliments.
 - Do not mention potential impacts on the overall system unless evident from the changes. Focus only on the provided code context.
 - Do not request additional reviews from the developer or question their testing or intentions.
 - Ensure that line number ranges and replacement snippets are accurate and specific.
`
}

async function getAIResponse(prompt: string): Promise<string | null> {
  try {
    const res = await ollama.generate({
      model: LLM_MODEL,
      system: systemMessage,
      prompt: prompt,
    });
    return res.response;
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
  
  const firstChangeWithLine = chunk.changes.find(change => 'ln' in change || 'ln2' in change);
  const currentLineNumber = firstChangeWithLine ? (firstChangeWithLine as any).ln ?? (firstChangeWithLine as any).ln2 : 0;

  comments.push({
    body: aiResponse,
    path: file.to!,
    line: currentLineNumber,
  });

  return comments.filter(comment => comment.path && comment.line && comment.body);
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