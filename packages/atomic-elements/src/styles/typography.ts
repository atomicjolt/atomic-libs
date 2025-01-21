import { SuggestStrings } from "../types";
import { inScale, NumericScaleValue } from "./scale";

export interface TypographyProps {
  $size?: SuggestStrings<NumericScaleValue>;
  $letterSpacing?: SuggestStrings<NumericScaleValue>;
  $lineHeight?: SuggestStrings<NumericScaleValue>;
  $weight?: "light" | "regular" | "medium" | "bold";
  $align?: "left" | "center" | "right" | "justify";
  $wrap?: "nowrap" | "pretty" | "balanced";
  $truncate?: boolean;
}

export function typography(props: TypographyProps) {
  const { $weight, $align, $wrap, $truncate } = props;

  return {
    ...resolveSize(props),
    fontFamily: "var(--font-family)",
    fontWeight: $weight && `var(--font-weight-${$weight})`,
    textAlign: $align,
    whiteSpace: $truncate ? "nowrap" : $wrap,
    textOverflow: $truncate ? "ellipsis" : undefined,
    overflow: $truncate ? "hidden" : undefined,
  };
}

function resolveSize(props: TypographyProps) {
  const { $size, $letterSpacing, $lineHeight } = props;

  const styles: Record<string, string> = {};

  // By default, size also configures the line height and spacing
  // of the element
  if (inScale($size)) {
    styles.fontSize = `var(--font-size-${$size})`;
    styles.lineHeight = `var(--line-height-${$size})`;
    styles.letterSpacing = `var(--letter-spacing-${$size})`;
  } else if ($size) {
    styles.fontSize = $size;
  }

  // But they can be overridden by providing specific values
  if (inScale($letterSpacing)) {
    styles.letterSpacing = `var(--letter-spacing-${$letterSpacing})`;
  } else if ($letterSpacing) {
    styles.letterSpacing = $letterSpacing;
  }

  if (inScale($lineHeight)) {
    styles.lineHeight = `var(--line-height-${$lineHeight})`;
  } else if ($lineHeight) {
    styles.lineHeight = $lineHeight;
  }

  return styles;
}
