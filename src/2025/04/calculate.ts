export function calculatePart1(lines: string[]): number {
  let counter = 0;

  for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
      let neighbors = 0;

      if (lines[i][j] !== '@') {
        continue;
      }

      for (let k = -1; k <= 1; k++) {
        for (let l = -1; l <= 1; l++) {
          if (k === 0 && l === 0) continue;

          const newI = i + k;
          const newJ = j + l;

          if (newI >= 0 && newI < lines.length && newJ >= 0 && newJ < lines[i].length) {
            if (lines[newI][newJ] === '@') {
              neighbors++;
            }
          }
        }
      }

      if (neighbors < 4) {
        counter++;
      }
    }
  }

  return counter;
}

export function calculatePart2(lines: string[]): number {
  const grid = lines.map((line) => line.split(''));
  let totalRemoved = 0;

  while (true) {
    const toRemove: [number, number][] = [];

    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j] !== '@') {
          continue;
        }

        let neighbors = 0;

        for (let k = -1; k <= 1; k++) {
          for (let l = -1; l <= 1; l++) {
            if (k === 0 && l === 0) continue;

            const newI = i + k;
            const newJ = j + l;

            if (newI >= 0 && newI < grid.length && newJ >= 0 && newJ < grid[i].length) {
              if (grid[newI][newJ] === '@') {
                neighbors++;
              }
            }
          }
        }

        if (neighbors < 4) {
          toRemove.push([i, j]);
        }
      }
    }

    if (toRemove.length === 0) {
      break;
    }

    for (const [i, j] of toRemove) {
      grid[i][j] = '.';
    }

    totalRemoved += toRemove.length;
  }

  return totalRemoved;
}
