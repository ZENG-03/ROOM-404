import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(root, "src");
const sourceFiles = [];

function collect(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) collect(fullPath);
    else if (/\.(ts|tsx)$/.test(entry.name)) sourceFiles.push(fullPath);
  }
}

collect(sourceRoot);
const sourceText = sourceFiles.map((file) => fs.readFileSync(file, "utf8")).join("\n");
const issues = [];

if (sourceText.includes("许晓")) issues.push("Use 徐晓, not 许晓.");

const mediaAssets = fs.readFileSync(path.join(sourceRoot, "story/assets/mediaAssets.ts"), "utf8");
const originalBlock = mediaAssets.match(/photo17_original:\s*\{([\s\S]*?)\n\s*\},/);
if (!originalBlock || !originalBlock[1].includes('expectedFile: "photo17-original.jpg"')) {
  issues.push("PHOTO17 original asset must resolve to photo17-original.jpg / DSC0417.JPG.");
}

if (!sourceText.includes('sourceType: "GENERATED"')) {
  issues.push("No GENERATED source label is present in the source registry.");
}

const subject404InRecovery = /recovery-(?:boot|login)|Recovery/i.test(sourceText) && /SUBJECT_404/.test(sourceText);
const recoverySection = sourceText.match(/function RecoveryBoot\(\)[\s\S]*?function RecoveryLogin/);
if (subject404InRecovery && recoverySection?.[0].includes("SUBJECT_404")) {
  issues.push("SUBJECT_404 must not replace SUBJECT_04 in the Recovery Boot/Login context.");
}

console.log(`Canon Lint: scanned ${sourceFiles.length} TypeScript source files`);

if (issues.length > 0) {
  console.error(`Canon Lint failed with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log("Canon Lint passed: naming and provenance invariants are intact.");
