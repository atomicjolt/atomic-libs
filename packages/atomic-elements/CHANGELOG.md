# @atomicjolt/atomic-elements

## 3.13.0

### Minor Changes

- 3e25d70: Loading states, accessibility fixes and prop clean-up from the Storybook docs audit.

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

## 3.12.0

### Minor Changes

- 54bf65a: Add light and dark color schemes.

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

- 2d96e22: Add semantic color tokens and move all components onto them.

  - New semantic tokens describe what a color is for (`background-clr-subtle`, `text-clr-secondary`, `text-clr-on-accent`, `border-clr-focus`, `error-clr-subtle`, `shadow-md`, …). Components and component tokens now read only semantic tokens, never palette shades. This is groundwork for color schemes such as dark mode.
  - Existing themes keep working: palette overrides still flow through semantic tokens, and overriding a renamed token's old name still reaches components.
  - If your theme overrides semantic tokens, those overrides now reach more components, because components that used fixed shades follow the semantic tokens instead. For example, toggles, banner icons and focused menu items follow `accent-clr`; buttons, tables and tabs follow `background-clr`; banners, chips and skeletons follow `background-clr-alt` / `background-clr-subtle`; tables, dividers, chips and card dividers follow `border-clr-primary` / `border-clr`.
  - Deprecated (removed in the next major): `background-clr-alt` → `background-clr-subtle`, `text-clr-alt` → `text-clr-secondary`, `border-clr-primary` → `border-clr`, `outline-clr-primary` → `outline-clr`, `accent-clr-alt` → `accent-clr-hover`, `{error,warning,success}-clr-alt` → `{error,warning,success}-clr-hover`, `info-clr` → `info-clr-subtle` (use `info-clr-fill` for a solid fill), `info-clr-alt` → `info-clr-subtle-hover`.
  - Small visual adjustments from aligning components to shared tokens: floating-label inputs now use the same grey focus border as other inputs; status chip borders use the palette's 300 shades instead of hardcoded hex values; warning chip text is slightly darker; disabled icons and disabled underline tabs use `text-clr-disabled`; the inverted button hover shadow and the error banner's pressed close button use shared values.

## 3.11.0

### Minor Changes

- 6401d5b: Add `Loading` component and `isLoading` support across form components

  - New `<Loading>` provider sets a loading state for every component inside it.
    A component's own `isLoading` / `loadingLabel` props override it.
  - `isLoading` is now supported on `Input`, `TextArea`, `TextField`, `NumberField`,
    `SearchField`, `ComboInput`, `ComboBox`, `CustomSelect`, `MultiSelect`,
    `Checkbox`, `RadioGroup`, `ToggleSwitch` and `FileInput`.
  - Fix `Label` not passing `htmlFor` through to the rendered element.

### Patch Changes

- cfde616: Keep an open ComboBox's listbox visible to assistive tech

  `ComboBoxField` gave `useComboBox` a `popoverRef` but never attached it to the
  `Popover`. While the menu is open, `useComboBox` calls `ariaHideOutside` on
  everything except the input and `popoverRef.current`; with the ref left null,
  that hid the popover itself, so screen readers (and `getByRole` queries) saw no
  options. Passing the ref through `PopoverContext` attaches it.

- 87c8d93: Fix Table grouped header alignment and duplicate React key warnings

## 3.10.0

### Minor Changes

- 69e186c: Support nested columns in Table component

### Patch Changes

- 09a8b53: Ensure CustomSelect passes className and other props into dom
- 5604039: Fix popovers requiring two outside clicks to close

  We're memoizing a ref in the same way the referenced react-aria file does. This
  is claudes detailed description:

  `useContextProps` passed a fresh `mergeRefs(...)` closure to `useObjectRef` on
  every render. `mergeRefs` only returns its input unchanged for a single ref, so
  with two arguments it always allocates a new function, and `useObjectRef`
  memoizes on that function — every render produced a new ref object.

  `useOverlay` records the top-most overlay ref on `pointerdown` and requires it
  to still be identical on the following `click` before dismissing. Any re-render
  in that window swapped the ref and the dismissal was skipped, so `CustomSelect`,
  `MultiSelect` and other popover-backed components needed two outside clicks to
  close. Components that happened not to re-render between the two events were
  unaffected, which made it look select-specific.

  Memoizing the merged ref (as react-aria-components does upstream) keeps the
  object stable. All 36 components using `useContextProps` were affected.

- caf792f: Fix DateInput and DatePicker sizing issues
- 17dbec3: Fix floating variants for all components that have them

## 3.9.2

### Patch Changes

- fix style problems with floating TextInput

## 3.9.1

### Patch Changes

- f08873f: Fix floating variants for all components that have them

## 3.9.0

### Minor Changes

- f9adc5c: Added a Banner.Icon component that correctly positions Material Icons

  Fix duplicate class names applied to ActionBanner

## 3.8.0

### Minor Changes

- Pin `@react-aria/collections` to `3.0.0-beta.1`, the only version `Table`
  actually works with.

  Released as a minor rather than a patch: narrowing the declared range can force
  a consumer already resolving 3.1.x back down to `3.0.0-beta.1`, and can conflict
  with another dependency that pulls `@react-aria/collections` in through
  `react-aria-components`. No public API changed, but the resolved tree does, so
  this should not arrive via an auto-merged patch bump.

  The range was `^3.0.0-alpha.6`. A caret on a prerelease permits everything below
  4.0.0, so consumers resolved 3.1.x, where the collections internals were
  restructured into a re-export of `react-aria/dist/private/collections`. Under
  those versions `Table`'s head/body nodes reach the collection renderer without
  the `render` it calls, and any `Table` crashes on mount with
  `TypeError: node.render is not a function` — including this package's own
  `Table.spec.tsx`, which passes here only because the lockfile holds
  3.0.0-beta.1.

  Verified against a consumer app across every published version:

  | `@react-aria/collections`  | `Table`                         |
  | -------------------------- | ------------------------------- |
  | 3.0.0-beta.1               | works                           |
  | 3.0.0, 3.0.3, 3.1.0, 3.1.1 | `node.render is not a function` |

  An exact pin is a stopgap: it freezes the package on a prerelease. The real fix
  is migrating `Table` to the post-3.0 collections API, which should be tracked
  separately. Until then the declared range should at least match what the code
  supports, so consumers don't silently resolve a broken tree.

### Patch Changes

- Mark the `ComboBox` listbox popover non-modal, so its input stays focusable on
  current `react-aria`.

  `ComboBoxField` provided `PopoverContext` without `isNonModal`, so `usePopover`
  took its modal branch. That branch used to hide the rest of the page with
  `aria-hidden`, which is inert-in-name-only — the trigger's own text input stayed
  focusable, so the omission was invisible. Current `@react-aria/overlays` changed
  it to `ariaHideOutside([popover], { shouldUseInert: true })`, which applies the
  real `inert` attribute to everything outside the popover. That includes the
  input that opened the listbox, so the ComboBox becomes impossible to focus or
  type into as soon as the menu can open. React Aria Components sets `isNonModal`
  on its own ComboBox popover for this reason.

  Verified in headless Chromium against a consumer app with no version overrides
  (`@react-aria/combobox` 3.16.1, `react-stately` 3.49.0), clicking the input and
  typing:

  | `menuTrigger`               | before                   | after                  |
  | --------------------------- | ------------------------ | ---------------------- |
  | `manual` (menu never opens) | focuses, accepts input   | focuses, accepts input |
  | `input` (the default)       | dead — no focus, no text | focuses, accepts input |
  | `focus`                     | dead — no focus, no text | focuses, accepts input |

  Unaffected by the selection props used: `selectedKey`/`onSelectionChange`,
  `value`/`onChange`, and passing neither all behaved identically.

  This is what forced consumers to pin the whole `@react-aria/*` tree via
  `overrides` to keep `ComboBox` working. `Menu`, `DatePicker` and `Modal` were
  already fine on current versions; `Select`/`MultiSelect` are intentionally left
  modal, since their trigger is a button and focus moves into the listbox.

- Declare eight react-aria/react-stately packages the library imports but never
  listed as dependencies. They resolved only because this repo's lockfile happened
  to hoist them via `react-stately@3.36.1`; consumers whose tree resolves
  differently get unresolvable imports.

  Imported at runtime by `dist/esm`:

  - `@react-aria/selection`
  - `@react-stately/form`
  - `@react-stately/list`
  - `@react-stately/overlays`

  Referenced by the emitted `dist/types` (so consumers need them to typecheck —
  `@react-types/shared` appears in 25 declaration files):

  - `@react-types/button`
  - `@react-types/combobox`
  - `@react-types/grid`
  - `@react-types/shared`

  `react-stately` dropped its `@react-stately/form` dependency after 3.36.1, so on
  a current resolve `MultiSelectField/useMultiSelectState` fails outright with
  `Failed to resolve import "@react-stately/form"`. In a downstream app this also
  manifested as `CustomSelect` rendering its trigger but never opening; declaring
  these fixes it with no version pinning required.

## 3.7.3

### Patch Changes

- Fixed some type issues in Atomic Elements

## 3.7.2

### Patch Changes

- Upgrade styled-components to latest version

## 3.7.1

### Patch Changes

- Upgrade to TS 6

## 3.7.0

### Minor Changes

- bb7ba89: Add DateField as a generalization of DateInput. Refactor DateInput to use DateField internally
- d2056fa: Wrap all styles in a @layer elements directive for easier style overrides

## 3.6.0

### Minor Changes

- Add ErrorBoundary helper component

## 3.5.1

### Patch Changes

- Fix icon type for ButtonGroup and improve documentation in Storybook of IconMenu and IconButton

## 3.5.0

### Minor Changes

- 4b0a981: Implement <SearchField /> as a composition API. SearchInput reimplemented using this composition API. Refactored Button components to be better behaved with contexts
- f982b55: Implemented Custom ScrollArea component
- e5120b1: add ensureVisible prop to Modal component
- 59527a6: Add some additional customization props to tables for aligning column content & striped tables
- 169a812: Implement Navbar building block components

### Patch Changes

- cc4f689: Implement initial support for localizing some internal labels / screen reader utils
- a877896: Standalone Chips and ChipGroup Chips now proplerly support being turned into links
  by setting the `href` prop.

## 3.4.0

### Minor Changes

- 7b7b134: DismissableBanner only renders it's dismiss button when "onDismiss" is passed as an attribute

### Patch Changes

- adfd9dd: Removed internal DropdownButton component in favor of directly using Button
- 57f6553: Misc improvements to the Field API. All previous usage should still work

## 3.3.3

### Patch Changes

- 73a1289: Add aria-label to button's spinner when they are in a loading state

## 3.3.2

### Patch Changes

- 65a29c5: fix: Link component not passing $style props
- 78ed035: fix: generalized return type of LoadingStatus

## 3.3.1

### Patch Changes

- Update packages to support React 19

## 3.3.0

### Minor Changes

- eafb4a5: Update Banner components to accept refs & render props
- f3c717b: Expanded the flexibility of the Card components with style props
- 6137afa: Implemented ProgressCircle component
- 1e1d5f7: Added dimensions props and a new $clamp prop to typography components
- 124e09a: added a $bg prop to the view component to set background colors

### Patch Changes

- 4a7a921: Fix TextAreaInput when controlled
- a8d00be: fix: stop passing non-dom props to anchor tag in Link prop
- b7c56cd: Fixed isReadonlyState on DatePicker

## 3.2.0

### Minor Changes

- Implement List component
- TextArea now passes rows and cols prop to the underlying element
- Typography component now have a $transform prop to control text-transform
- MaterialIcon type includes `push_pin`
- IconMenu passes appropriate props to the IconButton

## 3.1.0

### Minor Changes

- Implemented Typographcy and Layout components

## 3.0.0

### Major Changes

- e21c8b9: Implemented a Composition API for the Calendar component
- 931a039: Implemented ChipGroupField using the new Collections API & re-implemented ChipGroup & Chip on top of that base
- c076cd9: Migrated internal collections APIs, made collection components (Table, Select, Tabs, etc...) more flexible
- 9b182df: Completed implementation of MaterialSymbol component
- 9cb9847: Implmented ElementsProvider as the new way to configure an Atomic Elements powered Application
- 33c46e0: Migrated Table to new collections API

### Minor Changes

- dfcd64c: Implement Disclosure & DisclosureGroup components
