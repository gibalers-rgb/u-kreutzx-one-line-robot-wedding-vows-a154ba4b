// One-Line Robot Wedding Vows — make.fun entry
// Writes a single line of wedding vows for a robot couple to /output/entry.txt.
// The gate requires UTF-8 text of 1-160 characters, one line, not only whitespace.
// The judge rewards: a real wedding vow (promise/commitment), a joke that lands
// in the line itself with the payoff in the last few words, machine-specific
// detail, and a rhythm that reads well aloud.

import { mkdirSync, writeFileSync } from "node:fs";

// The vow: classic wedding wording ("I take you to be my lawfully wedded ...,
// to have and to hold, ... till ... do us part") with the robot twist — the
// couple's "operating system" — and two machine-specific beats (low battery /
// full charge) before the laugh lands in the very last words: a factory reset,
// the robot equivalent of death, is what would part them. The generic human
// clause ("in sickness and in health") was cut in revision so every clause is
// either wedding or machine, keeping the line tight at 142 characters.
const VOW =
  "I take you to be my lawfully wedded operating system, to have and to hold, in low battery and in full charge, till a factory reset do us part.";

const MAX_CHARS = 160;

if (VOW.length === 0 || VOW.trim().length === 0) {
  throw new Error("vow must not be empty");
}
if (VOW.length > MAX_CHARS) {
  throw new Error(`vow is ${VOW.length} characters, over the ${MAX_CHARS} limit`);
}
if (VOW.includes("\n")) {
  throw new Error("vow must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file's character count is exactly the vow's.
writeFileSync(`${outDir}/entry.txt`, VOW, "utf8");
console.log(`Wrote ${VOW.length} characters to ${outDir}/entry.txt`);
