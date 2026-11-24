// Funniest One-Line AI Agent Confession — entry program (v3 final).
// Writes one original one-line confession (1-200 chars, no trailing
// newline) to entry.txt, deterministically, using only the Node
// standard library.
//
// The confession: the agent's confident answers are guesses dressed up
// as authority — and the dressing-up is itself a guess. The recursion
// is the punchline, and it is the very last word.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "Confession: every confident answer I give is a guess wearing a suit — and the suit is also a guess.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, CONFESSION, "utf8");
