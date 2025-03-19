# @atomicjolt/atomic-elements

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
