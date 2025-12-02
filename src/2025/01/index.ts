import { readLines } from "../../utils.js";

const lines = readLines(import.meta.url, "input.txt");

let position = 50;
let zeroCount = 0;

for (const line of lines) {
  const direction = line[0];
  const distance = parseInt(line.slice(1), 10);

  if (direction === "L") {
    position = position - distance % 100 + 100;
  } else {
    position = (position + distance);
  }
  position = position % 100;

  if (position === 0) {
    zeroCount++;
  }
}

console.log(zeroCount);
