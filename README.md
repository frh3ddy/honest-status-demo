# honest-status-demo

A tiny word-count CLI, built task by task with
[honest-status](https://github.com/frh3ddy/honest-status) on top of
[Backlog.md](https://github.com/MrLesk/Backlog.md). The code is not the point: the board and the
git log are.

- Tasks live in `backlog/tasks/`. An agent moves them to In Review; only a merge makes them Done.
- Every task lands on `main` as one commit, `feat(TASK-n): <title>`, with an `Approved-by:` trailer:
  `human` when Fredy typed `/honest-status:merge`, `policy:test-only` when an approver agent merged a
  test-only change under `.honest-status/test-only`.
- Open this repo in Claude Code and `.claude/settings.json` offers the plugin.

See it yourself:

```sh
git log --format='%s  [%(trailers:key=Approved-by,valueonly,separator=)]' main
node --test test/*.test.ts
```

## License

MIT
