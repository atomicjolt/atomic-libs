---
"@atomicjolt/atomic-elements": patch
---

Fix popovers requiring two outside clicks to close

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
