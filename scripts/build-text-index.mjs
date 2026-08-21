import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(root, "ROOM404_游戏文本总库_约20万字.txt");
const outputPath = path.join(root, "public", "content", "room404-text-index.json");
const source = fs.readFileSync(sourcePath, "utf8");
const lines = source.split(/\r?\n/);
const sectionPattern = /^([一二三四五六七八九十百]+)、(.+)$/;
const entryPattern = /^(?:【(.+?)】|\[([A-Z0-9][A-Z0-9_-]*)\])\s*$/;

const sectionChapter = {
  1: 1,
  2: 1,
  3: 1,
  4: 2,
  5: 3,
  6: 4,
  7: 5,
  8: 5,
  9: 6,
  10: 1,
  11: 1,
};

const sourceTypes = ["ORIGINAL", "RECOVERED", "ALTERED", "ARCHIVED", "RECONSTRUCTED", "GENERATED", "SYSTEM", "SESSION", "UNKNOWN"];

function slugify(value) {
  return value
    .toLocaleLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 54) || "record";
}

function sectionNumber(value) {
  const numerals = { 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9, 十: 10, 百: 100 };
  return [...value].reduce((total, character) => total + (numerals[character] ?? 0), 0);
}

function inferSourceType(text) {
  const upper = text.toLocaleUpperCase();
  return sourceTypes.find((type) => upper.includes(type)) ?? (upper.includes("日志") || upper.includes("系统") ? "SYSTEM" : "ARCHIVED");
}

function relatedEvidenceIds(text) {
  const ids = [];
  const add = (id) => { if (!ids.includes(id)) ids.push(id); };
  if (text.includes("8月17") || text.includes("8月18") || text.includes("日期")) {
    add("E001_school_original_notice");
    add("E002_school_modified_notice");
  }
  if (text.includes("Summer17") || text.includes("22:01") || text.includes("BlueMoon")) add("E021_summer17_thread_timestamp");
  if (text.includes("DSC0417") || text.includes("Photo17") || text.includes("Hash")) add("E030_photo17_original_club_copy");
  if (text.includes("Recovery") || text.includes("恢复") || text.includes("manifest")) add("E041_recovery_environment_build");
  if (text.includes("Observer405") || text.includes("Unknown") || text.includes("ROOM")) add("E089_observer_model");
  if (text.includes("10:12") || text.includes("Resolution") || text.includes("结局")) add("E101_real_world_source_boundary");
  return ids;
}

function makeTags(section, heading, body, isCore) {
  const text = `${section} ${heading} ${body}`;
  const tags = [isCore ? "core" : "optional"];
  if (text.includes("公告") || text.includes("校园")) tags.push("school");
  if (text.includes("论坛") || text.includes("帖子") || text.includes("Summer17")) tags.push("forum");
  if (text.includes("Photo17") || text.includes("DSC0417") || text.includes("照片")) tags.push("photo");
  if (text.includes("Recovery") || text.includes("桌面") || text.includes("文件")) tags.push("recovery");
  if (text.includes("ROOM") || text.includes("Observer") || text.includes("Unknown")) tags.push("continuity");
  if (text.includes("Final") || text.includes("结局") || text.includes("Resolution")) tags.push("final");
  return [...new Set(tags)];
}

const blocks = [];
let currentSection = "ROOM 404 TEXT POOL";
let currentSectionNumber = 1;
let current = null;
let sectionLines = [];
let sectionHasExplicitEntries = false;
let sectionStartLine = 1;

function flush() {
  if (!current) return;
  const body = current.body.join("\n").trim();
  if (body.length >= 24) blocks.push({ ...current, body });
  current = null;
}

function flushSection() {
  flush();
  if (sectionLines.length === 0 || sectionHasExplicitEntries) return;
  const body = sectionLines.join("\n").trim();
  if (body.length >= 24) {
    blocks.push({
      heading: currentSection,
      section: currentSection,
      sectionNumber: currentSectionNumber,
      lineStart: sectionStartLine,
      body,
    });
  }
}

for (let index = 0; index < lines.length; index += 1) {
  const rawLine = lines[index];
  const line = rawLine.trim();
  const sectionMatch = line.match(sectionPattern);
  const entryMatch = line.match(entryPattern);

  if (sectionMatch) {
    flushSection();
    currentSectionNumber = sectionNumber(sectionMatch[1]);
    currentSection = sectionMatch[2].trim();
    sectionLines = [];
    sectionHasExplicitEntries = false;
    sectionStartLine = index + 2;
    continue;
  }

  if (entryMatch) {
    flush();
    sectionHasExplicitEntries = true;
    current = {
      heading: (entryMatch[1] ?? entryMatch[2]).trim(),
      section: currentSection,
      sectionNumber: currentSectionNumber,
      lineStart: index + 1,
      body: [],
    };
    sectionLines.push(rawLine);
    continue;
  }

  sectionLines.push(rawLine);
  if (current) current.body.push(lines[index]);
}
flushSection();

const coreCountByChapter = new Map();
const entries = blocks.map((block) => {
  const chapter = sectionChapter[block.sectionNumber] ?? 1;
  const coreCount = coreCountByChapter.get(chapter) ?? 0;
  const isCore = coreCount < 12;
  coreCountByChapter.set(chapter, coreCount + (isCore ? 1 : 0));
  const combined = `${block.heading}\n${block.body}`;

  return {
    id: `text-${slugify(block.heading)}-${block.lineStart}`,
    chapter,
    section: block.section,
    heading: block.heading,
    body: block.body,
    lineStart: block.lineStart,
    sourceType: inferSourceType(combined),
    tags: makeTags(block.section, block.heading, block.body, isCore),
    relatedEvidenceIds: relatedEvidenceIds(combined),
    unlockCondition: isCore ? `chapter:${chapter}` : `deduction:${chapter}`,
  };
});

const index = {
  sourceFile: "ROOM404_游戏文本总库_约20万字.txt",
  lines: lines.length,
  characters: source.length,
  entries,
};

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(index, null, 2)}\n`, "utf8");
console.log(`Text index: ${entries.length} entries, ${lines.length} lines, ${source.length} characters`);
