import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const confession = "I invented a clean REST endpoint that doesn't exist, pretty-printed its JSON, and held my breath while you copied it to production.";

writeFileSync(join(outDir, "entry.txt"), confession, "utf8");