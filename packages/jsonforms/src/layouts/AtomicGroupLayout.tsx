import {
  GroupLayout,
  LayoutProps,
  RankedTester,
  rankWith,
  uiTypeIs,
} from "@jsonforms/core";
import { withJsonFormsLayoutProps } from "@jsonforms/react";
import { Heading, View } from "@atomicjolt/atomic-elements";
import { AtomicLayoutRenderer } from "./AtomicLayoutRenderer";

export function AtomicGroupLayout(props: LayoutProps) {
  const { uischema, label, visible, ...rest } = props;

  if (!visible) return null;

  return (
    <View>
      {label && (
        <Heading $size="5" $mb="4">
          {label}
        </Heading>
      )}
      <AtomicLayoutRenderer
        {...rest}
        visible={visible}
        elements={(uischema as GroupLayout).elements}
        direction="column"
      />
    </View>
  );
}

export const atomicGroupLayoutTester: RankedTester = rankWith(1, uiTypeIs("Group"));

export default withJsonFormsLayoutProps(AtomicGroupLayout);
