---
"@atomicjolt/forms": minor
---

Add form wrappers for the rest of the atomic-elements inputs and fields: `Form.SearchInput`, `Form.SearchField`, `Form.DateInput`, `Form.DateField`, `Form.DatePicker`, `Form.TimeInput`, `Form.FileInput`, `Form.SelectField`, `Form.MultiSelectField`, `Form.ComboBoxField`, `Form.ChipGroup` and `Form.ChipGroupField`. Date and time fields store their `@internationalized/date` values as-is, `FileInput` stores the selected `File`, and the multi-selection fields store an array of keys. Also exports the `DateValue` and `TimeValue` types and adds a vitest test suite.

The `@atomicjolt/atomic-elements` peer dependency is now `^3.13.0`, which these wrappers need (`DateField` and the `FileInput` fixes first shipped there).
