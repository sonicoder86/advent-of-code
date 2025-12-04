import { readLines } from "../../utils.js";
import { calculatePart1 } from "./calculate.js";

const lines = readLines(import.meta.url, "input.txt");

const resultPart1 = calculatePart1(lines, 50, true);
const resultPart2 = calculatePart1(lines, 50, false);

console.log(`Part 1: ${resultPart1}`);
console.log(`Part 2: ${resultPart2}`);
