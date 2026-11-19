import fs from "fs";
import path from "path";
import { describe, expect, it } from "vitest";
import { palette } from "../theme/palette";
import {
  DEPRECATED_TOKEN_NAMES,
  effects,
  semanticColors,
} from "../theme/semantic";

const PACKAGE_ROOT = path.resolve(__dirname, "../../..");
const SCAN_DIRS = ["src/components", "src/styles"];

/** Files that legitimately define palette values or raw tokens. */
const EXCLUDED = new Set([
  "src/styles/theme/palette.ts",
  "src/styles/theme/semantic.ts",
  "src/styles/theme/index.ts",
  "src/styles/theme/theme.ts",
]);

/** Literal colors that are not theme colors, with the reason. */
const ALLOWED_LITERALS: Record<string, string[]> = {
  // Near-transparent text-shadow is a font-smoothing hack, not a color.
  "src/styles/globals.ts": ["rgba(0, 0, 0, 0.004)"],
};

/** Not migrated yet. Each migration task removes its files from this list. */
const PENDING: string[] = [
];

/** Matches a whole token name, bare, quoted, in `{name}` or in `var(--name)`. */
const tokenPattern = (names: string[]) =>
  new RegExp(`(?:^|[^\\w-]|--)(${names.join("|")})(?![\\w-])`);
const PALETTE_NAME = tokenPattern(Object.keys(palette));
const DEPRECATED_NAME = tokenPattern(DEPRECATED_TOKEN_NAMES);
const COLOR_LITERAL =
  /#[0-9a-fA-F]{3,8}\b|\brgba?\([^)]*\)|\bhsla?\([^)]*\)|:\s*(?:white|black)\b/;
/** A component declaring a semantic token locally would shadow the theme's value. */
const SEMANTIC_REDEFINITION = new RegExp(
  `--(${[...Object.keys(semanticColors), ...Object.keys(effects)].join("|")}):`
);

function listFiles(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return entry.name === "__tests__" ? [] : listFiles(full);
    }
    return /\.tsx?$/.test(entry.name) &&
      !/\.(stories|spec|test)\.tsx?$/.test(entry.name)
      ? [full]
      : [];
  });
}

function scannedFiles(): string[] {
  return SCAN_DIRS.flatMap((dir) => listFiles(path.join(PACKAGE_ROOT, dir)))
    .map((file) => path.relative(PACKAGE_ROOT, file))
    .filter((file) => !EXCLUDED.has(file));
}

function violations(file: string): string[] {
  const allowed = ALLOWED_LITERALS[file] ?? [];
  const lines = fs.readFileSync(path.join(PACKAGE_ROOT, file), "utf8").split("\n");

  return lines.flatMap((line, i) => {
    const found: string[] = [];
    const palette = line.match(PALETTE_NAME);
    const deprecated = line.match(DEPRECATED_NAME);
    const literal = line.match(COLOR_LITERAL);
    const redefinition = line.match(SEMANTIC_REDEFINITION);
    if (palette) found.push(`palette token "${palette[1]}"`);
    if (deprecated) found.push(`deprecated token "${deprecated[1]}"`);
    if (literal && !allowed.includes(literal[0])) {
      found.push(`color literal "${literal[0]}"`);
    }
    if (redefinition) found.push(`redefines semantic token "${redefinition[1]}"`);
    return found.map((what) => `${file}:${i + 1} ${what}`);
  });
}

describe("token layering", () => {
  it("components reference only semantic and component tokens", () => {
    const problems = scannedFiles()
      .filter((file) => !PENDING.includes(file))
      .flatMap(violations);
    expect(problems).toEqual([]);
  });

  it("pending files still exist and still need migrating", () => {
    for (const file of PENDING) {
      expect(fs.existsSync(path.join(PACKAGE_ROOT, file)), file).toBe(true);
      expect(violations(file).length, file).toBeGreaterThan(0);
    }
  });
});
