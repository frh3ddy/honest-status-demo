---
id: TASK-1
title: 'Count words, lines and characters'
status: Done
assignee:
  - '@fredy'
created_date: '2026-10-20 20:14'
updated_date: '2026-10-20 20:19'
labels: []
dependencies: []
ordinal: 1000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
A CLI: node wc.ts < file prints lines, words and characters, like wc.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 node wc.ts prints lines, words, characters for stdin
- [x] #2 Tests in test/wc.test.ts
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Added wc.ts: count() returns lines, words and characters (code points, not bytes); run as node wc.ts < file. Three tests in test/wc.test.ts.

How to review: npm test; printf "hello world\n" | node wc.ts prints 1 2 12.
<!-- SECTION:FINAL_SUMMARY:END -->
