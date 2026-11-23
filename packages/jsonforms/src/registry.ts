import type {
  JsonFormsCellRendererRegistryEntry,
  JsonFormsRendererRegistryEntry,
} from "@jsonforms/core";
import {
  AtomicTextCell,
  atomicTextCellTester,
  AtomicTextControl,
  atomicTextControlTester,
} from "./controls";
import {
  AtomicGroupLayout,
  atomicGroupLayoutTester,
  AtomicHorizontalLayout,
  atomicHorizontalLayoutTester,
  AtomicLabelRenderer,
  atomicLabelRendererTester,
  AtomicVerticalLayout,
  atomicVerticalLayoutTester,
} from "./layouts";
import {
  AtomicFallbackRenderer,
  atomicFallbackTester,
} from "./dev/AtomicFallbackRenderer";

export const atomicRenderers: JsonFormsRendererRegistryEntry[] = [
  // controls
  { tester: atomicTextControlTester, renderer: AtomicTextControl },
  // layouts
  { tester: atomicVerticalLayoutTester, renderer: AtomicVerticalLayout },
  { tester: atomicHorizontalLayoutTester, renderer: AtomicHorizontalLayout },
  { tester: atomicGroupLayoutTester, renderer: AtomicGroupLayout },
  { tester: atomicLabelRendererTester, renderer: AtomicLabelRenderer },
];

export const atomicCells: JsonFormsCellRendererRegistryEntry[] = [
  { tester: atomicTextCellTester, cell: AtomicTextCell },
];

/** Development helpers. Opt in: `[...atomicRenderers, ...devAtomicRenderers]`. */
export const devAtomicRenderers: JsonFormsRendererRegistryEntry[] = [
  { tester: atomicFallbackTester, renderer: AtomicFallbackRenderer },
];
