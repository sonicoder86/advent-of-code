import { describe, it, expect } from "vitest";
import { readLines } from "../../utils.js";
import { calculate } from "./calculate.js";

const lines = readLines(import.meta.url, "sample.txt");

describe("Day 02", () => {
  it("part 1 should return 3 zeros", () => {
    expect(calculate(lines)).toBe(1227775554);
  });
});
