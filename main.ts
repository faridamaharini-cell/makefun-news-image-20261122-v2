import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const source = join(root, "entry.png");
const outDir = "/output";
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
const sourceSize = statSync(source).size;
const targetSize = statSync(target).size;
if (sourceSize !== targetSize) {
  throw new Error(`entry.png size mismatch: source ${sourceSize} bytes, output ${targetSize} bytes`);
}
console.log(`entry.png copied to /output/entry.png (${targetSize} bytes, verified)`);
