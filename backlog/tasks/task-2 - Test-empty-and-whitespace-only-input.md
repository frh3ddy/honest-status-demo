---
id: TASK-2
title: Test empty and whitespace-only input
status: Done
assignee:
  - '@fredy'
created_date: '2026-10-20 20:14'
updated_date: '2026-10-20 20:19'
labels: []
dependencies:
  - TASK-1
ordinal: 2000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Test-only: cover empty input and whitespace-only input in test/. Eligible for the test-only policy merge.
<!-- SECTION:DESCRIPTION:END -->

## Acceptance Criteria
<!-- AC:BEGIN -->
- [x] #1 Tests for empty and whitespace-only input
<!-- AC:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
Added test/edge.test.ts: empty input counts nothing; whitespace-only input has no words. Tests only, so it is eligible for the test-only policy merge.

How to review: npm test (5 pass); git show --stat on the merge commit lists only test/edge.test.ts and the task file.
<!-- SECTION:FINAL_SUMMARY:END -->
