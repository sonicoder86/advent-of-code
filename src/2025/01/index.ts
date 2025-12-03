import { readLines } from "../../utils.js";
import { calculate } from "./calculate.js";

const lines = readLines(import.meta.url, "input.txt");

console.log(calculate(lines, 50));
