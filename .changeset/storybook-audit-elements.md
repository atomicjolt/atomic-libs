---
"@atomicjolt/atomic-elements": minor
---

Loading states, accessibility fixes and prop clean-up from the Storybook docs audit.

**New**

- `DateField` is exported from the package.
- `Select`, `DateInput`, `DatePicker`, `TimeInput` and `ChipGroup` show a loading state with `isLoading` / `loadingLabel` and inside a `<Loading>` provider. They accepted these props before but ignored them.
- `Table.Body` and `LoadingStatus` take `loadingLabel` (default: the translated "Loading"). `Table.Body` marks itself busy and announces the label once rather than once per skeleton cell. `LoadingStatus`'s default loader is now announced outside a `<Loading>` provider too.
- `SearchField` has a `clear` slot: a button in it clears the field, calls `onClear` and gets a localized "Clear search" label.
- `FileTrigger` takes an `id` for its input.
- `RadioGroupProps` replaces the misspelled `RadioGroupsProps`, which remains as a deprecated alias.

**Fixes**

- `SearchField`, `NumberField` and `ComboBoxField` show their loading state with a plain `<Input>` child.
- `Select` passes `isDisabled`, `isRequired` and `isInvalid` to the native `<select>`, and shows its `error` message.
- `FileInput` labels its button, shows its `error` message, and forwards its `ref` and `id` to the file input. `NumberInput` forwards its `ref`.
- `FileTrigger`'s `accept="directories"` selects directories.
- `Loader`, `ThreeDotLoader`, `BouncingDots` and `Pagination` forward `aria-label` / `aria-labelledby`. A labelled loader is announced as a status.
- `Button`'s loading spinner no longer has a hard-coded English `aria-label`; the button is already named by `loadingLabel` while loading.
- `Table.Skeleton` takes aria label props and defaults to the translated "Loading".
- `FormatTable` accepts aria label props (including `aria-details`) and renders `fallback` when `value` is `null` or `undefined`.
- `Loading` puts its `id` on its wrapper element.
- `ButtonGroup` applies `as`, `style` and its aria labels to the group element.
- `IconMenu` applies `buttonVariant` to its trigger.
- `CheckBox` no longer shows the text "error" when invalid without an `error` message.
- `CustomSelect` and `MultiSelect` no longer log warnings while loading.
- `ProgressCircle` no longer writes non-DOM props onto its `<svg>`.
- `Label`'s `$paddingBottom` is applied; `Grid`'s `$flow="row-dense"` / `"column-dense"` and the typography `$wrap="pretty"` / `"balanced"` values work. `Em` gets its own `aje-em` class name.

**Removed props that never did anything**

These are now type errors. They had no effect at runtime, so no behaviour changes.

- `size` on `Divider`, `Table`, `ToggleSwitch` and `Loading`, and `size="auto"` on `Calendar`.
- `children` on `FormatTable` (the render function was never called).
- `label` on `ProgressCircle`. It was never rendered, and passing it left the circle without an accessible name. Use `aria-label`, or `aria-labelledby` pointing at your own visible text.
