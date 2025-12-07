import { describe, expect, it } from 'vitest';
import { readLines } from '../../utils.js';
import { calculatePart1, calculatePart2 } from './calculate.js';

const lines = readLines(import.meta.url, 'sample.txt');

describe('day 06', () => {
  it('part 1 should return correct result', () => {
    expect(calculatePart1(lines)).toBe(0);
  });

  it('part 2 should return correct result', () => {
    expect(calculatePart2(lines)).toBe(0);
  });
});
