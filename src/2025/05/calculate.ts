class Range {
  public start: number;
  public end: number;

  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }

  contains(id: number) {
    return id >= this.start && id <= this.end;
  }

  size(): number {
    return this.end - this.start + 1;
  }

  toArray(): number[] {
    return Array.from({ length: this.end - this.start + 1 }, (_, i) => this.start + i);
  }
}

export function calculatePart1(lines: string[]): number {
  const ranges: Range[] = [];
  const ids: number[] = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '') continue;

    if (lines[i].includes('-')) {
      const parts = lines[i].split('-').map(Number);
      ranges.push(new Range(parts[0], parts[1]));
    } else {
      ids.push(Number(lines[i]));
    }
  }

  let count = 0;

  for (let j = 0; j < ids.length; j++) {
    if (ranges.some((range) => range.contains(ids[j]))) {
      count++;
    }
  }

  return count;
}

export function calculatePart2(lines: string[]): number {
  const ranges: Range[] = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i] === '') continue;

    if (lines[i].includes('-')) {
      const parts = lines[i].split('-').map(Number);
      ranges.push(new Range(parts[0], parts[1]));
    }
  }

  ranges.sort((a, b) => a.start - b.start);

  const merged: Range[] = [];

  for (const range of ranges) {
    if (merged.length === 0) {
      merged.push(range);
    } else {
      const last = merged[merged.length - 1];

      if (range.start <= last.end + 1) {
        last.end = Math.max(last.end, range.end);
      } else {
        merged.push(range);
      }
    }
  }

  let total = 0;
  for (const range of merged) {
    total += range.size();
  }

  return total;
}
