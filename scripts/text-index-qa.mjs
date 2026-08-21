import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(root, "ROOM404_游戏文本总库_约20万字.txt");
const indexPath = path.join(root, "public", "content", "room404-text-index.json");

if (!fs.existsSync(sourcePath)) throw new Error("Text pool source is missing");
if (!fs.existsSync(indexPath)) throw new Error("Text archive index is missing");

const source = fs.readFileSync(sourcePath, "utf8");
const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
const sourceLines = source.split(/\r?\n/).length;

if (!Array.isArray(index.entries) || index.entries.length === 0) throw new Error("Text archive index has no entries");
if (index.characters !== source.length) throw new Error(`Character count mismatch: ${index.characters} !== ${source.length}`);
if (index.lines !== sourceLines) throw new Error(`Line count mismatch: ${index.lines} !== ${sourceLines}`);

const ids = new Set();
for (const entry of index.entries) {
  for (const field of ["id", "section", "heading", "body", "sourceType", "unlockCondition"]) {
    if (typeof entry[field] !== "string" || !entry[field].trim()) throw new Error(`Invalid entry field: ${field}`);
  }
  if (ids.has(entry.id)) throw new Error(`Duplicate text entry id: ${entry.id}`);
  ids.add(entry.id);
  if (!Number.isInteger(entry.lineStart) || entry.lineStart < 1 || entry.lineStart > sourceLines) throw new Error(`Invalid lineStart: ${entry.id}`);
  if (!Array.isArray(entry.tags) || !Array.isArray(entry.relatedEvidenceIds)) throw new Error(`Invalid metadata arrays: ${entry.id}`);
}

const chapters = new Set(index.entries.map((entry) => entry.chapter));
for (const chapter of [1, 2, 3, 4, 5, 6]) {
  if (!chapters.has(chapter)) throw new Error(`No text archive entries for chapter ${chapter}`);
}

console.log(`Text index QA passed: ${index.entries.length} entries, ${index.lines} lines, ${index.characters} characters`);
