import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");
const target = join("/output", "entry.png");

mkdirSync("/output", { recursive: true });
copyFileSync(source, target);

const from = statSync(source);
const to = statSync(target);
if (from.size !== to.size) {
  throw new Error(`entry.png size mismatch: source ${from.size} vs output ${to.size}`);
}
console.log(`entry.png OK: ${to.size} bytes copied to ${target}`);
