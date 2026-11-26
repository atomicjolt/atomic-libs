---
"@atomicjolt/forms": patch
---

- Inputs now get their react-hook-form field `name`, so native form submission and autofill see them.
- Inside a composed field (`Form.TextField`, `Form.NumberField`, `Form.SearchField`, `Form.DateField`, `Form.SelectField`, `Form.MultiSelectField`, `Form.ComboBoxField`, `Form.ChipGroupField`), `<Form.ErrorMessage />` with no children shows the field's validation message. Explicit children still win.
