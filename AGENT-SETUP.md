# AGENT-SETUP

Machine-only. People read `README.md` and `CONTRIBUTING.md`.

## Needs

- Linux, macOS or Windows
- Node `>=22.18` (native TS type stripping; setup script depends on it)
- pnpm `12.4.2` (from `packageManager`; setup installs if missing)
- No services, no Docker

## Env

None required. No secrets.

## Network

| Domain | Why | When |
|---|---|---|
| `registry.npmjs.org` | pnpm install | setup |
| `beta.pokeapi.co` | PokeAPI suite | `pnpm test` only |

## Setup

```bash
node scripts/agent-setup.ts
```

Success prints `agent-setup: ready`. `--skip-verify` skips typecheck and tests.

## Run

| Job | Command |
|---|---|
| build | `pnpm build` |
| typecheck | `pnpm typecheck` |
| lint | `pnpm lint` |
| test, no network | `pnpm test:offline` |
| test, all | `pnpm test` |
| gate | `pnpm verify` |
| headers | `pnpm lint:headers` (add: `node scripts/check-headers.ts --write`) |

No server, no ports. Libraries only.

## Verify

`pnpm verify` exits 0.

## Layout

| Path | What |
|---|---|
| `packages/<name>/src` | solutions, one Nx project each (`aoc`, `encircle`, `leetcode`, `pokeapi`) |
| `packages/<name>/docs` | problem write-ups |
| `tests/<name>/src` | specs, mirror `packages/<name>/src` |
| `tests/encircle/fixtures` | Encircle task inputs |
| `metrics/`, `games/` | profile SVGs, written by workflows, not by hand |

## Runner notes

| Runner | UI-only setting |
|---|---|
| Claude Code web | setup script `node scripts/agent-setup.ts`; network Trusted |
| Codex cloud | setup and maintenance script `node scripts/agent-setup.ts`; internet for `pnpm test` only |
| Cursor cloud | none; `.cursor/environment.json` runs install |
| Copilot agent | none; `.github/workflows/copilot-setup-steps.yml` |
| Orca | `orca.yaml` runs setup only. Add tabs and quick commands in app settings: `pnpm test:watch`, `pnpm verify` |

## Breaks

| Symptom | Cause | Fix |
|---|---|---|
| `ERR_UNKNOWN_FILE_EXTENSION ".ts"` | Node below 22.18 | upgrade Node |
| PokeAPI suite fails | endpoint down or no network | not a gate; use `pnpm test:offline` |
| ESLint `No cached ProjectGraph` warning | eslint run outside Nx | use `pnpm lint` |
| header check fails | new `.ts` file | `node scripts/check-headers.ts --write` |
