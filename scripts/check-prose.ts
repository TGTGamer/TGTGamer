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
