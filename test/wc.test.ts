import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { count } from '../wc.ts';

test('counts lines, words and characters', () => {
  assert.deepEqual(count('one two\nthree\n'), { lines: 2, words: 3, chars: 14 });
});

test('counts characters, not bytes', () => {
  assert.equal(count('héllo').chars, 5);
});

test('CLI reads stdin', () => {
  const out = execFileSync('node', [join(import.meta.dirname, '..', 'wc.ts')], { input: 'a b\n', encoding: 'utf8' });
  assert.equal(out, '1 2 4\n');
});
