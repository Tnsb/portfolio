import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sources = ["src/data/siteContent.js", "src/data/caseStudies.js", "src/pages/Home.jsx"];
const missing = [];

for (const file of sources) {
  const text = readFileSync(join(root, file), "utf8");
  for (const match of text.matchAll(/assetUrl\(["']([^"']+)["']\)/g)) {
    const rel = match[1].replace(/^\//, "");
    const path = join(root, "public", rel);
    if (!existsSync(path)) {
      missing.push({ file, asset: rel });
    }
  }
}

const iconsPath = join(root, "public/icons.svg");
if (!existsSync(iconsPath)) {
  missing.push({ file: "IconInline", asset: "icons.svg" });
}

if (missing.length) {
  console.error("Missing public assets referenced in code:\n");
  for (const { file, asset } of missing) {
    console.error(`  - public/${asset} (from ${file})`);
  }
  process.exit(1);
}

console.log("All referenced public assets exist.");
