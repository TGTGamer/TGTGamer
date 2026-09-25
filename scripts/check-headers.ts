/*
 * Project: TGTGamer
 * File: check-headers.ts
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
 * Enforce the canonical FCL-1.0-MIT header on every TypeScript source file.
 *
 * The header is identical everywhere except the file-specific `File` and
 * `Last Modified` lines, which is what makes a mechanical check possible: any
 * divergence in the licence text itself is a failure, not a variation.
 *
 * Usage:
 *   node --experimental-strip-types scripts/check-headers.ts          # check
 *   node --experimental-strip-types scripts/check-headers.ts --write  # apply
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs"
import { basename, join, relative } from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = fileURLToPath(new URL("..", import.meta.url))
const TEMPLATE = readFileSync(join(ROOT, "scripts/header.txt"), "utf8")
const SKIP = new Set(["node_modules", "dist", ".git", ".nx", "coverage", "externals", ".idea"])
const normalizeHeader = (header: string): string => header.replace(/\r\n/g, "\n")
  .replace(/^ \* File: [^\r\n]+$/m, " * File: __FILE__")
  .replace(/^ \* Last Modified: [^\r\n]+$/m, " * Last Modified: __MODIFIED__")
  .trimEnd()

const sources = (dir: string): Array<string> => {
  const found: Array<string> = []
  for (const entry of readdirSync(dir)) {
    if (SKIP.has(entry)) continue
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) found.push(...sources(full))
    else if (entry.endsWith(".ts") && !entry.endsWith(".d.ts")) found.push(full)
  }
  return found
}

/** Render the header for one file, stamped with its name and modification date. */
const headerFor = (path: string): string =>
  TEMPLATE.replace("__FILE__", basename(path)).replace(
    "__MODIFIED__",
    new Date(statSync(path).mtime).toISOString().slice(0, 10)
  )

const write = process.argv.includes("--write")
const offenders: Array<string> = []

for (const file of sources(ROOT)) {
  const contents = readFileSync(file, "utf8")
  // A shebang must stay on line one, so the header sits directly after it and
  // the check has to look past it too.
  const shebang = contents.startsWith("#!") ? contents.slice(0, contents.indexOf("\n") + 1) : ""
  const body = contents.slice(shebang.length)
  const leadingComment = body.match(/^\/\*[\s\S]*?\*\//)?.[0]
  const hasHeader = leadingComment !== undefined &&
    normalizeHeader(leadingComment) === normalizeHeader(headerFor(file))
  if (hasHeader) continue

  if (write) {
    writeFileSync(file, `${shebang}${headerFor(file)}\n${body}`)
  } else {
    offenders.push(relative(ROOT, file))
  }
}

if (write) {
  console.log("headers applied")
} else if (offenders.length > 0) {
  console.error(`missing the canonical licence header:\n  ${offenders.join("\n  ")}`)
  process.exit(1)
} else {
  console.log("every source file carries the canonical licence header")
}
