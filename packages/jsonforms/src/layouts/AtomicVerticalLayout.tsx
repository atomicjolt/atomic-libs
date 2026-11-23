import {
  LayoutProps,
  RankedTester,
  rankWith,
  uiTypeIs,
  VerticalLayout,
} from "@jsonforms/core";
import { withJsonFormsLayoutProps } from "@jsonforms/react";
import { AtomicLayoutRenderer } from "./AtomicLayoutRenderer";

export function AtomicVerticalLayout(props: LayoutProps) {
  const { uischema, ...rest } = props;
  return (
    <AtomicLayoutRenderer
      {...rest}
      elements={(uischema as VerticalLayout).elements}
      direction="column"
    />
  );
}

export const atomicVerticalLayoutTester: RankedTester = rankWith(
  1,
  uiTypeIs("VerticalLayout"),
);

export default withJsonFormsLayoutProps(AtomicVerticalLayout);
