/**
 * Idempotent setup for people, editors and cloud agents.
 *
 * Every surface (VS Code tasks, Orca, Codex, Cursor, Claude Code on the web,
 * the Copilot coding agent) calls this instead of carrying its own install
 * steps. Safe on a clean machine, a cached snapshot and a resumed session.
 *
 * Usage: node scripts/agent-setup.ts [--skip-verify]
 */
import { execFileSync } from "node:child_process"
import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = fileURLToPath(new URL("..", import.meta.url))
const MIN_NODE: readonly [number, number] = [22, 18]
const isWindows = process.platform === "win32"

const run = (command: string, args: ReadonlyArray<string>): void => {
  console.log(`> ${command} ${args.join(" ")}`)
  // shell is needed on Windows so npm and pnpm resolve to their .cmd shims
  execFileSync(command, args, { cwd: ROOT, stdio: "inherit", shell: isWindows })
}

const has = (command: string): boolean => {
  try {
    execFileSync(command, ["--version"], { stdio: "ignore", shell: isWindows })
    return true
  } catch {
    return false
  }
}

const fail = (message: string): never => {
  console.error(`agent-setup: ${message}`)
  process.exit(1)
}

// Node strips TypeScript types natively from 22.18, which this script relies on
const [major = 0, minor = 0] = process.versions.node.split(".").map(Number)
if (major < MIN_NODE[0] || (major === MIN_NODE[0] && minor < MIN_NODE[1])) {
  fail(`Node ${MIN_NODE.join(".")} or newer is required, found ${process.versions.node}`)
}

const manifest: unknown = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"))
const packageManager =
  typeof manifest === "object" && manifest !== null && "packageManager" in manifest
    ? String(manifest.packageManager)
    : fail("package.json has no packageManager field")
const pnpmVersion = packageManager.replace(/^pnpm@/, "")

if (!has("pnpm")) {
  run("npm", ["install", "--global", `pnpm@${pnpmVersion}`])
}

const lockfile = existsSync(join(ROOT, "pnpm-lock.yaml"))
run("pnpm", lockfile ? ["install", "--frozen-lockfile"] : ["install"])

if (!process.argv.includes("--skip-verify")) {
  // Fast proof the tree works: types plus the offline suite, no network
  run("pnpm", ["typecheck"])
  run("pnpm", ["test:offline"])
}

console.log("agent-setup: ready")
