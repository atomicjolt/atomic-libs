---
"@atomicjolt/atomic-elements": minor
---

Add light and dark color schemes.

- `createTheme` accepts `colorSchemes`: named schemes (each with a `mode` and the tokens it overrides). The `light` scheme is the base; others layer on top. Themes created with only `variables` work as before.
- `defaultTheme` ships `light` (unchanged) and a new `dark` scheme. Every text/background pair the components use meets WCAG AA in both.
- `ElementsProvider` takes `colorScheme` (a scheme name or `"system"` to follow the OS), `defaultColorScheme` and `onColorSchemeChange`, and sets `data-color-scheme` on `<html>`. Apps stay `light` unless they opt in. Use one provider per page.
- New `useColorScheme()` hook to read and change the scheme. The library doesn't store the choice; apps do.
- With `applyDefaultStyles`, the page background and text color follow non-light schemes.
- Fixes found in review: selected chip text stays white in dark; info banner icon uses a new `info-clr-icon` token; the invalid calendar date cell uses `error-clr-fill` with white text (was `error600` with dark text).
- New semantic tokens: `accent-clr-fill`, `accent-clr-fill-hover`, `{error,warning,success}-clr-fill`, `-fill-hover` (solid backgrounds behind white text), `background-clr-disabled`. Buttons, selected items and checked controls now use the fill tokens (same shades in light).
- The invalid floating-label text uses `error-clr` (`error600`, was `error800`).
- Menu section titles are restyled as small uppercase headings (bold, `text-clr-secondary`), matching ListBox section titles.
- **Breaking for custom themes:** semantic color tokens now live in the `light` and `dark` schemes, and scheme values win over a theme's shared `variables`. A theme that overrides a color token in `variables` (e.g. `accent-clr`) must move it under `colorSchemes.light` (and `colorSchemes.dark`). Palette shades, spacing, fonts and component tokens can stay in `variables`.
- `light` always exists and is the base scheme.
- Removed the `cssVarsSelector` and `cssVarPrefix` options from `createTheme`. The theme object is now `{ variables, colorSchemes, isToken, _Component }`: `variables` holds the shared tokens, and `getVar`, `getVarName`, `getVarValue` and `resolvedVariables` were removed (use `var(--name)` directly). Variables are always defined on `:root`. A prefix never worked: components read the unprefixed variable names, so setting one left components unstyled.
