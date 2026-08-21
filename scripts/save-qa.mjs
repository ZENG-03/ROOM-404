import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const store = fs.readFileSync(path.join(root, "src/game/engine/GameStore.tsx"), "utf8");
const issues = [];

if (!store.includes('const SAVE_KEY = "room404.save.v1"')) issues.push("SAVE_KEY is missing or changed unexpectedly.");
if (!store.includes("schemaVersion: 9")) issues.push("Initial save schema must be version 9.");
for (const version of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
  if (!store.includes(String(version))) issues.push(`Save migration list does not mention schema ${version}.`);
}
for (const field of ["visitCounts", "evidenceIds", "knowledgeIds", "events", "seenEndingIds", "achievementsUnlocked"]) {
  if (!store.includes(`${field}: save.${field} ??`)) issues.push(`Save hydration is missing ${field}.`);
}
if (!store.includes("localStorage.setItem(SAVE_KEY")) issues.push("State is not persisted to localStorage.");
if (!store.includes("localStorage.removeItem(SAVE_KEY")) issues.push("Reset does not remove the local save.");
if (!store.includes('mode: "clean" | "notes"')) issues.push("New Game+ save mode is not explicit.");

console.log("Save QA: persistence, hydration, reset and New Game+ checks");
if (issues.length > 0) {
  console.error(`Save QA failed with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}
console.log("Save QA passed: the local session contract is present.");
