# Semantic Color Tokens Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split theme tokens into palette / foundations / semantic / component layers and move every component off raw palette shades, with no breaking changes (3.12.0).

**Architecture:** `src/styles/variables.ts` + `src/styles/theme.ts` become a `src/styles/theme/` folder. A baseline fixture of every token's fully-resolved value guards against accidental changes; a layering test enforces "components reference semantic tokens only", using a shrinking pending-files list so every commit stays green.

**Tech Stack:** TypeScript, styled-components, CSS custom properties, Vitest (jsdom), Storybook (`@ljcl/storybook-addon-cssprops`), changesets.

**Spec:** `docs/superpowers/specs/2026-11-19-semantic-tokens-design.md`

All paths below are relative to `packages/atomic-elements/` unless they start with `bin/`, `.storybook/`, `.changeset/`, or `docs/superpowers/`.

## Global Constraints

- Release is **minor** (`@atomicjolt/atomic-elements` 3.11.0 → 3.12.0). No other package gets a changeset.
- No existing token name may change the value it resolves to, except the entries recorded in the visual change log.
- Overriding an existing (now deprecated) token name in a consumer theme must still reach components. **Direction of deprecated names:** the *new* token references the *old* one (`"text-clr-secondary": "{text-clr-alt}"`, `"text-clr-alt": "{neutral600}"`), so overrides of either name work. *(This refines the spec, which said aliases are `{new-name}`; that direction would silently drop consumer overrides of old names, e.g. `accent-clr-alt` in `docs/Theme/Intro.mdx`.)*
- `text-clr-on-accent` = `{text-clr-inverted}`; `border-clr-focus` = `{neutral600}`; solid info is `info-clr-fill` (`{primary600}`) / `info-clr-fill-hover` (`{primary700}`); `info-clr` keeps `{primary100}`.
- `@styles/theme` import path and `src/styles/index.ts` exports (`createTheme`, `defaultTheme`, `variableAlias`) unchanged.
- Component code (non-story, non-spec) and `component.ts` never reference palette tokens, deprecated token names, or color literals. Stories and specs are exempt.
- Every shade change is appended to `docs/superpowers/plans/2026-11-19-semantic-tokens-visual-changes.md` as a row: `| Component | State | Before | After (token → shade) |`.
- Commit messages: conventional commits (`refactor(elements): …`, `feat(elements): …`, `test(elements): …`).

## Review Focus

1. A consumer theme overriding a palette shade (`createTheme({ base: defaultTheme, variables: { primary700: "red" } })`) still recolors components that used that shade (`accent-clr`, `btn-bg-clr` resolve to `red`). → test in Task 3.
2. A consumer theme overriding a deprecated name (`"accent-clr-alt": "red"`, `"text-clr-inverted": "white"`) still reaches the new tokens components read (`accent-clr-hover`, `text-clr-on-accent`). → test in Task 3.
3. `$color="text-clr-alt"` / `$bg="neutral100"` on primitives still emit `var(--text-clr-alt)` / `var(--neutral100)` (the `colorProperty` membership check in `src/styles/colors.ts` must see every name). → test in Task 3.
4. Storybook `getCssProps("Button")`, `getCssProps("Colors")` etc. keep returning the same groups after the move (generated file is gitignored, so a break only shows at `npm install` / Storybook build). → verification in Task 2.
5. Existing DOM snapshot tests change only in class hashes/CSS text, not structure. → verification step in each migration task (inspect `-u` diff before accepting).

---

### Task 1: Baseline resolved-token fixture and regression test

**Files:**
- Create: `src/styles/__tests__/tokenResolution.ts`
- Create: `src/styles/__tests__/__fixtures__/resolved-tokens.baseline.json`
- Create: `src/styles/__tests__/tokens.regression.spec.ts`
- Create: `src/styles/__tests__/expectedChanges.ts`
- Create: `docs/superpowers/plans/2026-11-19-semantic-tokens-visual-changes.md` (heading, an empty "Added tokens" list, and the empty table header from Global Constraints)

**Interfaces:**
- Produces: `resolveToLiteral(theme: Theme, name: string): string` in `tokenResolution.ts` — follows `var(--x)` / `var(--x, fallback)` chains in `theme.resolvedVariables` recursively until no `var(` remains; returns the literal (composite values like `"1px solid var(--neutral300)"` resolve every var inside).
- Produces: `export const EXPECTED_CHANGES: Record<string, string> = {}` in `expectedChanges.ts`, mapping token name → new literal. Later tasks add entries here and to the visual change log together.

- [ ] **Step 1: Write `resolveToLiteral` and a one-off generator test**

`tokens.regression.spec.ts`, test `"matches baseline resolved values"`:
```ts
const baseline = JSON.parse(fs.readFileSync(BASELINE_PATH, "utf8")) as Record<string, string>;
for (const [name, literal] of Object.entries(baseline)) {
  const expected = EXPECTED_CHANGES[name] ?? literal;
  expect.soft(resolveToLiteral(defaultTheme, name), name).toBe(expected);
}
```
Second test `"baseline keys still exist"`: every baseline key is in `defaultTheme.variables`.

- [ ] **Step 2: Generate the baseline from current code**

Run from `packages/atomic-elements`: a temporary `it.only` (or `npx tsx` script) that writes `{ name: resolveToLiteral(defaultTheme, name) }` for every key of `defaultTheme.variables`, sorted, to `__fixtures__/resolved-tokens.baseline.json`. Delete the generator afterwards. Spot check: `"btn-bg-clr": "hsl(0, 0%, 100%)"`, `"text-clr-inverted": "hsl(0, 0%, 100%)"`.

- [ ] **Step 3: Run tests**

Run: `npm run test --workspace @atomicjolt/atomic-elements -- src/styles`
Expected: PASS (fixture == current code).

- [ ] **Step 4: Commit**
```bash
git add src/styles/__tests__ ../../docs/superpowers/plans/2026-11-19-semantic-tokens-visual-changes.md
git commit -m "test(elements): add resolved token baseline regression test"
```

---

### Task 2: Split tokens into `styles/theme/` (move only, no value changes)

**Files:**
- Create: `src/styles/theme/theme.ts` (contents of `src/styles/theme.ts` minus `defaultTheme` and the `variables` import)
- Create: `src/styles/theme/palette.ts`, `foundations.ts`, `semantic.ts`, `component.ts`, `index.ts`
- Delete: `src/styles/theme.ts`, `src/styles/variables.ts`
- Modify: `src/styles/colors.ts:3` (import `Color` from `./theme`), `src/components/Feedback/ProgressCircle/ProgressCircle.component.tsx:4` (import from `@styles/theme`), `src/styles/__tests__/*` imports
- Modify: `bin/update-css-props.mts`

**Interfaces:**
- Produces (`palette.ts`): `export const palette` = the 45 scale entries (`neutral50`…`primary900`) currently at the top of `colors`; `export type PaletteColor = keyof typeof palette`.
- Produces (`foundations.ts`): `border` (`border-width`, `border-style`, `radius`, `border`, `outline-width`, `outline-style`, `outline`), `font`, `fontSize`, `letterSpacing`, `lineHeight`, `sizes`, `spacing`, `iconSizes` — same export names and values as today.
- Produces (`semantic.ts`): `export const semanticColors` = the semantic entries of today's `colors` (`text-clr` … `info-clr-alt`) plus `border-clr-primary`, `outline-clr-primary`; `export type SemanticColor = keyof typeof semanticColors`.
- Produces (`component.ts`): `input`, `button`, `banner`, `dropdown`, `menu`, `listbox`, `textarea`, `toggle`, `loader`, `skeleton`, `table`, `tab`, `popover`, `checkbox`, `radio`, `time`, `calendar`, `card`, `tooltip`, `chip`, `divider`, `link`, `animation`, `list`, `progressCircle`, `scrollArea` — same names and values.
- Produces (`index.ts`): re-exports `createTheme`, `variableAlias`, `Theme` from `./theme`; `export const variables` (spread of everything, `as const`); `export const defaultTheme = createTheme({ variables })`; `export type Color = PaletteColor | SemanticColor`; `export type { PaletteColor, SemanticColor }`.

- [ ] **Step 1: Snapshot Storybook groups before the move**

Run (repo root): `npm run storybook:cssprops && cp .storybook/__generated__/cssprops.generated.ts /tmp/cssprops.before.ts` (use the session scratchpad if `/tmp` is unavailable).

- [ ] **Step 2: Create the five files and `theme/theme.ts`; delete the old two; fix the three imports**

`theme/theme.ts` keeps `createTheme`, `variableAlias`, `Theme`, and the `styled-components` `DefaultTheme` augmentation. Its `VariableName` type imports `variables` *type-only* from `./index` (`import type`) to avoid a runtime cycle. Remove the stray `debugger;` in the resolver while moving.

- [ ] **Step 3: Update `bin/update-css-props.mts`**

Import `* as` from each of `palette`, `foundations`, `semantic`, `component` and `defaultTheme` from `styles/theme`. Group naming: `palette` and `semanticColors` both merge into group `"Colors"`; every other export uses today's rule (capitalize export name). Skip `variables`, `defaultTheme`, and non-object exports.

- [ ] **Step 4: Verify no value or group changes**

Run: `npm run test --workspace @atomicjolt/atomic-elements` → PASS, no snapshot updates.
Run: `npx tsc -p packages/atomic-elements/tsconfig.json --noEmit` → no errors.
Run (root): `npm run storybook:cssprops && diff /tmp/cssprops.before.ts .storybook/__generated__/cssprops.generated.ts` → same group names; the only entry moves are `border-clr-primary` and `outline-clr-primary` from `"Border"` to `"Colors"`, plus key order inside `"Colors"`. No values change.

- [ ] **Step 5: Commit**
```bash
git add -A src/styles src/components/Feedback/ProgressCircle bin/update-css-props.mts
git commit -m "refactor(elements): split theme tokens into palette, foundations, semantic and component layers"
```

---

### Task 3: Add the semantic token set, deprecated names, and effects

**Files:**
- Modify: `src/styles/theme/semantic.ts`, `src/styles/theme/palette.ts` (none expected), `src/styles/theme/index.ts`
- Test: `src/styles/__tests__/semantic.spec.ts`

**Interfaces:**
- Produces (`semantic.ts`):
  - `semanticColors` — exactly the spec's table names (`background-clr`, `background-clr-subtle`, `background-clr-hover`, `background-clr-subtle-hover`, `background-clr-active`, `background-clr-raised`, `background-clr-inverted`, `backdrop-clr`, `text-clr`, `text-clr-secondary`, `text-clr-disabled`, `text-clr-inverted`, `text-clr-on-accent`, `icon-clr`, `border-clr`, `border-clr-strong`, `border-clr-focus`, `outline-clr`, `accent-clr`, `accent-clr-hover`, `accent-clr-subtle`, `accent-clr-subtle-hover`, `{error,warning,success}-clr`, `{error,warning,success}-clr-hover`, `info-clr-fill`, `info-clr-fill-hover`, `{error,warning,success,info}-clr-subtle`, `-subtle-hover`, `-subtle-active`, `-subtle-border`, `-subtle-text`).
  - `deprecatedColors` — `background-clr-alt: {neutral100}`, `text-clr-alt: {neutral600}`, `border-clr-primary: {neutral300}`, `outline-clr-primary: {neutral600}`, `accent-clr-alt: {primary800}`, `error-clr-alt: {error700}`, `warning-clr-alt: {warning700}`, `success-clr-alt: {success700}`, `info-clr: {primary100}`, `info-clr-alt: {primary200}`. Each with a `/** @deprecated use X */` comment.
  - Renamed tokens point **at** the deprecated name: `background-clr-subtle: {background-clr-alt}`, `text-clr-secondary: {text-clr-alt}`, `border-clr: {border-clr-primary}`, `outline-clr: {outline-clr-primary}`, `accent-clr-hover: {accent-clr-alt}`, `{s}-clr-hover: {{s}-clr-alt}`, `info-clr-subtle: {info-clr}`, `info-clr-subtle-hover: {info-clr-alt}`.
  - `effects` — `shadow-sm: 0 1px 3px hsla(0, 0%, 0%, 0.5)`, `shadow-md: 0 2px 4px 0 hsla(0, 0%, 0%, 0.1)`, `shadow-lg: 0 10px 40px hsla(0, 0%, 0%, 0.25)`.
  - `SemanticColor = keyof typeof semanticColors` (excludes `deprecatedColors`, `effects`).
  - `DEPRECATED_TOKEN_NAMES: string[] = Object.keys(deprecatedColors)` (used by Task 4).
- Produces (`index.ts`): `variables` also spreads `deprecatedColors` and `effects`.
- Storybook: `deprecatedColors` merges into `"Colors"`; `effects` becomes group `"Effects"` (update the mapping in `bin/update-css-props.mts`).

- [ ] **Step 1: Write failing tests** in `semantic.spec.ts`:
```ts
it("new tokens resolve to today's shades", () => {
  expect(resolveToLiteral(defaultTheme, "text-clr-secondary")).toBe(resolveToLiteral(defaultTheme, "neutral600"));
  expect(resolveToLiteral(defaultTheme, "background-clr-raised")).toBe(resolveToLiteral(defaultTheme, "neutral50"));
  expect(resolveToLiteral(defaultTheme, "border-clr-focus")).toBe(resolveToLiteral(defaultTheme, "neutral600"));
  expect(resolveToLiteral(defaultTheme, "info-clr-fill")).toBe(resolveToLiteral(defaultTheme, "primary600"));
  expect(resolveToLiteral(defaultTheme, "error-clr-subtle-text")).toBe(resolveToLiteral(defaultTheme, "error800"));
  expect(resolveToLiteral(defaultTheme, "text-clr-on-accent")).toBe(resolveToLiteral(defaultTheme, "neutral50"));
});
it("palette overrides flow through semantic tokens", () => {           // Review Focus 1
  const t = createTheme({ base: defaultTheme, variables: { primary700: "red" } });
  expect(resolveToLiteral(t, "accent-clr")).toBe("red");
});
it("overriding a deprecated name reaches its replacement", () => {     // Review Focus 2
  const t = createTheme({ base: defaultTheme, variables: { "accent-clr-alt": "red", "text-clr-inverted": "white", "info-clr": "pink" } });
  expect(resolveToLiteral(t, "accent-clr-hover")).toBe("red");
  expect(resolveToLiteral(t, "text-clr-on-accent")).toBe("white");
  expect(resolveToLiteral(t, "info-clr-subtle")).toBe("pink");
});
it("color props accept palette, semantic and deprecated names", () => { // Review Focus 3
  for (const c of ["neutral100", "text-clr-secondary", "text-clr-alt"])
    expect(textColor({ $color: c, theme: defaultTheme })).toEqual({ color: `var(--${c})` });
});
```
Plus a type assertion: `expectTypeOf<"text-clr-alt">().not.toMatchTypeOf<SemanticColor>()` and `expectTypeOf<"neutral100">().toMatchTypeOf<Color>()`.

- [ ] **Step 2: Run** `npm run test --workspace @atomicjolt/atomic-elements -- src/styles` → FAIL (tokens undefined).
- [ ] **Step 3: Implement the interfaces above.**
- [ ] **Step 4: Run** the same command → PASS, including the Task 1 baseline test unchanged (no `EXPECTED_CHANGES` entries). `npm run storybook:cssprops` succeeds and contains an `"Effects"` group.
- [ ] **Step 5: Commit** `feat(elements): add semantic color tokens and deprecate legacy names`.

---

### Task 4: Layering test with pending-files list

**Files:**
- Create: `src/styles/__tests__/layering.spec.ts`

**Interfaces:**
- Consumes: `palette` keys (`palette.ts`), `DEPRECATED_TOKEN_NAMES` (`semantic.ts`), `component.ts` exports.
- Produces: `PENDING: string[]` — repo-relative files not yet migrated. Each migration task removes its files; Task 10 asserts it is empty.

- [ ] **Step 1: Write the test.** Scanned set: every `*.ts`/`*.tsx` under `src/components` and `src/styles`, excluding `*.stories.tsx`, `*.spec.ts(x)`, `__tests__/`, `theme/palette.ts`, `theme/semantic.ts`, `theme/index.ts`, `theme/theme.ts`. For each file not in `PENDING`, fail (listing file + line) on:
  - a palette name: `\b(neutral|primary|error|warning|success)\d{2,3}\b`
  - a deprecated name as a whole token: `(?<![\w-])(${DEPRECATED_TOKEN_NAMES.join("|")})(?![\w-])`
  - a color literal: `#[0-9a-fA-F]{3,8}\b`, `\brgba?\(`, `\bhsla?\(`
  Permanent allow-list (with reason in a comment): `src/styles/globals.ts` `rgba(0, 0, 0, 0.004)` text-shadow (font-smoothing hack, not a color).
  Second test: every `PENDING` entry still exists (catches stale entries).
- [ ] **Step 2: Populate `PENDING`** by running the test with `PENDING = []` and copying the failing files. Expected set: `src/styles/theme/component.ts`, `src/styles/mixins.ts`, and the 17 `*.styles.ts` files under Buttons, Chips, Overlays/Popover, Overlays/Modal, Content/Disclosure, Content/Tabs, Content/Table, Banners, Icons, Dropdowns (Dropdowns, ListBox, Menu, Select), Inputs (Inputs, ToggleSwitch, FileInput, DateAndTimes/Calendar), plus any file using a deprecated name (e.g. `Fields/Atoms/TextArea/TextArea.styles.ts`, `Fields/Atoms/Message/Message.component.tsx`, `Layout/Navbar/Navbar.component.tsx`).
- [ ] **Step 3: Run** → PASS.
- [ ] **Step 4: Commit** `test(elements): enforce semantic-only color tokens in components`.

---

### Migration tasks (5–9): shared procedure

Each migration task applies this procedure to its files:

1. Replace every palette reference, deprecated name, and color literal with a token from `semanticColors`/`effects`, chosen by **role** (spec "Semantic token set" + "Migration of components"). `text-clr-inverted` on accent / solid status fills → `text-clr-on-accent`; it stays only on `background-clr-inverted` (tooltip).
2. If no semantic token fits a recurring role, add one to `semanticColors` (Task 3 rules), note it in the visual change log header "Added tokens".
3. Where the chosen token's shade differs from before: for tokens in `component.ts`, add `name → new literal` to `EXPECTED_CHANGES`; for local declarations in `*.styles.ts`, nothing to add to tests. In both cases append a row to the visual change log.
4. Remove the files from `PENDING`.
5. Run `npm run test --workspace @atomicjolt/atomic-elements`. If DOM snapshots fail, inspect the diff: accept with `npm run test:update --workspace @atomicjolt/atomic-elements` only if the changes are class hashes / CSS text. Expected: PASS.
6. Commit `refactor(elements): migrate <group> to semantic tokens`, including the visual change log.

### Task 5: `component.ts` token defaults
Files: `src/styles/theme/component.ts`. Known log entries: `time-selected-back-clr` `primary600` → `accent-clr` (primary700); `time-selected-text-clr` / `calendar-selected-text-clr` `neutral100` → `text-clr-on-accent` (neutral50); `chip-border-clr` stays `border-clr`; `toggle-error` `error600` → `error-clr` (same). Shadows: `dropdown-box-shadow` → `{shadow-sm}`.

### Task 6: Buttons, Chips, Banners
Files: `Buttons/Button/Button.styles.ts`, `Chips/Chip/Chip.styles.ts`, `Banners/Banners.styles.ts`. Known log entries (spec): Button danger/success `700/800` → `{s}-clr`/`{s}-clr-hover` (600/700); Banner error bg `error700` → `error-clr`, its button hover/active `error800`/`error900` → nearest status tokens; Chip status borders hex → `{s}-clr-subtle-border`; Button hover shadow → `shadow-sm`.

### Task 7: Inputs, Fields, mixins
Files: `src/styles/mixins.ts`, `Inputs/Inputs.styles.ts`, `Inputs/ToggleSwitch/ToggleSwitch.styles.ts`, `Inputs/FileInput/FileInput.styles.ts`, `Inputs/DateAndTimes/Calendar/Calendar.styles.ts`, `Fields/Atoms/TextArea/TextArea.styles.ts`, `Fields/Atoms/Message/Message.component.tsx`. All focus borders → `border-clr-focus`; log the floating-label variant `primary700` → `border-clr-focus` (neutral600). Read-only `neutral100` → `background-clr-subtle`. Invalid border `error700` → `error-clr` or `error-clr-hover` (log choice).

### Task 8: Dropdowns
Files: `Dropdowns/Dropdowns.styles.ts`, `Dropdowns/ListBox/ListBox.styles.ts`, `Dropdowns/Menu/Menu.styles.ts`, `Dropdowns/Select/Select.styles.ts`. Dropdown/menu/listbox surfaces → `background-clr-raised`; selected item `primary700` → `accent-clr`; disabled `neutral400` → `text-clr-disabled`.

### Task 9: Content, Overlays, Icons, Layout
Files: `Content/Disclosure/Disclosure.styles.ts`, `Content/Tabs/Tabs.Styles.ts`, `Content/Table/Table.styles.ts`, `Overlays/Popover/Popover.styles.ts`, `Overlays/Modal/Modal.styles.ts`, `Icons/Icons.styles.ts`, `Layout/Navbar/Navbar.component.tsx`. Modal surface → `background-clr-raised`, backdrop → `backdrop-clr`, shadows → `shadow-md` (popover) / `shadow-lg` (modal). Tabs inactive `neutral300` → `text-clr-disabled` (log). Icons `rgba(0,0,0,.3)` → `text-clr-disabled` (log).

---

### Task 10: Close out: empty PENDING, docs, changeset

**Files:**
- Modify: `src/styles/__tests__/layering.spec.ts`
- Modify: `docs/Theme/Intro.mdx`
- Create: `.changeset/semantic-color-tokens.md`
- Modify: `docs/superpowers/plans/2026-11-19-semantic-tokens-visual-changes.md`

- [ ] **Step 1:** Replace `PENDING` with `[]` and add `it("all files migrated", () => expect(PENDING).toEqual([]))`. Run tests → PASS.
- [ ] **Step 2:** `docs/Theme/Intro.mdx`: update the `createTheme` example to `accent-clr` / `accent-clr-hover`; add a "Color tokens" section explaining the three layers, listing the semantic tokens by group, recommending semantic overrides, and listing deprecated names → replacements.
- [ ] **Step 3:** Changeset:
```md
---
"@atomicjolt/atomic-elements": minor
---
```
Body per spec "Release": new semantic tokens; components read semantic tokens; palette and deprecated-name overrides still work; deprecated names and replacements; link to/summary of the visual change log.
- [ ] **Step 4: Full verification**
Run: `npm run build --workspace @atomicjolt/atomic-elements` → succeeds.
Run: `npm run test --workspace @atomicjolt/atomic-elements` → PASS.
Run: `npm run test --workspace @atomicjolt/forms` → PASS.
Run (root): `npm run storybook:cssprops` → succeeds.
Run: `npx changeset status` → only `@atomicjolt/atomic-elements` minor.
- [ ] **Step 5: Commit** `docs(elements): document semantic color tokens and add changeset`.
