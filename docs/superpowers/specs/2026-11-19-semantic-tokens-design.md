# Semantic Color Tokens — Design

Package: `@atomicjolt/atomic-elements` · Release: **3.12.0** (minor, no breaking changes) · Date: 2026-11-19

## Intent

Groundwork for scalable theming in the library, starting with light/dark (and later
other) color schemes. Color schemes only work if components never reference raw
palette shades directly: a scheme must be able to remap *meaning* ("subtle surface",
"text on accent") without touching components. This work restructures the theme tokens
into explicit layers and migrates every component off palette references.

Color schemes themselves (`colorSchemes` in `createTheme`, `ElementsProvider` /
`useColorScheme`, dark values) are a **follow-up project** and out of scope here — see
"Future work" for the decisions already made so this work doesn't contradict them.

## Goals

- Split `src/styles/variables.ts` into layered token files under `src/styles/theme/`.
- Define a complete semantic color token set (below) whose light values reproduce today's look.
- Migrate all components and component tokens to reference only semantic tokens.
- Enforce the layering with a test.
- `Color` type = `PaletteColor | SemanticColor`.

## Non-goals

- Dark mode values, `colorSchemes` API, scheme selection, provider/hook changes.
- Changing non-color tokens (spacing, typography, sizes) beyond moving them.
- Unifying the component-token naming convention (`btn-hover-bg-clr`) with the
  semantic one (`text-clr-hover`). Both conventions stay.

## Anti-goals

- Any unannounced visual change. Small visual changes are acceptable **only** when they
  come from mapping to an existing semantic token, and every one must be listed (see
  "Visual change log").
- Breaking `createTheme`'s public behavior or the `@styles/theme` import path.
- Changing the meaning of any existing token name. Renames keep the old name as an
  alias resolving to the same value; this release must stay a minor.

## Constraints

- Monorepo, npm workspaces; Vitest + React Testing Library; styled-components.
- Existing tests are DOM snapshots — they do not detect color changes.
- `{name}` aliases in token values resolve to `var(--name)` at runtime (see
  `createTheme`), so semantic tokens referencing palette tokens stay live.
- `@styles/variables` is an internal path alias; `src/styles/index.ts` only exports
  `createTheme`, `defaultTheme`, `variableAlias`. Moving files is not a public break.

## Approaches considered

1. **Layered files + phased migration (chosen).** Palette → semantic → component tiers in
   separate files; move first with zero value changes, then add semantic tokens, then
   migrate components group by group. Each step independently verifiable.
2. **Big-bang rewrite** of tokens and components in one pass. Rejected: no way to tell a
   restructuring mistake from an intended visual change.
3. **Invert the neutral palette for dark mode, skip semantic tokens.** Rejected: works
   only for neutrals, makes `neutral50` mean "dark" in dark mode, and doesn't scale to
   additional schemes like high contrast.

## Design

### File layout

```
src/styles/theme/
  index.ts        re-exports createTheme, defaultTheme, variableAlias, Theme, types
  theme.ts        createTheme / variableAlias (moved from src/styles/theme.ts, unchanged)
  palette.ts      raw color scales only (neutral*, primary*, error*, warning*, success*)
  foundations.ts  non-color primitives: border widths/styles, radius, font, font sizes,
                  letter spacing, line heights, spacing, sizes, icon sizes
  semantic.ts     semantic color + effect tokens (below); later: per-scheme overrides
  component.ts    all component token groups (input, button, banner, …, scrollArea)
```

- `src/styles/theme.ts` and `src/styles/variables.ts` are deleted. `@styles/theme`
  resolves to `theme/index.ts`. `src/styles/index.ts` keeps its current exports.
- `bin/update-css-props.mts` imports `src/styles/variables` and runs in the root
  `prepare` script (every `npm install`) and `storybook:build`. It builds Storybook
  groups from the module's export names (`"Button"`, `"Colors"`, …) that stories pass to
  `getCssProps(...)`. As part of the move step, point it at the new files and keep the
  existing group names working (including `"Colors"`, now palette + semantic). *(Builder-check finding.)*
- The aggregate `variables` object (spread of all groups) lives in `theme/index.ts` or
  `theme/theme.ts`; `defaultTheme = createTheme({ variables })` as today.
- Non-color tokens that currently live in the `border` group (`border-width`,
  `border-style`, `radius`, `border`, `outline-width`, `outline-style`, `outline`) go in
  `foundations.ts`; their color members (`border-clr-primary`, `outline-clr-primary`)
  move to `semantic.ts`. Composite tokens like `border` may reference semantic tokens.

### Types

- `palette.ts` exports `PaletteColor = keyof typeof palette`.
- `semantic.ts` exports `SemanticColor = keyof typeof semanticColors` (excluding
  deprecated aliases and non-color effects such as shadows).
- `theme/index.ts` exports `Color = PaletteColor | SemanticColor`. Palette names stay
  valid for `$color` / `$bg` props so app code like `$bg="neutral100"` keeps compiling.
- `ProgressCircle.component.tsx` (only external importer of `@styles/variables`) imports
  `Color` from `@styles/theme`.

### Layering rules

1. Palette tokens hold literal values only.
2. Semantic tokens reference palette tokens (or literals for effects like shadows/backdrop).
3. Component tokens (in `component.ts` and local `--x-clr` declarations in
   `*.styles.ts`) and component styles reference **only** semantic or other component
   tokens — never palette tokens, never hardcoded color literals.
4. Stories and specs are exempt.

Shared component styling in `src/styles/` (notably `mixins.ts`: read-only input
`neutral100`, invalid border `error700`) is component code and is migrated too.

Enforced by a Vitest test (e.g. `src/styles/theme/layering.spec.ts`) that:
- scans `component.ts` values, `src/components/**/*.{ts,tsx}`, and `src/styles/**/*.ts`
  except `theme/palette.ts` and `theme/semantic.ts`, excluding `*.stories.tsx` /
  `*.spec.tsx`, failing on `/\b(neutral|primary|error|warning|success)\d{2,3}\b/`;
- fails on hardcoded color literals (`#hex`, `rgb(a)(`, `hsl(a)(`) in those same files.

### Semantic token set

Light values reproduce today's usage. `{s}` ∈ `error`, `warning`, `success`, `info`.
"Was" = the existing name that becomes a deprecated alias.

| Token | Light value | Notes |
|---|---|---|
| `background-clr` | `{neutral50}` | page / default surface |
| `background-clr-subtle` | `{neutral100}` | was `background-clr-alt` |
| `background-clr-hover` | `{neutral100}` | hover on default surface |
| `background-clr-subtle-hover` | `{neutral200}` | hover on subtle surface |
| `background-clr-active` | `{neutral300}` | pressed / selected-strong |
| `background-clr-raised` | `{background-clr}` | modals, dropdowns, popovers, menus |
| `background-clr-inverted` | `{neutral800}` | tooltips |
| `backdrop-clr` | `hsla(0, 0%, 100%, 0.75)` | modal overlay (was hardcoded) |
| `text-clr` | `{neutral800}` | |
| `text-clr-secondary` | `{neutral600}` | was `text-clr-alt` |
| `text-clr-disabled` | `{neutral400}` | disabled text, placeholder-ish icons |
| `text-clr-inverted` | `{neutral50}` | text on `background-clr-inverted` only |
| `text-clr-on-accent` | `{text-clr-inverted}` | text/icons on accent and solid status fills. Defaults to `text-clr-inverted` so existing overrides of that token still reach buttons etc.; dark mode can set it independently later |
| `icon-clr-secondary` | `{neutral600}` | muted icons (input adornments, dropdown chevrons, menu icons). Not `icon-clr`: `MaterialIcon` reads `var(--icon-clr, inherit)` as an optional local hook |
| `border-clr` | `{neutral300}` | was `border-clr-primary` |
| `border-clr-strong` | `{neutral600}` | checkbox / radio borders |
| `border-clr-focus` | `{outline-clr}` (neutral600) | focused input border, all input variants (grey, matching today's default) |
| `outline-clr` | `{neutral600}` | was `outline-clr-primary` |
| `accent-clr` | `{primary700}` | |
| `accent-clr-hover` | `{primary800}` | was `accent-clr-alt` |
| `accent-clr-subtle` | `{primary100}` | |
| `accent-clr-subtle-hover` | `{primary200}` | |
| `{s}-clr` (error/warning/success) | `{s600}` | solid fill / strong text |
| `{s}-clr-hover` (error/warning/success) | `{s700}` | was `{s}-clr-alt` |
| `info-clr-fill` | `{primary600}` | solid info fill. Named differently because `info-clr` keeps its existing (tint) meaning until a future major |
| `info-clr-fill-hover` | `{primary700}` | |
| `{s}-clr-subtle` | `{s100}` (info: `{primary100}`) | chip / banner background |
| `{s}-clr-subtle-hover` | `{s200}` (info: `{primary200}`) | |
| `{s}-clr-subtle-active` | `{s300}` (info: `{primary300}`) | banner button pressed |
| `{s}-clr-subtle-border` | `{s300}` (info: `{primary300}`) | replaces Chip hardcoded hex borders |
| `{s}-clr-subtle-text` | `{s800}` (info: `{primary800}`) | text on subtle background |
| `shadow-sm` | `0 1px 3px hsla(0, 0%, 0%, 0.5)` | dropdown / menu / listbox / button hover |
| `shadow-md` | `0 2px 4px 0 hsla(0, 0%, 0%, 0.1)` | popover |
| `shadow-lg` | `0 10px 40px hsla(0, 0%, 0%, 0.25)` | modal |

The builder may add a token when a role recurs that none of these covers (e.g. a
`neutral500` "muted indicator" used by loader, animation and scroll buttons), following
the `{role}-clr-{modifier}` pattern. Every addition is noted in the PR description.

**Deprecated aliases** (kept until the next major, in a clearly marked block in
`semantic.ts`; each old name keeps its current value and the *new* name references it,
e.g. `"text-clr-secondary": "{text-clr-alt}"`, so consumer overrides of either name
reach components): `background-clr-alt`, `text-clr-alt`,
`border-clr-primary`, `outline-clr-primary`, `accent-clr-alt`, `error-clr-alt`,
`warning-clr-alt`, `success-clr-alt`, `info-clr` (→ `{info-clr-subtle}`),
`info-clr-alt` (→ `{info-clr-subtle-hover}`). Every alias resolves to exactly the value
it has today. Library code must not use deprecated names. A future major can make
`info-clr` solid to match the other status tokens.

### Migration of components

- Every palette reference and hardcoded color in `component.ts` and
  `src/components/**` (non-story, non-spec) is replaced with a semantic token, choosing
  the token that matches the **role**, not just the shade.
- Uses of `text-clr-inverted` on accent or solid-status backgrounds (buttons, selected
  listbox/menu items, selected chips, error banner, calendar/time selected, checkbox
  icon) become `text-clr-on-accent`. `text-clr-inverted` remains only for content on
  `background-clr-inverted` (tooltip).
- Migrate group by group (Buttons, Chips, Banners, Inputs & Fields, Dropdowns, Content,
  Overlays, Feedback/Animations, Layout, Calendar/Time) so each group can be reviewed
  in Storybook on its own.

### Visual change log

Where the role-correct semantic token resolves to a different shade than today, accept
the change and record it in a table in the PR description: component, state, old
shade → new token (new shade). Known in advance:

- Button `danger` / `success` variants: bg `error700`/`success700` → `{s}-clr` (600),
  hover `800` → `{s}-clr-hover` (700). Alternatively the builder may judge these are
  better served by `{s}-clr-hover` as the base; either way, log it.
- Banner `error` variant: bg `error700` → `error-clr` (600); button hover/active
  `error800`/`error900` → nearest status tokens.
- Chip status borders: hardcoded hex → `{s}-clr-subtle-border` (palette 300).
- Time selected bg `primary600` → `accent-clr` (primary700); time/calendar selected
  text `neutral100` → `text-clr-on-accent` (neutral50).
- Menu/ListBox disabled text `neutral400` stays (`text-clr-disabled`); Select/Calendar
  `neutral600` icon/text → `icon-clr-secondary` / `text-clr-secondary` (same shade).
- Tabs inactive text `neutral300` → closest token (`text-clr-disabled`, neutral400).
- Floating-label input focus border `primary700` (teal) → `border-clr-focus` (grey,
  neutral600). Intentional: all inputs now share the same grey focus border.
- Invalid toggle/checkbox border (`mixins.ts`) `error700` → `error-clr` (600) or
  `error-clr-hover` (700); log whichever is chosen.

### Verification

1. **Move step:** `defaultTheme.resolvedVariables` is identical before and after the
   file split (compare via a temporary test or script; keys and values match exactly).
2. **Semantic step:** adding semantic tokens adds keys only; existing keys unchanged
   except alias redirections, which must resolve to the same values (check by
   resolving each alias chain to its palette value before and after).
3. **Migration step:** layering test passes; existing test suite passes (update DOM
   snapshots only where class/var names changed); every visual change is in the log.
4. Build passes: `npm run build --workspace @atomicjolt/atomic-elements`.

### Release

Minor changeset for `@atomicjolt/atomic-elements` (→ 3.12.0). No other package needs
a release: `@atomicjolt/forms` peers on `^3.11.0`, and nothing in `forms` or `docs/`
references `info-clr`, `text-clr-inverted`, or palette shades. The changeset describes:
- New semantic tokens; components now read semantic tokens instead of palette shades.
  Palette overrides still flow through (semantic tokens reference the same shades),
  but overriding semantic tokens is now the recommended way to customize.
- Renamed tokens and their deprecated aliases (including `info-clr` → `info-clr-subtle`).
- The visual change log (small shade adjustments, grey focus border on floating inputs).
- Docs: update any Docusaurus/Storybook pages listing theme variables.

## Future work (decided, not in scope)

Recorded so this work doesn't contradict it:
- `createTheme({ variables, defaultColorScheme?, colorSchemes: { light: { mode, variables }, dark: {...}, ... } })`;
  `light` is a named scheme and the default. Schemes contain overrides — expected to be
  almost entirely semantic tokens.
- CSS: shared block on the selector; default scheme applies with no attribute;
  `[data-color-scheme="<name>"]` per scheme with `color-scheme: <mode>`.
- `ElementsProvider` `colorScheme` prop (name | `"system"`), `onColorSchemeChange`,
  `useColorScheme()` hook. No persistence in the library; apps store the choice.
- Palette will likely need darker shades (e.g. `neutral950`) for dark mode.

## Left to the builder

- Exact location of the aggregate `variables` object and `variableAlias`.
- Exact token chosen per component usage, within the role rules above, with deviations logged.
- Whether to add a role token (e.g. muted indicator) vs. reuse an existing one.
- Commit granularity within the three steps.
