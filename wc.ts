// wc.ts: count lines, words and characters, like wc. Usage: node wc.ts < file
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export function count(text: string): { lines: number; words: number; chars: number } {
  return {
    lines: text.split('\n').length - 1,
    words: text.split(/\s+/).filter(Boolean).length,
    chars: [...text].length,
  };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const { lines, words, chars } = count(readFileSync(0, 'utf8'));
  console.log(`${lines} ${words} ${chars}`);
}
