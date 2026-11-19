# Color Schemes — Visual Change Log

Light-scheme changes from this work, plus the dark scheme values for review in Storybook.

## Added tokens

- `accent-clr-fill`, `accent-clr-fill-hover`, `{error,warning,success}-clr-fill`, `-fill-hover`: solid fills behind `text-clr-on-accent` (buttons, selected items, checked controls, error banner). Light values equal today's shades.
- `text-clr-tertiary` (`neutral400`): muted labels such as menu section titles.
- `background-clr-disabled` (`neutral300`): disabled tab background.

## Light scheme changes

| Component | State | Before | After (token → shade) |
|---|---|---|---|
| Floating-label inputs | Invalid label | `error800` | `error-clr` → `error600` |
