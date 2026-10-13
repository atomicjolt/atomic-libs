---
"@atomicjolt/atomic-elements": minor
---

Add `Loading` component and `isLoading` support across form components

- New `<Loading>` provider sets a loading state for every component inside it.
  A component's own `isLoading` / `loadingLabel` props override it.
- `isLoading` is now supported on `Input`, `TextArea`, `TextField`, `NumberField`,
  `SearchField`, `ComboInput`, `ComboBox`, `CustomSelect`, `MultiSelect`,
  `Checkbox`, `RadioGroup`, `ToggleSwitch` and `FileInput`.
- Fix `Label` not passing `htmlFor` through to the rendered element.
