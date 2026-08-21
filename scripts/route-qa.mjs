import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

const types = read("src/game/types.ts");
const registry = read("src/game/navigation/RouteRegistry.ts");
const renderer = read("src/components/pages/PageRenderer.tsx");
const union = types.match(/export type RouteId =([\s\S]*?);/);

if (!union) {
  console.error("Route QA failed: RouteId union was not found.");
  process.exit(1);
}

const routeIds = [...union[1].matchAll(/"([A-Z0-9_]+)"/g)].map((match) => match[1]);
const issues = [];

for (const routeId of routeIds) {
  const registryPattern = new RegExp(`\\b${routeId}:\\s*\\{\\s*id:\\s*"${routeId}"`);
  if (!registryPattern.test(registry)) issues.push(`${routeId}: missing RouteRegistry entry`);
  if (!renderer.includes(`case "${routeId}"`)) issues.push(`${routeId}: missing PageRenderer case`);
}

const paths = [...registry.matchAll(/\bpath:\s*"([^"]+)"/g)].map((match) => match[1]);
const duplicatePaths = [...new Set(paths.filter((routePath, index) => paths.indexOf(routePath) !== index))];
for (const routePath of duplicatePaths) issues.push(`${routePath}: duplicate registered path`);

console.log(`Route QA: ${routeIds.length} route ids, ${paths.length} registered paths`);

if (issues.length > 0) {
  console.error(`Route QA failed with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log("Route QA passed: every route is registered, rendered and uniquely pathed.");
