---
"@atomicjolt/atomic-elements": minor
---

Add light and dark color schemes.

- `createTheme` accepts `colorSchemes`: named schemes (each with a `mode` and the tokens it overrides). The `light` scheme is the base; others layer on top. Themes created with only `variables` work as before.
- `defaultTheme` ships `light` (unchanged) and a new `dark` scheme. Every text/background pair the components use meets WCAG AA in both.
- `ElementsProvider` takes `colorScheme` (a scheme name or `"system"` to follow the OS), `defaultColorScheme` and `onColorSchemeChange`, and sets `data-color-scheme` on `<html>`. Apps stay `light` unless they opt in. Use one provider per page.
- New `useColorScheme()` hook to read and change the scheme. The library doesn't store the choice; apps do.
- With `applyDefaultStyles`, the page background and text color follow non-light schemes.
- New semantic tokens: `accent-clr-fill`, `accent-clr-fill-hover`, `{error,warning,success}-clr-fill`, `-fill-hover` (solid backgrounds behind white text), `text-clr-tertiary`, `background-clr-disabled`. Buttons, selected items and checked controls now use the fill tokens (same shades in light).
- The invalid floating-label text uses `error-clr` (`error600`, was `error800`).
