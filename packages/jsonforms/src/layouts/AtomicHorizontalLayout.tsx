import {
  HorizontalLayout,
  LayoutProps,
  RankedTester,
  rankWith,
  uiTypeIs,
} from "@jsonforms/core";
import { withJsonFormsLayoutProps } from "@jsonforms/react";
import { AtomicLayoutRenderer } from "./AtomicLayoutRenderer";

export function AtomicHorizontalLayout(props: LayoutProps) {
  const { uischema, ...rest } = props;
  return (
    <AtomicLayoutRenderer
      {...rest}
      elements={(uischema as HorizontalLayout).elements}
      direction="row"
    />
  );
}

export const atomicHorizontalLayoutTester: RankedTester = rankWith(
  1,
  uiTypeIs("HorizontalLayout"),
);

export default withJsonFormsLayoutProps(AtomicHorizontalLayout);
