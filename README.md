# honest-status-demo

A tiny word-count CLI, built task by task with
[honest-status](https://github.com/frh3ddy/honest-status) on top of
[Backlog.md](https://github.com/MrLesk/Backlog.md). The code is not the point: the board and the
git log are.

- Tasks live in `backlog/tasks/`. An agent moves them to In Review; only a merge makes them Done.
- Every task lands on `main` as one commit, `feat(TASK-n): <title>`, with an `Approved-by:` trailer:
  `human` when Fredy ran the merge, `policy:test-only` when an approver agent merged a test-only
  change under `.honest-status/test-only`.
- The policy says no too: before Fredy merged TASK-1, the approver agent tried to merge it under
  the test-only policy and got `Not merged: not a test-only change: wc.ts isn't a test file under
  the policy; it needs a human merge. main is unchanged.`
- Open this repo in Claude Code and `.claude/settings.json` offers the plugin.

See it yourself:

```sh
git log --format='%s  [%(trailers:key=Approved-by,valueonly,separator=)]' main
node --test test/*.test.ts
```

## License

MIT
