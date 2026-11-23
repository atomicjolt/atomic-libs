import {
  LabelElement,
  OwnPropsOfRenderer,
  RankedTester,
  rankWith,
  uiTypeIs,
} from "@jsonforms/core";
import { withJsonFormsLabelProps } from "@jsonforms/react";
import { Text } from "@atomicjolt/atomic-elements";

interface AtomicLabelProps extends OwnPropsOfRenderer {
  text?: string;
}

/** Renders a UI schema `Label` element as plain text. */
export function AtomicLabelRenderer({ text, visible }: AtomicLabelProps) {
  if (!visible || !text) return null;
  return <Text>{text}</Text>;
}

export const atomicLabelRendererTester: RankedTester = rankWith(1, uiTypeIs("Label"));

export default withJsonFormsLabelProps(AtomicLabelRenderer);

export type { LabelElement };
