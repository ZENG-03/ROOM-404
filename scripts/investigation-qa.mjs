import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = fs.readFileSync(path.join(root, "src", "story", "investigation.ts"), "utf8");
const routes = fs.readFileSync(path.join(root, "src", "game", "navigation", "RouteRegistry.ts"), "utf8");

const requiredNodes = [
  "ch1_notice_original",
  "ch1_notice_revision",
  "ch1_private_record",
  "ch2_thread_fragments",
  "ch2_identity_clues",
  "ch2_session_boundary",
  "ch3_original_chain",
  "ch3_difference_map",
  "ch3_session_history",
  "ch4_mount_shell",
  "ch4_terminal_sources",
  "ch4_raw_boundary",
  "ch5_history_layers",
  "ch5_persona_boundary",
  "ch5_observer_model",
  "final_source_boundary",
  "final_observer_review",
  "final_resolution",
];

const requiredSideCases = [
  "side:guestbook-echo",
  "side:forum-edit-language",
  "side:photo-club-index",
  "side:recycle-bin",
  "side:history-2013",
  "side:authored-object",
];

const issues = [];
for (const id of [...requiredNodes, ...requiredSideCases]) {
  if (!source.includes(`id: "${id}"`)) issues.push(`Missing investigation item: ${id}`);
}

if ((source.match(/kind: "mainline"/g) ?? []).length !== 18) issues.push("Expected 18 mainline investigation nodes.");
if ((source.match(/id: "operation:/g) ?? []).length !== 6) issues.push("Expected 6 system operations.");

for (const routeId of [...source.matchAll(/routeId: "([A-Z0-9_]+)"/g)].map((match) => match[1])) {
  if (!new RegExp(`\\bid: "${routeId}"`).test(routes)) issues.push(`Investigation route is not registered: ${routeId}`);
}

if (issues.length > 0) {
  console.error(`Investigation QA failed with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log("Investigation QA passed: 18 mainline nodes, 6 operations, 6 side cases and registered routes.");
