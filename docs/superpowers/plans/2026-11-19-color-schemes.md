# Color Schemes Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Named color schemes in `createTheme`, a shipped `dark` scheme, and scheme selection through `ElementsProvider` / `useColorScheme()`.

**Architecture:** `createTheme` emits one base CSS block (shared tokens + the base scheme, `light`) and one `[data-color-scheme="<name>"]` block per other scheme. `ElementsProvider` resolves the requested scheme (name or `"system"`) and sets `data-color-scheme` on `<html>`. Components are untouched except for the token role cleanup that the dark scheme needs.

**Tech Stack:** TypeScript, React 18/19, styled-components, Vitest + React Testing Library (jsdom), Storybook, Docusaurus, changesets.

**Spec:** `docs/superpowers/specs/2026-11-19-color-schemes-design.md`

Branch: `feat/color-schemes` (stacked on `feat/semantic-color-tokens` / PR #286). Paths are relative to `packages/atomic-elements/` unless they start with `.storybook/`, `.changeset/`, `docs/` (repo root docs site), or `docs/superpowers/`.

## Global Constraints

- Existing apps see no change unless they opt in: with no scheme props, the page renders exactly as today (light, no body background/text rule).
- `createTheme({ variables })` themes and all existing `Theme` fields (`variables`, `resolvedVariables`, `getVar`, `getVarName`, `getVarValue`, `cssVarPrefix`, `_Component`) keep their meaning, computed for the base scheme.
- Themes have **no** `defaultColorScheme`. Base scheme = `light` if present, else the first scheme defined.
- Child theme shared `variables` win over base theme scheme values.
- Scheme selectors never assume `<html>`: `[data-color-scheme="x"]` when `cssVarsSelector` is `:root`, else `[data-color-scheme="x"] S, S[data-color-scheme="x"]`; scheme blocks emitted after the base block.
- One provider per page; nested providers never touch the attribute; second top-level provider → dev warning; attribute removed only when the last provider unmounts.
- No persistence of the user's choice in the library.
- Dark scheme overrides the deprecated name where one is the source of truth (e.g. `text-clr-alt`, not `text-clr-secondary`).
- WCAG AA for the pair list in Task 4: 4.5:1 text, 3:1 icons/state borders.
- Changeset: minor for `@atomicjolt/atomic-elements` only.
- Conventional commits; end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Review Focus

1. An app upgrading with no new props: `<html>` gets `data-color-scheme="light"` and nothing visible changes (no body rule, base block identical to today). → test in Task 6.
2. A custom theme that sets `accent-clr` only in shared `variables` shows that value in `dark` too (merge rule). → test in Task 1.
3. A custom `cssVarsSelector` (`.app`) produces working dark selectors. → test in Task 1.
4. `"system"` updates live when the OS preference changes while mounted. → test in Task 6.
5. The Docusaurus build (server-side rendering) succeeds with a provider at the site root (no `useLayoutEffect` crash/warning spam). → verification in Task 7.

---

### Task 1: `createTheme` color schemes

**Files:**
- Modify: `src/styles/theme/theme.ts`
- Test: `src/styles/__tests__/theme.spec.ts` (new)

**Interfaces:**
- Produces (exported from `theme.ts` and re-exported from `theme/index.ts`):
  ```ts
  export type ColorSchemeMode = "light" | "dark";
  export interface ColorSchemeConfig { mode?: ColorSchemeMode; variables: Partial<Record<VariableName, string>>; }
  export interface ResolvedColorScheme { mode: ColorSchemeMode; variables: Record<string, string>; resolvedVariables: Record<string, string>; }
  interface CreateThemeProps { cssVarPrefix?; cssVarsSelector?; base?: Theme; variables?: Partial<Record<VariableName, string>>; colorSchemes?: Record<string, ColorSchemeConfig>; }
  interface Theme { /* existing fields */ baseColorScheme: string; colorSchemes: Record<string, ResolvedColorScheme>; /** @internal */ sharedVariables: Record<string, string>; }
  ```
- `ResolvedColorScheme.variables` = the scheme's own (merged) overrides; `resolvedVariables` = the full `--name → value` map with that scheme applied (shared + scheme), same key format as `Theme.resolvedVariables`.
- A theme with no schemes → `colorSchemes: { light: { mode: "light", variables: {}, resolvedVariables: <base map> } }`, `baseColorScheme: "light"`.
- `variables` field = shared + every scheme's keys (base scheme's values win for the value).

- [ ] **Step 1: Write failing tests** (`theme.spec.ts`), rendering `<theme._Component />` with RTL and reading `document.head` style text, or asserting on fields:
  - `"theme without schemes is unchanged"`: `createTheme({ variables: { a: "red" } })` → `resolvedVariables["--a"] === "red"`, `baseColorScheme === "light"`, CSS contains `:root{` with `--a:red` and no `data-color-scheme`.
  - `"base block holds shared + light; dark block holds overrides"`: schemes `{ light: { variables: { bg: "white" } }, dark: { variables: { bg: "black" } } }`, shared `{ gap: "4px" }` → CSS has `:root{…--gap:4px…--bg:white…color-scheme:light`, then `[data-color-scheme="dark"]{--bg:black;color-scheme:dark}`; dark block does not contain `--gap`.
  - `"base scheme is the first scheme when no light"`: `{ dark: {…}, dim: { mode: "dark", … } }` → `baseColorScheme === "dark"`.
  - `"custom selector scopes schemes"`: `cssVarsSelector: ".app"` → dark selector is `[data-color-scheme="dark"] .app,.app[data-color-scheme="dark"]` (normalize whitespace when asserting).
  - `"child shared variables beat base scheme values"` (Review Focus 2): base has `dark: { "accent-clr": "teal" }`; child `createTheme({ base, variables: { "accent-clr": "red" } })` → `child.colorSchemes.dark.resolvedVariables["--accent-clr"] === "red"`, and the dark CSS block has no `--accent-clr`.
  - `"child scheme values merge per scheme"`: base dark `{ a: "1", b: "2" }`, child dark `{ b: "3" }` → child dark variables `{ a: "1", b: "3" }`.
  - `"shared layer stays separate"`: child of a base with schemes → `child.sharedVariables` has no scheme-only keys.
  - `"aliases resolve across layers"`: dark `{ x: "{y}" }`, shared `{ y: "blue" }` → dark resolved `--x` is `var(--y)`.
  - Errors: scheme `dim` without `mode` throws `/mode/`; alias to undefined token throws (existing message).
  - `"getVarValue uses base scheme"`.
- [ ] **Step 2:** Run `npx vitest run src/styles/__tests__/theme.spec.ts` (in `packages/atomic-elements`) → FAIL.
- [ ] **Step 3: Implement** in `theme.ts`. Merge per spec §2 using `base.sharedVariables` (default `{}`), never `base.variables`. Resolve each layer with the existing `{name}` resolver against the union of shared + all scheme keys. Build CSS as `css` blocks inside one `createGlobalStyle`.
- [ ] **Step 4:** Run `npm run test --workspace @atomicjolt/atomic-elements` → PASS (including `tokens.regression.spec.ts`, untouched).
- [ ] **Step 5: Commit** `feat(elements): support named color schemes in createTheme`.

### Task 2: `defaultTheme` with a `light` scheme

**Files:**
- Modify: `src/styles/theme/index.ts`, `src/styles/__tests__/tokenResolution.ts`, `bin/update-css-props.mts` (only if it breaks)
- Test: `src/styles/__tests__/semantic.spec.ts`

**Interfaces:**
- Consumes: Task 1 `colorSchemes` option.
- Produces: `defaultTheme` = `createTheme({ variables: { …foundations, …palette, …component }, colorSchemes: { light: { mode: "light", variables: { …semanticColors, …deprecatedColors, …effects } } } })`. `variables` export stays the full merged map (for `VariableName`).
- Produces: `resolveToLiteral(theme: Theme, name: string, scheme?: string): string` — uses `theme.colorSchemes[scheme].resolvedVariables` when `scheme` is given, else `theme.resolvedVariables`.

- [ ] **Step 1: Failing test** in `semantic.spec.ts`: `"semantic tokens live in the light scheme"` → `defaultTheme.colorSchemes.light.variables["text-clr"] === "{neutral800}"` and `"text-clr" in defaultTheme.sharedVariables === false`; and `resolveToLiteral(defaultTheme, "text-clr", "light") === resolveToLiteral(defaultTheme, "text-clr")`.
- [ ] **Step 2:** Run → FAIL.
- [ ] **Step 3:** Implement.
- [ ] **Step 4:** Full suite → PASS; regression baseline unchanged; `npm run storybook:cssprops` (repo root) still emits `Colors` with the semantic tokens.
- [ ] **Step 5: Commit** `refactor(elements): move semantic tokens into the light color scheme`.

### Task 3: Token role cleanup (fill tokens and friends)

**Files:**
- Modify: `src/styles/theme/semantic.ts`, `src/styles/theme/component.ts`, `src/components/Buttons/Button/Button.styles.ts`, `src/components/Banners/Banners.styles.ts`, `src/components/Dropdowns/ListBox/ListBox.styles.ts`, `src/components/Dropdowns/Menu/Menu.styles.ts`, `src/components/Content/Table/Table.styles.ts`, `src/components/Content/Tabs/Tabs.Styles.ts`, `src/components/Inputs/Inputs.styles.ts`
- Test: `src/styles/__tests__/semantic.spec.ts`

**Interfaces:**
- Produces semantic tokens (light values): `accent-clr-fill: {accent-clr}`, `accent-clr-fill-hover: {accent-clr-hover}`, `{error,success,warning}-clr-fill: {{s}-clr-hover}`, `{s}-clr-fill-hover: {{s}-clr-active}`, `text-clr-tertiary: {neutral400}`, `background-clr-disabled: {neutral300}`. `info-clr-fill*` already exist.
- Repoints (behind `text-clr-on-accent`, or a checked control): Button primary/error/success bg + hover; error Banner bg/hover/active (`error-clr-fill`, `-fill-hover`); ListBox selected + selected hover; Menu focused item; `toggle-checked`, `checkbox-checked`, `radio-checked`, `time-selected-back-clr`, `calendar-selected-bg-clr`, `chip-selected-bg-clr`, `chip-selected-hover-bg-clr`; `Table.styles.ts:161` if it sits behind text. Stay on `accent-clr`: links, `banner-icon-clr`, `progress-circle-indicator-clr`, link-variant button text.
- Also: invalid floating label `error-clr-subtle-text` → `error-clr`; Menu section title → `text-clr-tertiary`; disabled tab bg → `background-clr-disabled`.

- [ ] **Step 1: Failing test** `"fill tokens keep today's shades"`: `accent-clr-fill` ≡ `primary700`, `accent-clr-fill-hover` ≡ `primary800`, `error-clr-fill` ≡ `error700`, `success-clr-fill-hover` ≡ `success800`, `text-clr-tertiary` ≡ `neutral400`, `background-clr-disabled` ≡ `neutral300` (via `resolveToLiteral`).
- [ ] **Step 2:** Run → FAIL. **Step 3:** Implement tokens and repoints.
- [ ] **Step 4:** Full suite → PASS. Only the invalid floating label changes shade (`error800` → `error600`): create `docs/superpowers/plans/2026-11-19-color-schemes-visual-changes.md` (same table format as the semantic-tokens log) and log it there. Snapshot diffs must be class-hash only before `test:update`.
- [ ] **Step 5: Commit** `refactor(elements): add fill and role tokens ahead of dark scheme`.

### Task 4: Contrast test harness

**Files:**
- Create: `src/styles/__tests__/contrast.ts`, `src/styles/__tests__/contrast.spec.ts`

**Interfaces:**
- Produces: `contrastRatio(a: string, b: string): number` for `hsl(...)` / `#hex` literals (throws on unsupported formats, e.g. translucent `hsla` with alpha < 1).
- Produces: `CONTRAST_PAIRS: { fg: string; bg: string; min: 4.5 | 3 }[]`, at least: `text-clr`/`background-clr`, `text-clr`/`background-clr-raised`, `text-clr`/`background-clr-subtle`, `text-clr-secondary`/`background-clr`, `text-clr-on-accent`/`accent-clr-fill`, `text-clr-on-accent`/`accent-clr-fill-hover`, `text-clr-on-accent`/`{error,success}-clr-fill`, `accent-clr`/`background-clr` (4.5, links), `{s}-clr-subtle-text`/`{s}-clr-subtle` for all four statuses, `text-clr`/`{s}-clr-subtle` (banner text), `text-clr-inverted`/`background-clr-inverted`, `icon-clr-secondary`/`background-clr` (3), `border-clr-strong`/`background-clr` (3), `border-clr-focus`/`background-clr` (3).
- Produces: `LIGHT_KNOWN_FAILURES: string[]` (`"fg/bg"` keys) — pairs that fail in today's light scheme; documented, not fixed here.

- [ ] **Step 1:** Write `contrastRatio` unit tests: white/black = 21, `hsl(0, 0%, 100%)`/`hsl(0, 0%, 100%)` = 1, white on `success600` ≈ 3.21 (±0.01).
- [ ] **Step 2:** Run → FAIL; implement; → PASS.
- [ ] **Step 3:** Test `"light scheme meets AA except known failures"`: every pair not in `LIGHT_KNOWN_FAILURES` passes its `min`; every entry in `LIGHT_KNOWN_FAILURES` actually fails (keeps the list honest). Populate the list from the first run and copy it into the color-schemes visual change log under "Known light contrast failures".
- [ ] **Step 4:** Test `"every scheme meets AA"` iterating `Object.keys(defaultTheme.colorSchemes).filter(s => s !== "light")` — passes vacuously now, guards Task 5.
- [ ] **Step 5: Commit** `test(elements): add WCAG contrast checks for color schemes`.

### Task 5: Dark scheme

**Files:**
- Modify: `src/styles/theme/semantic.ts` (export `darkColors`, `darkEffects`), `src/styles/theme/index.ts`
- Test: `src/styles/__tests__/semantic.spec.ts`, `contrast.spec.ts` (already covers it)

**Interfaces:**
- Produces: `defaultTheme.colorSchemes.dark = { mode: "dark", variables: { …darkColors, …darkEffects } }`.
- Anchors (spec §7): `background-clr` `{neutral900}`, `background-clr-raised` `{neutral800}`, `text-clr` `{neutral100}`, text secondary `{neutral300}` (set on `text-clr-alt`), `border-clr` `{neutral700}` (set on `border-clr-primary`), `accent-clr` `{primary400}`. Builder chooses the rest, overriding the deprecated name wherever it is the source of truth (`background-clr-alt`, `text-clr-alt`, `border-clr-primary`, `outline-clr-primary`, `accent-clr-alt`, `{s}-clr-alt`, `info-clr`, `info-clr-alt`).

- [ ] **Step 1: Failing tests:** `"dark anchors"` (each anchor via `resolveToLiteral(defaultTheme, name, "dark")`); `"dark overrides deprecated sources"`: `"text-clr-alt" in defaultTheme.colorSchemes.dark.variables` and `!("text-clr-secondary" in …dark.variables)`; `"consumer override of a deprecated name reaches dark"`: `createTheme({ base: defaultTheme, variables: { "text-clr-alt": "red" } })` → dark `text-clr-secondary` resolves to `red`.
- [ ] **Step 2:** Run → FAIL. **Step 3:** Implement; iterate values until `contrast.spec.ts` "every scheme meets AA" passes. Add palette shades only if a pair can't pass otherwise (log any addition).
- [ ] **Step 4:** Full suite → PASS. Write the full dark value table (token → shade → contrast where relevant) into the visual change log file for the PR.
- [ ] **Step 5: Commit** `feat(elements): ship a dark color scheme`.

### Task 6: `ElementsProvider` scheme selection and `useColorScheme`

**Files:**
- Create: `src/components/colorScheme.ts` (pure helpers + page registry)
- Modify: `src/components/ElementsProvider.tsx`, `src/components/index.ts`, `src/styles/globals.ts`
- Test: `src/components/colorScheme.spec.ts`, `src/components/ElementsProvider.spec.tsx`

**Interfaces:**
- `colorScheme.ts`:
  - `resolveColorScheme(theme: Theme, requested: string, prefersDark: boolean): string` — `"system"` → scheme named `dark`/`light` per `prefersDark`, else first scheme whose `mode` matches, else `theme.baseColorScheme`; unknown name → `theme.baseColorScheme` (caller warns).
  - `acquireDocumentColorScheme(): { release: () => void; alreadyMounted: boolean }` — increments a module-level mount count; `alreadyMounted` is true if another top-level provider was mounted (caller warns); `release` decrements and removes `data-color-scheme` from `document.documentElement` when the count reaches zero.
  - `setDocumentColorScheme(name: string): void` — sets the attribute.
- `ElementsConfig` adds `colorScheme?: string`, `defaultColorScheme?: string`, `onColorSchemeChange?: (scheme: string) => void`.
- `useColorScheme(): { colorScheme: string; resolvedColorScheme: string; setColorScheme: (scheme: string) => void; colorSchemes: string[] }` — exported from `src/components/index.ts`; throws outside a provider (same message style as `useElementsConfig`).
- Nested provider detection: an existing `ElementsProviderContext` value means nested → no attribute writes; inner `colorScheme` prop → `console.warn` in dev (`process.env.NODE_ENV !== "production"`), ignored; inner `useColorScheme` returns the outer's state.
- Effects use `useIsomorphicLayoutEffect` (`typeof window !== "undefined" ? useLayoutEffect : useEffect`) — add to `src/hooks/` if absent.
- `CssGlobalDefaults` (rendered only with `applyDefaultStyles`) adds, for each scheme other than `theme.baseColorScheme`, `[data-color-scheme="<name>"] body { background-color: var(--background-clr); color: var(--text-clr); }` using `props.theme` from styled-components.

- [ ] **Step 1: Failing tests** (`colorScheme.spec.ts`): `resolveColorScheme` for `"dark"`, `"system"` (true/false), unknown name, custom schemes (`dim` mode dark, no `dark` scheme → `dim` when prefersDark); registry: two acquires → second `alreadyMounted: true`; attribute removed only after both releases.
- [ ] **Step 2: Failing tests** (`ElementsProvider.spec.tsx`), with a `matchMedia` mock (`vi.stubGlobal`) that can fire `change`:
  - `"defaults to light"`: render `<ElementsProvider>` → `document.documentElement.dataset.colorScheme === "light"`; no `[data-color-scheme="light"] body` rule and no body rule at all without `applyDefaultStyles` (Review Focus 1).
  - `"controlled"`: `colorScheme="dark"` → attribute `dark`; `setColorScheme("light")` from the hook calls `onColorSchemeChange("light")` and the attribute stays `dark` until the prop changes.
  - `"uncontrolled"`: `defaultColorScheme="dark"` → `dark`; `setColorScheme("light")` → `light` and `onColorSchemeChange("light")` called.
  - `"system follows the OS live"` (Review Focus 4): `colorScheme="system"`, mock dark → `dark`; fire change to light → `light`; hook `colorScheme === "system"`, `resolvedColorScheme === "light"`.
  - `"unknown scheme warns and falls back"`.
  - `"nested provider does not touch the attribute"`: outer `dark`, inner `colorScheme="light"` → attribute `dark`, warning logged, inner hook `resolvedColorScheme === "dark"`.
  - `"second top-level provider warns; attribute survives until last unmount"`.
  - `"removes the attribute on unmount"`.
  - `"applyDefaultStyles adds the dark body rule"`: style text contains `[data-color-scheme="dark"] body`.
- [ ] **Step 3:** Run → FAIL. **Step 4:** Implement. **Step 5:** Full suite → PASS.
- [ ] **Step 6: Commit** `feat(elements): select color schemes with ElementsProvider and useColorScheme`.

### Task 7: Storybook toolbar and docs-site provider

**Files:**
- Modify: `.storybook/preview.tsx`
- Create: `docs/src/theme/Root.tsx` (Docusaurus swizzled root)
- Modify: `packages/atomic-elements/docs/components/Example.tsx`

**Interfaces:**
- Storybook: `globalTypes.colorScheme` (toolbar, items `light`, `dark`, `system`, default `light`); decorator passes `context.globals.colorScheme` to `ElementsProvider colorScheme`.
- Docs: `Root({ children })` renders `<ElementsProvider>{children}</ElementsProvider>` (imported from `@atomicjolt/atomic-elements`); `Example.Rendered` drops its own provider.

- [ ] **Step 1:** Implement both.
- [ ] **Step 2: Verify** (repo root): `npm run build --workspace @atomicjolt/atomic-elements` → succeeds; `npm run docusaurus:build` → succeeds with no `useLayoutEffect` server warnings (Review Focus 5); `npm run storybook:build` → succeeds. Manually: start Storybook, toggle Dark on Button, Banner, Chip, Dropdowns, Modal, Tabs, Table, Inputs, Calendar; note anything off in the visual change log.
- [ ] **Step 3: Commit** `chore: color scheme toolbar in Storybook and single provider for the docs site`.

### Task 8: Docs, changeset, final verification

**Files:**
- Create: `packages/atomic-elements/docs/Theme/ColorSchemes.mdx`, `.changeset/color-schemes.md`

- [ ] **Step 1:** `ColorSchemes.mdx` per spec §10: selecting a scheme (`colorScheme`, `defaultColorScheme`, `"system"`, `useColorScheme` toggle example), storing the choice in the app, setting `data-color-scheme` in server-rendered HTML, `applyDefaultStyles` and the page background, one provider per page, writing a custom scheme (incl. `mode`, and "set accent colors per scheme" known limitation).
- [ ] **Step 2:** Changeset (minor, atomic-elements): color schemes, dark scheme, new props/hook, new tokens (`*-fill`, `text-clr-tertiary`, `background-clr-disabled`), the invalid floating label shade change.
- [ ] **Step 3: Verify:** `npm run test --workspace @atomicjolt/atomic-elements` → PASS; `npm run test --workspace @atomicjolt/forms` → PASS; `npx changeset status` → only atomic-elements, minor.
- [ ] **Step 4: Commit** `docs(elements): document color schemes and add changeset`.
