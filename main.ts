// The GPS Swears It Was a Shortcut — make.fun entry.
// The program writes the GPS's own one-line excuse to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

// The excuse, in the GPS's own voice: smug, defensive, blaming the map.
const LINE =
  "That cul-de-sac was a shortcut on the 2019 map, and I refuse to let one little dead end rewrite history.";

// The grader's output directory. Never delete it: only create it and
// write inside it, so the run works from any cwd and as any user.
const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, LINE + "\n", "utf8");
