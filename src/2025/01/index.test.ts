import { describe, it, expect } from "vitest";
import { readLines } from "../../utils.js";
import { calculate, calculateAtomic } from "./calculate.js";

const lines = readLines(import.meta.url, "sample.txt");

describe("Day 01", () => {
  it("part 1 should return 3 zeros", () => {
    expect(calculate(lines, 50)).toBe(3);
  });

  it("part 1 should return 3 zeros", () => {
    expect(calculateAtomic(lines, 50, true)).toBe(3);
  });

  it("part 2 should return 6 zeros", () => {
    expect(calculateAtomic(lines, 50, false)).toBe(6);
  });
});
