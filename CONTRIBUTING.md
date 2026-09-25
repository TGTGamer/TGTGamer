# Contributing

This is a personal profile and portfolio repository, so outside contributions
are unlikely to be merged, but issues pointing out a bug in a solution are
welcome.

## Development

```bash
node scripts/agent-setup.ts   # install and check (idempotent)
pnpm test                     # every suite, including the live PokeAPI one
pnpm verify                   # the CI gate: types, lint, headers, prose, offline tests
```

The workspace is Nx over pnpm. Each directory under `packages/` is one Nx
project tagged `type_shared` and `layer_shared`; ESLint enforces the module
boundaries.

## Coding standards

- TypeScript only, `strict`, and never `any`.
- Solutions have no import-time side effects.
- Every exported function keeps its doc comment.

## Tests

Specs live under `tests/<package>/src/**/*.spec.ts`, mirroring
`packages/<package>/src`. **No existing test is ever deleted.** If code fails a
test, fix the code; if the expectation itself is wrong or undecided, quarantine
the test with `it.skip` and a comment explaining why.

## Licence headers

Every source file carries the canonical FCL-1.0-MIT header, checked in CI.
Only the `File` and `Last Modified` lines differ between files:

```bash
pnpm lint:headers                         # check
node scripts/check-headers.ts --write     # apply
```
