import React from "react";
import cn from "classnames";
import { HasClassName, MaterialIcons } from "../../../types";
import { useVariantClass } from "../../../hooks";
import { StyledIcon } from "../Icons.styles";

export type MaterialSymbolVariants = "outlined" | "rounded" | "sharp";

export interface MaterialSymbolProps
  extends Omit<
      React.HTMLProps<HTMLElement>,
      "size" | "className" | "ref" | "as"
    >,
    HasClassName {
  symbol: MaterialIcons;
  /** The type of material symbol to
   * render. Note that the font for that style needs to
   * be in scope for it to render properly*/
  variant?: MaterialSymbolVariants;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

/** Render out material-symbols with sensible defaults. No Material
 * Symbol Font variant is loaded when using <LoadFonts /> by default,
 * so you need to include it explictly, or load it another way */
export default function MaterialSymbol(props: MaterialSymbolProps) {
  const {
    symbol,
    className,
    variant = "outlined",
    size = "medium",
    disabled = false,
    ...rest
  } = props;

  const variantClass = useVariantClass("material-symbols", variant, "-");

  return (
    <StyledIcon
      className={cn(variantClass, className, `is-${size}`, {
        "is-disabled": disabled,
      })}
      aria-hidden={true}
      {...rest}
    >
      {symbol}
    </StyledIcon>
  );
}
