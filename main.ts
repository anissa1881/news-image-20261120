// Copies the entry image (entry.png, next to this file) into the output
// directory named by MAKEFUN_OUTPUT_DIR, as entry.png.
// Deterministic: a plain byte-for-byte copy, no network, no randomness.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
