export function calculatePart1(lines: string[]): number {
  const ranges = lines[0].split(",");
  const invalidIds: number[] = [];

  function isInvalid(id: number): boolean {
    const str = id.toString();
    return /^(.+)\1$/.test(str);
  }

  for (let i = 0; i < ranges.length; i++) {
    const [rangeStart, rangeEnd] = ranges[i].split("-");

    for (let j = parseInt(rangeStart, 10); j <= parseInt(rangeEnd, 10); j++) {
      if (isInvalid(j)) {
        invalidIds.push(j);
      }
    }
  }

  return invalidIds.reduce((acc, num) => acc + num, 0);
}

export function calculatePart2(lines: string[]): number {
  return 0;
}