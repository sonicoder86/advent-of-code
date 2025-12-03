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

export function calculateAtomic(lines: string[], startingPosition: number, onlyEndingZeros: boolean): number {
  let position = startingPosition;
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
      if (!onlyEndingZeros && position === 0) {
        zeroCount++;
      }
    }

    if (onlyEndingZeros && position === 0) {
      zeroCount++;
    }
  }

  return zeroCount;
}
