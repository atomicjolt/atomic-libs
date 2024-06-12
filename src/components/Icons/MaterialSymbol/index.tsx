import React from "react";
import { HasClassName, MaterialIcons, Size } from "../../../types";
import { useRenderProps } from "../../../hooks";
import { StyledIcon } from "../Icons.styles";

export type MaterialSymbolVariants = "outlined" | "rounded" | "sharp";

export interface MaterialSymbolProps
  extends Omit<
      React.HTMLProps<HTMLElement>,
      "size" | "className" | "ref" | "as"
    >,
    HasClassName {
  // TODO: this probably isn't the right type
  symbol: MaterialIcons;
  /** The type of material symbol to
   * render. Note that the font for that style needs to
   * be in scope for it to render properly */
  variant?: MaterialSymbolVariants;
  size?: Size;

  isDisabled?: boolean;

  /** @deprecated - use isDisabled */
  disabled?: boolean;
}

/** Render out material-symbols with sensible defaults. */
export function MaterialSymbol(props: MaterialSymbolProps) {
  const {
    symbol,
    className,
    variant = "outlined",
    size = "medium",
    disabled = false,
    isDisabled = disabled,
    ...rest
  } = props;

  const materialSymbolClass = `material-icons-${variant}`;

  const renderProps = useRenderProps({
    componentClassName: "aje-icon",
    className: [materialSymbolClass, className],
    size,
    selectors: {
      "data-disabled": isDisabled,
    },
  });

  return (
    <StyledIcon aria-hidden {...renderProps} {...rest}>
      {symbol}
    </StyledIcon>
  );
}
