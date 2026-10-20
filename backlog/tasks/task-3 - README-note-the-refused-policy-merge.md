---
id: TASK-3
title: 'README: note the refused policy merge'
status: Done
assignee:
  - '@fredy'
created_date: '2026-10-20 20:22'
updated_date: '2026-10-20 20:23'
labels: []
dependencies: []
ordinal: 3000
---

## Description

<!-- SECTION:DESCRIPTION:BEGIN -->
Say in the README that an approver agent tried to merge TASK-1 under the test-only policy and was refused.
<!-- SECTION:DESCRIPTION:END -->

## Final Summary

<!-- SECTION:FINAL_SUMMARY:BEGIN -->
README now records the refused policy merge of TASK-1, with the exact refusal message. Also corrected the human-merge line: TASK-1 was merged by running truth.ts --merge, not by typing /honest-status:merge, so it now says "when Fredy ran the merge".

How to review: git diff main...task/TASK-3 (README.md and this task file only). Not test-only, so it needs your merge.
<!-- SECTION:FINAL_SUMMARY:END -->
