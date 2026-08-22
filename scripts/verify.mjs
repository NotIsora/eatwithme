import { readFile } from "node:fs/promises";

const content = await readFile("./app.js", "utf8");
const match = content.match(/const defaultPlaces = (\[[\s\S]*?\]);/m);
if (match) {
  const places = JSON.parse(match[1]);
  console.log("Places count:", places.length);
  const names = ["Ippudo", "Home Mì", "Godmother", "Thế Giới Bò", "Milo dầm", "Bép cô Tư - Bánh căn nha trang", "Bánh canh cua bà Ba", "Bún đậu Hẻm Đậu"];
  for (const name of names) {
    const p = places.find(p => p.name === name);
    console.log(name + ":", p ? `lat=${p.lat}, lng=${p.lng}` : "NOT FOUND");
  }
}