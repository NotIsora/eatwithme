import { cp, mkdir, rm, readFile, writeFile } from "node:fs/promises";
import { build } from "esbuild";

const outputDir = new URL("./dist/", import.meta.url);
await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

await build({
  entryPoints: ["app.js"],
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2020",
  outfile: new URL("./app.js", outputDir),
  sourcemap: true,
  logLevel: "info",
});

for (const file of ["index.html", "styles.css", "sw.js", "manifest.webmanifest", "icon.svg"]) {
  await cp(file, new URL(`./${file}`, outputDir));
}

const indexPath = new URL("./index.html", outputDir);
const index = await readFile(indexPath, "utf8");
await writeFile(indexPath, index.replace(/\/app\.js\?v=[^\"]+/, "/app.js"), "utf8");

console.log("Capacitor web assets built in dist/");
