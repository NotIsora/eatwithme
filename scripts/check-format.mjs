import { readFile } from "node:fs/promises";

const content = await readFile("./app.js", "utf8");
const idx = content.indexOf("const defaultPlaces = ");
if (idx >= 0) {
  let bracketCount = 0;
  let inString = false;
  let escape = false;
  for (let i = 0; i < content.length - idx; i++) {
    const ch = content[idx + i];
    if (escape) { escape = false; continue; }
    if (ch === "\\") { escape = true; continue; }
    if (ch === '"' && !escape) { inString = !inString; continue; }
    if (!inString) {
      if (ch === "[") bracketCount++;
      else if (ch === "]") {
        bracketCount--;
        if (bracketCount === 0) {
          console.log("END at offset:", i);
          console.log("END snippet:", JSON.stringify(content.substring(idx + i, idx + i + 50)));
          break;
        }
      }
    }
  }
}