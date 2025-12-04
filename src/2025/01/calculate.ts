export function calculatePart1(lines: string[]): number {
  let position = 50;
  let zeroCount = 0;

  for (const line of lines) {
    const direction = line[0];
    const distance = parseInt(line.slice(1), 10);

    for (let x = distance; x > 0; x--) {
      if (direction === "L") {
        position--;
        if (position < 0) {
          position = position + 100;
        }
      } else {
        position++;
        if (position >= 100) {
          position = position - 100;
        }
      }
    }

    if (position === 0) {
      zeroCount++;
    }
  }

  return zeroCount;
}

export function calculatePart2(lines: string[]): number {
  let position = 50;
  let zeroCount = 0;

  for (const line of lines) {
    const direction = line[0];
    const distance = parseInt(line.slice(1), 10);

    for (let x = distance; x > 0; x--) {
      if (direction === "L") {
        position--;
        if (position < 0) {
          position = position + 100;
        }
      } else {
        position++;
        if (position >= 100) {
          position = position - 100;
        }
      }
      if (position === 0) {
        zeroCount++;
      }
    }
  }

  return zeroCount;
}
