/*
 * Project: TGTGamer
 * File: check-prose.ts
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
 * Reject em dashes and en dashes anywhere in authored text.
 *
 * House style is the ASCII hyphen-minus only. The two Unicode dashes are easy
 * to introduce without noticing, because an em dash is the natural clause
 * separator in English prose and nothing else in the toolchain objects to one.
 * They reach users through documentation, code comments and terminal output,
 * so they are checked rather than left to review.
 *
 * Generated output is checked too: it is committed, and it is only as clean as
 * the sources it came from.
 *
 * Usage: node --experimental-strip-types scripts/check-prose.ts
 */
import { readdirSync, readFileSync } from "node:fs"
import { join, relative } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = fileURLToPath(new URL("..", import.meta.url))

/** Build output, dependencies, and anything not authored here. */
const SKIP_DIRS = new Set([
  "node_modules",
  "dist",
  ".git",
  ".nx",
  ".docgen",
  ".docs7",
  "coverage",
  "externals",
  ".idea"
])

/** Licence text and lockfiles are quoted verbatim and left alone. */
const SKIP_FILES = new Set(["pnpm-lock.yaml", "LICENSE"])

const EXTENSIONS = new Set([".md", ".mdx", ".ts", ".tsx", ".json", ".yml", ".yaml"])

// Built from code points so this file does not contain the characters it
// rejects, and therefore does not fail its own check.
const FORBIDDEN = new Map([
  [String.fromCodePoint(0x2014), "em dash"],
  [String.fromCodePoint(0x2013), "en dash"]
])

const authored = (dir: string): Array<string> => {
  const found: Array<string> = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue
      found.push(...authored(join(dir, entry.name)))
      continue
    }
    if (SKIP_FILES.has(entry.name)) continue
    if (!EXTENSIONS.has(entry.name.slice(entry.name.lastIndexOf(".")))) continue
    found.push(join(dir, entry.name))
  }
  return found
}

const problems: Array<string> = []

for (const path of authored(ROOT)) {
  const lines = readFileSync(path, "utf8").split("\n")
  lines.forEach((line, index) => {
    for (const [character, name] of FORBIDDEN) {
      const column = line.indexOf(character)
      if (column === -1) continue
      problems.push(`${relative(ROOT, path)}:${index + 1}:${column + 1}: ${name}`)
    }
  })
}

if (problems.length > 0) {
  console.error(
    `use the ASCII hyphen-minus, not an em or en dash:\n  ${problems.join("\n  ")}\n`
  )
  process.exit(1)
}

console.log("no em or en dashes in authored text")
