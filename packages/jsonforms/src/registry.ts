import type {
  JsonFormsCellRendererRegistryEntry,
  JsonFormsRendererRegistryEntry,
} from "@jsonforms/core";
import * as C from "./controls";
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
  { tester: C.atomicTextControlTester, renderer: C.AtomicTextControl },
  { tester: C.atomicNumberControlTester, renderer: C.AtomicNumberControl },
  { tester: C.atomicCheckBoxControlTester, renderer: C.AtomicCheckBoxControl },
  { tester: C.atomicToggleControlTester, renderer: C.AtomicToggleControl },
  { tester: C.atomicEnumSelectControlTester, renderer: C.AtomicEnumSelectControl },
  { tester: C.atomicOneOfSelectControlTester, renderer: C.AtomicOneOfSelectControl },
  { tester: C.atomicEnumRadioControlTester, renderer: C.AtomicEnumRadioControl },
  { tester: C.atomicOneOfRadioControlTester, renderer: C.AtomicOneOfRadioControl },
  { tester: C.atomicEnumComboBoxControlTester, renderer: C.AtomicEnumComboBoxControl },
  { tester: C.atomicOneOfComboBoxControlTester, renderer: C.AtomicOneOfComboBoxControl },
  { tester: C.atomicMultiSelectControlTester, renderer: C.AtomicMultiSelectControl },
  { tester: C.atomicDateControlTester, renderer: C.AtomicDateControl },
  { tester: C.atomicTimeControlTester, renderer: C.AtomicTimeControl },
  { tester: C.atomicDateTimeControlTester, renderer: C.AtomicDateTimeControl },
  // layouts
  { tester: atomicVerticalLayoutTester, renderer: AtomicVerticalLayout },
  { tester: atomicHorizontalLayoutTester, renderer: AtomicHorizontalLayout },
  { tester: atomicGroupLayoutTester, renderer: AtomicGroupLayout },
  { tester: atomicLabelRendererTester, renderer: AtomicLabelRenderer },
];

export const atomicCells: JsonFormsCellRendererRegistryEntry[] = [
  { tester: C.atomicTextCellTester, cell: C.AtomicTextCell },
  { tester: C.atomicNumberCellTester, cell: C.AtomicNumberCell },
  { tester: C.atomicCheckBoxCellTester, cell: C.AtomicCheckBoxCell },
  { tester: C.atomicEnumSelectCellTester, cell: C.AtomicEnumSelectCell },
  { tester: C.atomicOneOfSelectCellTester, cell: C.AtomicOneOfSelectCell },
  { tester: C.atomicDateCellTester, cell: C.AtomicDateCell },
  { tester: C.atomicTimeCellTester, cell: C.AtomicTimeCell },
  { tester: C.atomicDateTimeCellTester, cell: C.AtomicDateTimeCell },
];

/** Development helpers. Opt in: `[...atomicRenderers, ...devAtomicRenderers]`. */
export const devAtomicRenderers: JsonFormsRendererRegistryEntry[] = [
  { tester: atomicFallbackTester, renderer: AtomicFallbackRenderer },
];
