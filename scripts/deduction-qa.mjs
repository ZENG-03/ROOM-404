import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(path.join(root, "src", "story", "deductions.ts"), "utf8");
const requiredCases = [
  "chapter1_date_conflict",
  "chapter2_session_boundary",
  "chapter3_reconstruction_boundary",
  "chapter4_recovery_shell",
  "chapter5_unknown_boundary",
  "final_source_boundary",
];

for (const caseId of requiredCases) {
  if (!source.includes(`id: "${caseId}"`)) throw new Error(`Missing deduction case: ${caseId}`);
}

const correctAnswerCount = (source.match(/correctAnswerId:/g) ?? []).length;
if (correctAnswerCount !== requiredCases.length) throw new Error(`Expected ${requiredCases.length} correct answers, found ${correctAnswerCount}`);
if (!source.includes("DEDUCTION_ATTEMPT") && !fs.readFileSync(path.join(root, "src", "game", "engine", "GameStore.tsx"), "utf8").includes("DEDUCTION_ATTEMPT")) {
  throw new Error("Deduction attempt event is not wired");
}

console.log(`Deduction QA passed: ${requiredCases.length} chapter cases`);
