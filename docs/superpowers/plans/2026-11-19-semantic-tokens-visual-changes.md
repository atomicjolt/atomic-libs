# Semantic Tokens — Visual Change Log

Every place where migrating to semantic tokens changed a rendered shade. Review each in Storybook.

## Added tokens

- `background-clr-strong` (`neutral400`): strongest neutral fill (unchecked toggle track, hovered scroll thumb).
- `indicator-clr` (`neutral500`): loaders, animations, scroll-area buttons.

## Changes

| Component | State | Before | After (token → shade) |
|---|---|---|---|
| `time-*` tokens (unused by any component — no visible effect) | Selected | bg `primary600` | `accent-clr` → `primary700` |
| `time-*` tokens (unused by any component — no visible effect) | Selected | text `neutral100` | `text-clr-on-accent` → `neutral50` |
| Calendar | Selected day | text `neutral100` | `text-clr-on-accent` → `neutral50` |
