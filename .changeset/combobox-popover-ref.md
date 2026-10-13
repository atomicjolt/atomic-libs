---
"@atomicjolt/atomic-elements": patch
---

Keep an open ComboBox's listbox visible to assistive tech

`ComboBoxField` gave `useComboBox` a `popoverRef` but never attached it to the
`Popover`. While the menu is open, `useComboBox` calls `ariaHideOutside` on
everything except the input and `popoverRef.current`; with the ref left null,
that hid the popover itself, so screen readers (and `getByRole` queries) saw no
options. Passing the ref through `PopoverContext` attaches it.
