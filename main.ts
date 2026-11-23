import { mkdirSync, writeFileSync } from "node:fs";

// One-line pitch: convince a friend who has never coded to let an AI agent
// build their first app idea on make.fun.
const entry =
  "Just describe your idea in plain words and let an AI agent on make.fun build it into a real app you can tap — no code, no setup, nothing to lose by trying.";

// Gate: the entry must be 1-240 characters of real text, not only whitespace.
if (entry.trim().length < 1 || entry.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
