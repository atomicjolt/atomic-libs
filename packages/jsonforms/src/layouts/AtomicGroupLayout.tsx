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

const HEADING_LEVELS = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
type HeadingLevel = (typeof HEADING_LEVELS)[number];

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

  const headingLevel = HEADING_LEVELS.includes(options.headingLevel as HeadingLevel)
    ? options.headingLevel
    : "h2";

  return (
    <View>
      {label && (
        <Heading as={headingLevel} $size={options.headingSize ?? "5"} $mb="4">
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
