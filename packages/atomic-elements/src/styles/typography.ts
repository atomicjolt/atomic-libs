import { SuggestStrings } from "../types";
import { inScale, NumericScaleValue } from "./scale";

export interface TypographyProps {
  /** Font size: a scale step, which also sets line height and letter spacing, or any CSS size. */
  $size?: SuggestStrings<NumericScaleValue>;
  /** Letter spacing: a scale step or CSS value. Overrides the one set by `$size`. */
  $letterSpacing?: SuggestStrings<NumericScaleValue>;
  /** Line height: a scale step or CSS value. Overrides the one set by `$size`. */
  $lineHeight?: SuggestStrings<NumericScaleValue>;
  /** Font weight, from the theme's font weights. */
  $weight?: "light" | "regular" | "medium" | "bold";
  /** Horizontal text alignment (text-align). */
  $align?: "left" | "center" | "right" | "justify";
  /** How text wraps: `nowrap` keeps it on one line; `pretty` and `balanced` set CSS text-wrap. */
  $wrap?: "nowrap" | "pretty" | "balanced";
  /** Keep the text on one line and cut it off with an ellipsis. */
  $truncate?: boolean;
  /** Text decoration (text-decoration). */
  $decoration?: SuggestStrings<"none" | "underline">;
  /** Clamp the text content after this number of lines */
  $clamp?: SuggestStrings<
    "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10"
  >;
  /** Text transform (text-transform). */
  $transform?:
    | "uppercase"
    | "lowercase"
    | "capitalize"
    | "none"
    | "full-width"
    | "full-size-kana";
}

export function typography(props: TypographyProps) {
  const { $weight, $align, $wrap, $truncate, $decoration, $transform, $clamp } =
    props;

  return {
    ...resolveSize(props),
    fontFamily: "var(--font-family)",
    fontWeight: $weight && `var(--font-weight-${$weight})`,
    textAlign: $align,
    whiteSpace: $truncate || $wrap === "nowrap" ? "nowrap" : undefined,
    textWrap: textWrapValue($wrap),
    textOverflow: $truncate ? "ellipsis" : undefined,
    overflow: $truncate ? "hidden" : undefined,
    textDecoration: $decoration,
    textTransform: $transform,
    ...clampLines($clamp),
  };
}

/** `pretty` and `balanced` set text-wrap; `nowrap` is handled by white-space. */
function textWrapValue(wrap: TypographyProps["$wrap"]) {
  if (wrap === "pretty") return "pretty";
  if (wrap === "balanced") return "balance";
  return undefined;
}

typography.defaults = (defaults: TypographyProps) => (props: TypographyProps) =>
  typography({ ...defaults, ...props });

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

function clampLines(lines?: string) {
  if (!lines) {
    return {};
  }

  return {
    display: "-webkit-box",
    lineClamp: lines,
    WebkitLineClamp: lines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  } as const;
}
