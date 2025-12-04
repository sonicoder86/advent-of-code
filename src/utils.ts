import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export function readLines(importMetaUrl: string, filename: string): string[] {
  const __dirname = dirname(fileURLToPath(importMetaUrl));
  const filePath = join(__dirname, filename);
  const input = readFileSync(filePath, 'utf-8');
  return input.split('\n').filter(line => line.trim() !== '');
}
