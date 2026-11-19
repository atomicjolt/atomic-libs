---
"@atomicjolt/atomic-elements": minor
---

Add semantic color tokens and move all components onto them.

- New semantic tokens describe what a color is for (`background-clr-subtle`, `text-clr-secondary`, `text-clr-on-accent`, `border-clr-focus`, `error-clr-subtle`, `shadow-md`, …). Components and component tokens now read only semantic tokens, never palette shades. This is groundwork for color schemes such as dark mode.
- Existing themes keep working: palette overrides still flow through semantic tokens, and overriding a renamed token's old name still reaches components.
- If your theme overrides semantic tokens, those overrides now reach more components, because components that used fixed shades follow the semantic tokens instead. For example, toggles, banner icons and focused menu items follow `accent-clr`; buttons, tables and tabs follow `background-clr`; banners, chips and skeletons follow `background-clr-alt` / `background-clr-subtle`; tables, dividers, chips and card dividers follow `border-clr-primary` / `border-clr`.
- Deprecated (removed in the next major): `background-clr-alt` → `background-clr-subtle`, `text-clr-alt` → `text-clr-secondary`, `border-clr-primary` → `border-clr`, `outline-clr-primary` → `outline-clr`, `accent-clr-alt` → `accent-clr-hover`, `{error,warning,success}-clr-alt` → `{error,warning,success}-clr-hover`, `info-clr` → `info-clr-subtle` (use `info-clr-fill` for a solid fill), `info-clr-alt` → `info-clr-subtle-hover`.
- Small visual adjustments from aligning components to shared tokens: floating-label inputs now use the same grey focus border as other inputs; status chip borders use the palette's 300 shades instead of hardcoded hex values; warning chip text is slightly darker; disabled icons and disabled underline tabs use `text-clr-disabled`; the inverted button hover shadow and the error banner's pressed close button use shared values.
