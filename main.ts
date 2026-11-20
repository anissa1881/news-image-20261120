// Copies the entry image (entry.png, next to this file) into the output
// directory named by MAKEFUN_OUTPUT_DIR, as entry.png.
// Deterministic: a plain byte-for-byte copy, no network, no randomness.
// Robustness: the source image is checked first; if it is missing the
// program exits with an error naming the file instead of failing mid-copy.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

if (!existsSync(source)) {
  console.error(`error: source image not found: ${source}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.png");
copyFileSync(source, outPath);
console.log(`wrote ${outPath}`);
