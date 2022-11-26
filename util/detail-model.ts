import fs from "fs";
import path from "path";

const imageDirectory = path.join(process.cwd(), "public/image/");

export function getImageFiles() {
  const mozaik = fs.readdirSync(path.join(imageDirectory, "mozaik"));
  const flower = fs.readdirSync(path.join(imageDirectory, "flower"));
  const original = fs.readdirSync(path.join(imageDirectory, "original"));

  const data: string[][] = [];

  data.push(mozaik, flower, original);

  return data;
}
