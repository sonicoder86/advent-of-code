import { readLines } from "../../utils.js";
import { calculate } from "./calculate.js";

const lines = readLines(import.meta.url, "input.txt");

const resultPart1 = calculate(lines);

console.log(`Part 1: ${resultPart1}`);
