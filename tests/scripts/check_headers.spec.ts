/*
 * Project: TGTGamer
 * File: check_headers.spec.ts
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

import { afterEach, beforeEach, expect, it } from "vitest"
import { execFileSync, spawnSync } from "node:child_process"
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { fileURLToPath } from "node:url"

const repo = fileURLToPath(new URL("../../", import.meta.url))
let root: string
let checker: string
let header: string

beforeEach(() => {
  root = mkdtempSync(join(tmpdir(), "header check # "))
  mkdirSync(join(root, "scripts"))
  checker = join(root, "scripts/check-headers.ts")
  copyFileSync(join(repo, "scripts/check-headers.ts"), checker)
  copyFileSync(join(repo, "scripts/header.txt"), join(root, "scripts/header.txt"))
  header = readFileSync(join(repo, "scripts/header.txt"), "utf8")
    .replace("__FILE__", "example.ts").replace("__MODIFIED__", "2020-01-01")
})

afterEach(() => rmSync(root, { recursive: true, force: true }))

it('accepts canonical headers with file/date variations, CRLF and a shebang', () => {
  writeFileSync(join(root, "example.ts"), '#!/usr/bin/env node\n' + header.replace(/\n/g, '\r\n'))
  expect(spawnSync(process.execPath, [checker]).status).toBe(0)
})

it('rejects altered licence text and markers outside the leading comment, including scripts', () => {
  writeFileSync(join(root, "altered.ts"), header.replace("All Rights Reserved", "Modified text"))
  writeFileSync(join(root, "scripts/missing.ts"), '/* ordinary comment */\n' + header)
  const result = spawnSync(process.execPath, [checker], { encoding: "utf8" })
  expect(result.status).toBe(1)
  expect(result.stderr).toContain("altered.ts")
  expect(result.stderr).toContain(join("scripts", "missing.ts"))
})

it('writes a canonical header once and preserves shebangs', () => {
  const file = join(root, "example.ts")
  writeFileSync(file, '#!/usr/bin/env node\n/* ordinary comment */\n')
  execFileSync(process.execPath, [checker, "--write"])
  const first = readFileSync(file, "utf8")
  execFileSync(process.execPath, [checker, "--write"])
  expect(readFileSync(file, "utf8")).toBe(first)
  expect(first.startsWith('#!/usr/bin/env node\n/*\n * Project: TGTGamer')).toBe(true)
  expect(spawnSync(process.execPath, [checker]).status).toBe(0)
})
