/*
 * Project: TGTGamer
 * File: agent-setup.ts
 * Last Modified: 2026-09-25
 *
 * Contributing: Please read through our contributing guidelines. Included are directions for opening issues, coding standards,
 * and notes on development. These can be found at
 * https://github.com/TGTGamer/TGTGamer/blob/main/CONTRIBUTING.md
 *
 * Code of Conduct: This project abides by the Contributor Covenant, v2.0. Please interact in ways that contribute to an open,
 * welcoming, diverse, inclusive, and healthy community. Our Code of Conduct can be found at
 * https://github.com/TGTGamer/TGTGamer/blob/main/CODE_OF_CONDUCT.md
 *
 * Copyright (c) 2026 Jonathan Stevens T/A Resnovas. All Rights Reserved
 * LICENSE: Fair Core License, Version 1.0, MIT Future License (FCL-1.0-MIT)
 *
 * This program has been provided under confidence of the copyright holder and is licensed for copying, distribution and
 * modification under the terms of the Fair Core License, Version 1.0, MIT Future License (FCL-1.0-MIT) published as the License, or
 * (at your option) any later version of this license. You must not move, change, disable, or circumvent the license key functionality
 * in the Software; or modify any portion of the Software protected by the license key to: enable access to the protected
 * functionality without a valid license key; or remove the protected functionality. This program is distributed in the hope that it
 * will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
 * PARTICULAR PURPOSE. See the Fair Core License, Version 1.0, MIT Future License for more details. You should have received a
 * copy of the Fair Core License, Version 1.0, MIT Future License along with this program. If not, please write to:
 * hello@resnovas.com, see the official website https://fcl.dev/ or review the GitHub repository
 * https://github.com/keygen-sh/fcl.dev/
 *
 * This project abides the Resnovas Cooperation Commitment. Adapted from the GPL Cooperation Commitment (GPLCC). Before filing
 * or continuing to prosecute any legal proceeding or claim (other than a Defensive Action) arising from termination of a Covered
 * License, we commit to adhering to the Resnovas Cooperation Commitment. You should have received a copy of the Resnovas
 * Cooperation Commitment along with this program. If not, please write to: hello@resnovas.com, or see
 * https://github.com/TGTGamer/TGTGamer/blob/main/COOPERATION_COMMITMENT.md
 *
 * DELETING THIS NOTICE AUTOMATICALLY VOIDS YOUR LICENSE
 */

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
