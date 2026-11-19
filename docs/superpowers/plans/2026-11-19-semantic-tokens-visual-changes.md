# Semantic Tokens — Visual Change Log

Every place where migrating to semantic tokens changed a rendered shade. Review each in Storybook.

## Added tokens

- `background-clr-strong` (`neutral400`): strongest neutral fill (unchecked toggle track, hovered scroll thumb).
- `{error,warning,success}-clr-active` (`{s}800`), `info-clr-solid-active` (`primary800`): pressed/hover state of solid status fills (keeps danger/success buttons on 700/800 — 600 fails WCAG AA for white text on success).
- `indicator-clr` (`neutral500`): loaders, animations, scroll-area buttons.

## Changes

| Component | State | Before | After (token → shade) |
|---|---|---|---|
| `time-*` tokens (unused by any component — no visible effect) | Selected | bg `primary600` | `accent-clr` → `primary700` |
| `time-*` tokens (unused by any component — no visible effect) | Selected | text `neutral100` | `text-clr-on-accent` → `neutral50` |
| Calendar | Selected day | text `neutral100` | `text-clr-on-accent` → `neutral50` |
| Button `inverted` | Hover | shadow `0 1px 3px hsla(221, 39%, 11%, 0.5)` | `shadow-sm` → `0 1px 3px hsla(0, 0%, 0%, 0.5)` (neutral instead of blue-black) |
| Chip `success` | Default | border `#aee1b6` | `success-clr-subtle-border` → `success300` |
| Chip `warning` | Default | border `#e3d488` | `warning-clr-subtle-border` → `warning300` |
| Chip `danger` | Default | border `#f1b6b6` | `error-clr-subtle-border` → `error300` |
| Chip `warning` | Default | text `warning700` | `warning-clr-subtle-text` → `warning800` (darker) |
| Banner `error` | Close button pressed | bg `error900` | `error-clr-active` → `error800` (same as hover) |
| Floating-label inputs | Focus | border `primary700` (teal) | `border-clr-focus` → `neutral600` (grey) — intentional, matches all other inputs |
| Tabs (`card` variant) | Disabled tab | text `neutral300` | `text-clr-disabled` → `neutral400` (slightly darker) |
| Icon | `is-disabled` | `rgba(0, 0, 0, 0.3)` | `text-clr-disabled` → `neutral400` (cool grey instead of translucent black) |
