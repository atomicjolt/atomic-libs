# @atomicjolt/atomic-elements

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
