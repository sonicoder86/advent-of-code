import { readLines } from "../../utils.js";
import { calculatePart1 } from "./calculate.js";

const lines = readLines(import.meta.url, "input.txt");

const resultPart1 = calculatePart1(lines);

console.log(`Part 1: ${resultPart1}`);
