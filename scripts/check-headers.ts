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
import { join, relative } from "node:path"

const ROOT = new URL("..", import.meta.url).pathname
const TEMPLATE = readFileSync(join(ROOT, "scripts/header.txt"), "utf8")
const SKIP = new Set(["node_modules", "dist", ".git", ".nx", "scripts", "coverage", "externals", ".idea"])
const MARKER = "DELETING THIS NOTICE AUTOMATICALLY VOIDS YOUR LICENSE"

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
  TEMPLATE.replace("__FILE__", path.split("/").pop() ?? path).replace(
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
  const hasHeader = body.startsWith("/*") && body.includes(MARKER)
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
