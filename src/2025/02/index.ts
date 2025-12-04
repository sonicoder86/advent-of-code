import { readLines } from '../../utils.js';
import { calculatePart1, calculatePart2 } from './calculate.js';

const lines = readLines(import.meta.url, 'input.txt');

const resultPart1 = calculatePart1(lines);
const resultPart2 = calculatePart2(lines);

console.log(`Part 1: ${resultPart1}`);
console.log(`Part 2: ${resultPart2}`);
