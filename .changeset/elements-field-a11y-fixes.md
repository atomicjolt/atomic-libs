---
"@atomicjolt/atomic-elements": patch
---

Field accessibility and layout fixes:

- `CheckBox` and `Radio` render their text in a `<label>` tied to the input, so the input is named by its label (it previously had no accessible name). `message` and `error` moved outside the label and describe the input through `aria-describedby`.
- `TimeInput` shows its `error` text when `isInvalid` (it never rendered before).
- `DatePicker`: the segments and calendar button form a labelled `role="group"`, the calendar popup is a labelled `role="dialog"`, and a caller-supplied `id` is no longer duplicated. Keyboard navigation between segments now uses the group, as react-aria intends.
- `DateField` no longer puts its `id` on both the wrapper and the segments.
- `FileInput` shrinks to fit narrow containers, truncating the filename, instead of overflowing.
