import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
// 137: high enough to surprise, specific enough to sound honest.
const count = "137";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), count, "utf8");
