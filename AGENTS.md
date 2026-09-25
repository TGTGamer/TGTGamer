# Agent guide

Setup, commands and runner notes: [`AGENT-SETUP.md`](./AGENT-SETUP.md).

This repository is Jonathan Stevens' GitHub profile (`README.md`, `metrics/`,
`games/`) plus a small coding portfolio: an Nx and pnpm workspace with one
package per source of puzzles or tasks under `packages/`, and specs mirrored
under `tests/`.

## Rules that apply here

1. **The gate is `pnpm verify`.** Run it before saying something works.
2. **No `any`, ever**, and `strict` stays on. Use `unknown` with a type guard.
3. **No existing test is deleted.** Fix the code. A test whose expectation is
   wrong or undecided is quarantined with `it.skip` and a comment saying why.
4. **Every `.ts` file carries the FCL-1.0-MIT header.** `node
   scripts/check-headers.ts --write` adds it.
5. **ASCII hyphen-minus only** in authored text; `pnpm lint:prose` checks.
6. **Modules have no import-time side effects.** Scratch calls left from
   Quokka (`//?`) are removed, not kept.
7. `metrics/` and `games/` are written by GitHub Actions. Do not edit them.

## Why the solutions are plain TypeScript

The house default for production code is Effect-TS with PostHog telemetry and
feature flags. These packages are small, pure puzzle solutions with no
services, configuration or users, which is the documented exception for simple
scripts. A package that grows into a real service should adopt Effect then.
