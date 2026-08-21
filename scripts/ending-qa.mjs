import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const types = read("src/game/types.ts");
const finalContent = read("src/story/final/finalContent.ts");
const renderer = read("src/components/pages/PageRenderer.tsx");
const registry = read("src/game/navigation/RouteRegistry.ts");
const issues = [];
const endingIds = ["DELETE", "RETURN", "OBSERVER", "ARCHIVIST"];

for (const id of endingIds) {
  if (!finalContent.includes(`${id}: {`)) issues.push(`${id}: missing resolution policy.`);
  if (!renderer.includes(`${id}:`)) issues.push(`${id}: missing renderer reference.`);
}
if (!types.includes('export type EndingId = "DELETE" | "RETURN" | "OBSERVER" | "ARCHIVIST"')) issues.push("EndingId union is incomplete.");
for (const route of ["ENDING_STATE", "ENDING_GALLERY", "CREDITS"]) {
  if (!registry.includes(`${route}:`)) issues.push(`${route}: missing registered route.`);
}
const store = read("src/game/engine/GameStore.tsx");
for (const required of ["finalCheckpointCreated", "RESTORE_FINAL_CHECKPOINT", "seenEndingIds", "OPEN_CREDITS", "START_NEW_GAME_PLUS"]) {
  if (!renderer.includes(required) && !store.includes(required) && !types.includes(required)) issues.push(`${required}: missing post-ending flow reference.`);
}
if (renderer.includes("Good Ending") || renderer.includes("Bad Ending")) issues.push("Ending gallery must not label outcomes good or bad.");

console.log("Ending QA: policy, checkpoint, gallery and credits checks");
if (issues.length > 0) {
  console.error(`Ending QA failed with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}
console.log("Ending QA passed: all four resolution states retain the post-ending flow.");
