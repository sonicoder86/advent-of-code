import { readLines } from "../../utils.js";
import { calculateAtomic } from "./calculate.js";

const lines = readLines(import.meta.url, "input.txt");

const resultWithEndingZeros = calculateAtomic(lines, 50, true);
const resultWithAllZeros = calculateAtomic(lines, 50, false);

console.log(`Part 1: ${resultWithEndingZeros}`);
console.log(`Part 2: ${resultWithAllZeros}`);
