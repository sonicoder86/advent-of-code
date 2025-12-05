export function calculatePart1(lines: string[]): number {
  let total = 0;

  for (const line of lines) {
    let max = 0;

    for (let i = 0; i < line.length - 1; i++) {
      for (let j = i + 1; j < line.length; j++) {
        const firstDigit = Number.parseInt(line[i], 10);
        const secondDigit = Number.parseInt(line[j], 10);
        const value = firstDigit * 10 + secondDigit;
        max = Math.max(max, value);
      }
    }

    total += max;
  }

  return total;
}

export function calculatePart2(lines: string[]): number {
  let total = 0;

  for (const line of lines) {
    let result = '';
    let startIndex = 0;
    const needed = 12;

    for (let position = 0; position < needed; position++) {
      const remainingToSelect = needed - position;
      const searchEndIndex = line.length - remainingToSelect;

      let maxDigit = '';
      let maxIndex = -1;

      for (let j = startIndex; j <= searchEndIndex; j++) {
        if (line[j] > maxDigit) {
          maxDigit = line[j];
          maxIndex = j;
        }
      }

      result += maxDigit;
      startIndex = maxIndex + 1;
    }

    total += Number.parseInt(result, 10);
  }

  return total;
}
