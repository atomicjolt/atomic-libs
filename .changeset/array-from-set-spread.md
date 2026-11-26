---
"@atomicjolt/atomic-elements": patch
"@atomicjolt/forms": patch
---

Avoid spreading Sets (`[...set]`), which bundlers that transpile spread in "loose" mode (such as Docusaurus's Babel setup) turn into an array containing the Set itself. In atomic-elements this crashed `createTheme` with `Color scheme "[object Set]" needs a mode`; in forms it affected multi-select values.
