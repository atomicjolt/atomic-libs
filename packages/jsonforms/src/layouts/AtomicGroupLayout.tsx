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
import { headingLevel, HeadingLevel } from "./heading";

export interface AtomicGroupLayoutOptions {
  /** Font size of the label: an atomic-elements scale step. @default "5" */
  headingSize?: string;
  /** Element the label renders as. @default "h2" */
  headingLevel?: HeadingLevel;
}

/**
 * A `Group`: its label as a heading above its elements. Configure the heading
 * with `options.headingSize` and `options.headingLevel`.
 */
export function AtomicGroupLayout(props: LayoutProps) {
  const { uischema, label, visible, ...rest } = props;
  const options: AtomicGroupLayoutOptions = uischema.options ?? {};

  if (!visible) return null;

  return (
    <View>
      {label && (
        <Heading
          as={headingLevel(options.headingLevel)}
          $size={options.headingSize ?? "5"}
          $mb="4"
        >
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

export const atomicGroupLayoutTester: RankedTester = rankWith(
  1,
  uiTypeIs("Group")
);

export default withJsonFormsLayoutProps(AtomicGroupLayout);
