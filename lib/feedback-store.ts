import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export type FeedbackEntry = {
  id: string;
  createdAt: string;
  name: string | null;
  message: string;
};

type FeedbackInput = {
  name?: string;
  message: string;
};

const feedbackDirectory = path.join(process.cwd(), "storage");
const feedbackFile = path.join(feedbackDirectory, "feedback.ndjson");

function isFeedbackEntry(value: unknown): value is FeedbackEntry {
  if (!value || typeof value !== "object") {
    return false;
  }

  const entry = value as Record<string, unknown>;
  return (
    typeof entry.id === "string" &&
    typeof entry.createdAt === "string" &&
    (typeof entry.name === "string" || entry.name === null) &&
    typeof entry.message === "string"
  );
}

async function ensureFeedbackStore() {
  await fs.mkdir(feedbackDirectory, { recursive: true });

  try {
    await fs.access(feedbackFile);
  } catch {
    await fs.writeFile(feedbackFile, "", "utf8");
  }
}

export async function createFeedbackEntry({ name, message }: FeedbackInput) {
  const trimmedMessage = message.trim();

  if (!trimmedMessage) {
    throw new Error("Feedback message is required.");
  }

  const trimmedName = name?.trim() ?? "";

  const entry: FeedbackEntry = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    name: trimmedName ? trimmedName : null,
    message: trimmedMessage
  };

  await ensureFeedbackStore();
  await fs.appendFile(feedbackFile, `${JSON.stringify(entry)}\n`, "utf8");

  return entry;
}

export async function listFeedbackEntries() {
  await ensureFeedbackStore();

  const contents = await fs.readFile(feedbackFile, "utf8");

  return contents
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      try {
        return JSON.parse(line);
      } catch {
        return null;
      }
    })
    .filter(isFeedbackEntry)
    .reverse();
}
