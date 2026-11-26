import {
  LabelElement,
  LabelProps,
  RankedTester,
  rankWith,
  uiTypeIs,
} from "@jsonforms/core";
import { withJsonFormsLabelProps } from "@jsonforms/react";
import { Text } from "@atomicjolt/atomic-elements";
import type { TextProps } from "@atomicjolt/atomic-elements";

const ELEMENTS = ["div", "p", "span"] as const;

/** `options` for a `Label` element. Each maps onto atomic-elements' `Text`. */
export interface AtomicLabelOptions {
  /** Font size: a scale step or CSS size. @default "3" */
  size?: TextProps["$size"];
  /** Font weight. */
  weight?: TextProps["$weight"];
  /** Text color: a theme token (e.g. `"text-clr-secondary"`) or any CSS color. */
  color?: TextProps["$color"];
  /** Horizontal alignment. */
  align?: TextProps["$align"];
  /** How long text wraps (`"pretty"`, `"balanced"`, `"nowrap"`). */
  wrap?: TextProps["$wrap"];
  /** Element to render. A block element by default so `align` works. @default "div" */
  as?: (typeof ELEMENTS)[number];
  /** Any other `Text` props, spread last. */
  props?: Partial<TextProps>;
}

/** Renders a UI schema `Label` element as text. Style it with `options`. */
export function AtomicLabelRenderer({ text, visible, uischema }: LabelProps) {
  if (!visible || !text) return null;

  const options: AtomicLabelOptions = uischema?.options ?? {};
  const as = ELEMENTS.includes(options.as as (typeof ELEMENTS)[number])
    ? options.as
    : "div";

  return (
    <Text
      as={as}
      $size={options.size ?? "3"}
      $weight={options.weight}
      $color={options.color}
      $align={options.align}
      $wrap={options.wrap}
      {...options.props}
    >
      {text}
    </Text>
  );
}

export const atomicLabelRendererTester: RankedTester = rankWith(
  1,
  uiTypeIs("Label")
);

export default withJsonFormsLabelProps(AtomicLabelRenderer);

export type { LabelElement };
