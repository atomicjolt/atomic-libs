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

## Known light contrast failures

None — every pair in `CONTRAST_PAIRS` already meets WCAG AA in the light scheme.

## Dark scheme

Values are in `packages/atomic-elements/src/styles/theme/semantic.ts` (`darkColors`, `darkEffects`). Key choices:

- Page `neutral900`, raised surfaces (menus, modals, popovers) and subtle surfaces `neutral800`, hover `neutral700`.
- Text `neutral100`, secondary `neutral300`, disabled/tertiary `neutral500`; muted icons and strong/focus borders `neutral400`; default borders `neutral700`.
- Accent text/links `primary400` (hover `primary300`); fills behind white text stay `primary700`/`primary800`, same as light.
- Status text `{s}400`; status fills stay `{s}700`/`{s}800`; subtle status surfaces `{s}900` with `{s}200` text and `{s}700` borders.
- Shadows: heavier opacity (0.8 / 0.5 / 0.7).

## Contrast (WCAG AA)

| Pair | Min | Light | Dark |
|---|---|---|---|
| `text-clr` on `background-clr` | 4.5 | 14.62 | 16.16 |
| `text-clr` on `background-clr-raised` | 4.5 | 14.62 | 13.32 |
| `text-clr` on `background-clr-subtle` | 4.5 | 13.32 | 13.32 |
| `text-clr-secondary` on `background-clr` | 4.5 | 7.03 | 12.06 |
| `text-clr-secondary` on `background-clr-subtle` | 4.5 | 6.41 | 9.94 |
| `text-clr-on-accent` on `accent-clr-fill` | 4.5 | 5.11 | 5.11 |
| `text-clr-on-accent` on `accent-clr-fill-hover` | 4.5 | 6.94 | 6.94 |
| `text-clr-on-accent` on `error-clr-fill` | 4.5 | 6.41 | 6.41 |
| `text-clr-on-accent` on `error-clr-fill-hover` | 4.5 | 8.40 | 8.40 |
| `text-clr-on-accent` on `success-clr-fill` | 4.5 | 5.37 | 5.37 |
| `text-clr-on-accent` on `success-clr-fill-hover` | 4.5 | 7.31 | 7.31 |
| `accent-clr` on `background-clr` | 4.5 | 5.11 | 9.79 |
| `accent-clr-hover` on `background-clr` | 4.5 | 6.94 | 13.00 |
| `error-clr` on `background-clr` | 4.5 | 4.80 | 6.45 |
| `error-clr-subtle-text` on `error-clr-subtle` | 4.5 | 6.85 | 6.73 |
| `text-clr` on `error-clr-subtle` | 4.5 | 11.92 | 9.00 |
| `warning-clr-subtle-text` on `warning-clr-subtle` | 4.5 | 6.37 | 7.67 |
| `text-clr` on `warning-clr-subtle` | 4.5 | 13.77 | 7.82 |
| `success-clr-subtle-text` on `success-clr-subtle` | 4.5 | 6.53 | 7.52 |
| `text-clr` on `success-clr-subtle` | 4.5 | 13.06 | 8.38 |
| `info-clr-subtle-text` on `info-clr-subtle` | 4.5 | 6.46 | 7.34 |
| `text-clr` on `info-clr-subtle` | 4.5 | 13.61 | 7.75 |
| `text-clr-inverted` on `background-clr-inverted` | 4.5 | 14.62 | 16.16 |
| `icon-clr-secondary` on `background-clr` | 3 | 7.03 | 7.22 |
| `border-clr-strong` on `background-clr` | 3 | 7.03 | 7.22 |
| `border-clr-focus` on `background-clr` | 3 | 7.03 | 7.22 |
