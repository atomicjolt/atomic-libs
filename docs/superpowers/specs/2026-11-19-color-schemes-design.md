# Color Schemes (Light / Dark) — Design

Package: `@atomicjolt/atomic-elements` · Builds on: semantic color tokens (PR #286, branch
`feat/semantic-color-tokens`; this work branches from it) · Date: 2026-11-19

## Intent

Let apps built on atomic-elements switch between named color schemes, starting with
`light` and `dark`, and leave room for more (e.g. `highContrast`) without API changes.
The library ships a ready-made dark scheme. Components don't change: schemes remap
semantic tokens, which components already read exclusively.

## Goals

- `createTheme` accepts named `colorSchemes`; `light` is a scheme and the base (applies
  when no scheme is selected).
- `defaultTheme` ships `light` (today's look) and `dark`.
- `ElementsProvider` selects the active scheme (`colorScheme` / `defaultColorScheme`
  props, `"system"` support, `onColorSchemeChange`); `useColorScheme()` reads and changes
  it. Choosing a scheme is the provider's job only; themes don't carry a default.
- Both schemes meet WCAG AA for text/icon pairs, enforced by tests.
- Existing apps see no change unless they opt in.

## Non-goals

- Persisting the user's choice (apps store it; library provides the hook/callback).
- Per-section schemes (nested scopes). One scheme per page.
- A `highContrast` scheme (API supports it; values are future work).
- A server-rendering anti-flash script. Apps that render HTML on the server can set
  `data-color-scheme` on `<html>` themselves; documented, not built.

## Anti-goals

- Upgrading changes how an existing app looks. Default stays `light` even when the OS is
  dark; `"system"` is opt-in. (LTI apps run in iframes inside Canvas, which has no dark
  mode; auto-dark would look broken.)
- Breaking existing `createTheme({ variables })` themes or the `Theme` fields they use.

## Constraints

- Builds on the semantic token layering: palette → semantic → component. Components and
  component tokens never reference palette shades (enforced by `layering.spec.ts`).
- Token aliases (`{name}`) resolve to live `var(--name)` references, so overriding a
  semantic token in a scheme block reaches every component token built on it.
- Deprecated token names hold the source value and new names reference them
  (`text-clr-secondary: {text-clr-alt}`), so consumer overrides of old names keep working.
- styled-components `createGlobalStyle`; `ElementsProvider` renders no wrapper element.

## Approaches considered

- **A. One CSS block per scheme, switched by `data-color-scheme` on `<html>` (chosen).**
  All schemes are in the stylesheet; switching only flips an attribute. Works without JS
  if the attribute is set in HTML. Supports any number of named schemes.
- B. Rebuild the global variables block for the active scheme on each switch. Rejected:
  restyles on every switch, requires JS before anything renders correctly, and nothing
  outside React can select a scheme.
- C. CSS `light-dark()` inside each token. Rejected: limited to two schemes and to color
  values (can't vary shadows).

## Design

### 1. `createTheme` API

```ts
type ColorSchemeMode = "light" | "dark";

interface ColorSchemeConfig {
  mode?: ColorSchemeMode;               // defaults to the name for "light"/"dark"; required otherwise
  variables: Partial<Record<VariableName, string>>;
}

interface CreateThemeProps {
  cssVarPrefix?: string;
  cssVarsSelector?: string;             // default ":root"
  base?: Theme;
  variables?: Partial<Record<VariableName, string>>;   // shared across all schemes
  colorSchemes?: Record<string, ColorSchemeConfig>;
}
```

- A theme with no `colorSchemes` behaves exactly as today (one implicit `light` scheme
  containing nothing extra).
- The **base scheme** is `light` if the theme has one, otherwise the first scheme
  defined. Its values go in the base CSS block. Themes have no `defaultColorScheme`
  option: which scheme a page *shows* is decided by `ElementsProvider` (section 6).
- Throw at `createTheme` time if: a scheme other than `light`/`dark` has no `mode`;
  an alias references a token defined in no layer (existing check, now over the union of
  shared + all scheme keys).

### 2. Merging with `base`

For each scheme name present in either theme:
`scheme.variables = { ...base.scheme.variables (minus keys the child sets in shared variables), ...child.scheme.variables }`.
Shared: `{ ...base.variables, ...child.variables }`.

**Child shared values win over base scheme values.** A theme that sets `accent-clr` in
`variables` gets that value in every scheme, unless it also sets it under a scheme. This
keeps today's themes (which only know `variables`) correct in dark mode.

### 3. `defaultTheme` content

- Shared `variables`: palette, foundations, component tokens.
- `colorSchemes.light`: `{ mode: "light", variables: semanticColors + deprecatedColors + effects }`
  (moved out of shared; values unchanged).
- `colorSchemes.dark`: `{ mode: "dark", variables: dark overrides }` (section 7).

Because light semantic values move into a scheme, a consumer theme that overrides a
semantic token in shared `variables` still wins (section 2).

Implementation note: `Theme.variables` holds every key from every scheme (section 5), so
the theme must keep its shared layer separately (e.g. a private `sharedVariables`) and
section 2's merge must use that, not `base.variables`, or scheme keys leak into shared.

### 4. Generated CSS

Let `S` = `cssVarsSelector`, `D` = base scheme (section 1).

```css
S { /* shared + scheme D */ color-scheme: <D.mode>; }
<scope(name)> { /* scheme overrides */ color-scheme: <mode>; }   /* every scheme except D */
```

`scope(name)` = `[data-color-scheme="name"]` when `S` is `:root` (the attribute sits on
`<html>`), otherwise `[data-color-scheme="name"] S, S[data-color-scheme="name"]`. Scheme
blocks are emitted after the base block, so with equal specificity they still win.
Selectors don't assume the attribute is on `<html>`, so a future wrapper element could
scope a scheme without CSS changes. Selecting `D` explicitly needs no block.

A block emits only the keys the scheme sets, resolved through the same alias resolver.

### 5. `Theme` object

Existing fields keep their meaning, computed for the **base scheme** (shared + `D`):
`variables`, `resolvedVariables`, `getVar`, `getVarName`, `getVarValue`, `cssVarPrefix`.
`variables` also contains every key from every scheme, so `colorProperty`'s membership
check (`$color` / `$bg` props) accepts any token.

New fields:
```ts
baseColorScheme: string;      // D; read-only info, not a selection default
colorSchemes: Record<string, { mode: ColorSchemeMode; variables: Record<string, string>; resolvedVariables: Record<string, string> }>;
```
(`resolvedVariables` per scheme = full resolved map with that scheme applied; used by
contrast tests and Storybook.)

### 6. Selecting a scheme

`ElementsProvider` props (all optional):
```ts
colorScheme?: string;                          // scheme name or "system"
defaultColorScheme?: string;                   // uncontrolled initial value; default "light" (or theme.baseColorScheme)
onColorSchemeChange?: (scheme: string) => void;
```
- Controlled when `colorScheme` is passed; `setColorScheme` then only calls
  `onColorSchemeChange`. Uncontrolled otherwise (state starts at `defaultColorScheme`).
- `"system"`: `matchMedia("(prefers-color-scheme: dark)")`, listening for changes;
  resolves to the scheme named `dark`/`light` if present, else the first scheme whose
  `mode` matches.
- Unknown names: dev-mode `console.warn`, fall back to the base scheme.
- **One provider per page is the contract.** The provider sets
  `document.documentElement.dataset.colorScheme` to the resolved name in a layout effect.
  Nested providers (detected through the existing context) never touch the attribute and
  follow the outer scheme; an inner `colorScheme` prop logs a dev warning and is ignored.
  If two top-level providers mount at once, log a dev warning ("only one ElementsProvider
  should be mounted"); a module-level mount count ensures the attribute is removed only
  when the last provider unmounts. No ownership logic beyond that.
- **Docs site fix:** `packages/atomic-elements/docs/components/Example.tsx` currently
  wraps each example in its own `ElementsProvider`. Replace that with one provider at the
  Docusaurus site root (swizzled `Root`), and remove the per-example providers.
- `applyDefaultStyles` sets `body { background-color: var(--background-clr); color:
  var(--text-clr); }` **only inside non-default scheme scopes** (e.g.
  `:root[data-color-scheme="dark"] body`). The default scheme's page stays exactly as
  today (browser-default body text), honouring the anti-goal, while dark pages get a
  dark background. *(Builder-check finding; my call.)*
- The Docusaurus docs site's own light/dark toggle is not wired to examples in this work
  (examples stay light, as today). Future work.

`useColorScheme()` (exported from the package; throws outside a provider, like
`useProvider`):
```ts
{
  colorScheme: string;          // requested: a name or "system"
  resolvedColorScheme: string;  // the scheme actually applied
  setColorScheme: (scheme: string) => void;
  colorSchemes: string[];       // available names
}
```

### 7. Dark scheme values

The builder proposes a value for every semantic color and effect token, using existing
palette shades (no new shades unless a contrast requirement can't be met otherwise).
Anchors: `background-clr` `neutral900`, `background-clr-raised` `neutral800`,
`text-clr` `neutral100`, `text-clr-secondary` `neutral300`, `border-clr` `neutral700`,
`accent-clr` (text/icon/link use) `primary400`. Status subtle backgrounds use dark
shades (800/900) with light subtle text; shadows get heavier opacity.

**Where an old name is the source of truth** (e.g. `text-clr-alt` feeds
`text-clr-secondary`), the dark scheme overrides the **old** name, so a consumer override
of either name still behaves consistently in dark.

The full value table goes in the PR description for review in Storybook.

### 8. Token role cleanup (before dark values)

Some components use a token whose name doesn't match its role; a role-based dark scheme
would map them wrong. Add role tokens (light values = today's shades, so no visual
change in light) and repoint:

- **Solid fills behind `text-clr-on-accent`:** add `accent-clr-fill`,
  `accent-clr-fill-hover`, and `{error,success,warning}-clr-fill`, `-fill-hover`
  (`info-clr-fill`, `-fill-hover`, `-fill-active` already exist from #286). Light values:
  `accent-clr-fill: {accent-clr}`, `accent-clr-fill-hover: {accent-clr-hover}`;
  error/success/warning fill `{s}-clr-hover` (700), fill-hover `{s}-clr-active` (800). Buttons (primary, error, success), selected
  listbox/menu items, selected chips, checkbox/radio/toggle checked, calendar selected,
  error banner, progress indicator use the fill tokens. `accent-clr` stays for accent
  text, icons, links and borders. Needed because in dark, accent text must be light
  (`primary400`) while a fill under white text must stay dark enough.
- Invalid floating label: `error-clr-subtle-text` → `error-clr`.
- Menu section title: `text-clr-disabled` → `text-clr-secondary`, restyled as a small uppercase heading matching ListBox section titles (changed after review; no `text-clr-tertiary` token).
- Disabled tab background: `background-clr-active` → new `background-clr-disabled`
  (`neutral300`).
- Disclosure trigger base: `background-clr-subtle-hover` stays (it is a pressed-looking
  surface); builder may introduce a better name if one recurs.

The builder may add further role tokens following the `{role}-clr-{modifier}` pattern
when dark values expose another mismatch; each addition is listed in the PR.

### 9. Tests

- `createTheme`: CSS output (blocks, selectors for `:root` and a custom selector,
  `color-scheme`), merge rule (child shared beats base scheme), errors from section 1,
  `Theme` fields for default scheme, theme with no schemes unchanged.
- Existing `tokens.regression.spec.ts` keeps passing against the default (light) scheme.
- Contrast: for each scheme, every text/icon token over its background pair meets
  4.5:1 (text) or 3:1 (icons, borders that convey state, large text). The builder
  defines the pair list (e.g. `text-clr`/`background-clr`, `text-clr-on-accent`/
  `accent-clr-fill`, `{s}-clr-subtle-text`/`{s}-clr-subtle`, `accent-clr`/
  `background-clr`, `text-clr`/`background-clr-raised`).
- Provider/hook: default light; controlled vs uncontrolled; `"system"` follows a mocked
  `matchMedia` and its change events; provider sets/removes the `<html>` attribute;
  nested provider doesn't; two top-level providers warn and the attribute survives until
  the last unmounts; unknown name falls back with a warning.
- Layering test unchanged; it continues to protect components.

### 10. Docs, Storybook, release

- Storybook: a toolbar control to switch scheme for all stories (global decorator
  sets `colorScheme` on the stories' `ElementsProvider`).
- Docs: `docs/Theme/ColorSchemes.mdx` covering selecting a scheme, `"system"`,
  storing the choice in the app, setting the attribute in server-rendered HTML,
  `applyDefaultStyles` and the page background, and writing custom schemes (including
  "if you override accent colors, also provide `dark` values").
- Changeset: minor for `@atomicjolt/atomic-elements`.

## Known limitation

A brand theme that overrides `accent-clr` only in shared `variables` gets that color in
dark too (by the merge rule), but `accent-clr-fill` in dark is set explicitly by the
library's dark scheme, so buttons revert to the library's dark fill. Documented: brand
themes should set accent values per scheme.

## Left to the builder

- Exact dark values beyond the anchors, within the contrast tests.
- The contrast pair list.
- Internal structure of the scheme-merging code and file placement for the provider
  logic and hook.
- Storybook toolbar wiring details.

## Later changes (during review)

- `cssVarsSelector` and `cssVarPrefix` were removed; variables always live on `:root`, and scheme blocks use `[data-color-scheme="<name>"]`. The prefix never worked (components read unprefixed names).
- `Theme.getVarName` and per-scheme `resolvedVariables` were removed (unused outside tests).
- Themes always come from `createTheme`, so the fallback for hand-built base themes was dropped.
