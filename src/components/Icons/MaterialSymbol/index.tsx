import React, { RefObject } from "react";
import { ExtendedSize, MaterialIcons, RenderBaseProps } from "../../../types";
import { useForwardedRef, useRenderProps } from "../../../hooks";
import { StyledIcon } from "../Icons.styles";
import { useFocusable } from "@react-aria/focus";
import { filterDOMProps, mergeProps } from "@react-aria/utils";

export type MaterialSymbolVariants = "outlined" | "rounded" | "sharp";

export interface MaterialSymbolProps
  extends Omit<React.ComponentProps<"i">, "className" | "style" | "children">,
    RenderBaseProps<never> {
  // TODO: this probably isn't the right type
  symbol: MaterialIcons;
  /** The type of material symbol to
   * render. Note that the font for that style needs to
   * be in scope for it to render properly */
  variant?: MaterialSymbolVariants;

  isDisabled?: boolean;

  /** @deprecated - use isDisabled */
  disabled?: boolean;

  size?: ExtendedSize;
}

/** Render out material-symbols with sensible defaults. */
export const MaterialSymbol = React.forwardRef<
  HTMLElement,
  MaterialSymbolProps
>(function MaterialSymbol(props, ref) {
  const {
    symbol,
    className,
    variant = "outlined",
    size = "medium",
    disabled = false,
    isDisabled = disabled,
    style,
    ...rest
  } = props;

  const internalRef = useForwardedRef(ref);

  const materialSymbolClass = `material-symbols-${variant}`;

  const renderProps = useRenderProps({
    componentClassName: "aje-icon",
    className: [materialSymbolClass, className],
    size,
    style,
    selectors: {
      "data-disabled": isDisabled,
    },
  });

  // We use the focusable hook so that the icon supports tooltips
  // the icon itself isn't actually focusable
  const { focusableProps } = useFocusable({}, internalRef);

  const componentProps = mergeProps(
    filterDOMProps(rest),
    renderProps,
    focusableProps
  );

  return (
    <StyledIcon ref={internalRef} aria-hidden {...componentProps}>
      {symbol}
    </StyledIcon>
  );
});
