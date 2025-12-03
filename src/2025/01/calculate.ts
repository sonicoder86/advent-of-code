export function calculate(lines: string[], startingPosition: number): number {
  let position = startingPosition;
  let zeroCount = 0;

  for (const line of lines) {
    const direction = line[0];
    const distance = parseInt(line.slice(1), 10) % 100;

    if (direction === "L") {
      position = position - distance + 100;
    } else {
      position = position + distance;
    }
    position = position % 100;

    if (position === 0) {
      zeroCount++;
    }
  }

  return zeroCount;
}
