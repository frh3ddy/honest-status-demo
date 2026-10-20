import { test } from 'node:test';
import assert from 'node:assert/strict';
import { count } from '../wc.ts';

test('empty input counts nothing', () => {
  assert.deepEqual(count(''), { lines: 0, words: 0, chars: 0 });
});

test('whitespace-only input has no words', () => {
  assert.deepEqual(count('  \n\t \n'), { lines: 2, words: 0, chars: 6 });
});
