import React from "react";
import { useFocusable } from "@react-aria/focus";
import { filterDOMProps, mergeProps, useObjectRef } from "@react-aria/utils";
import {
  IconComponentBase,
  MaterialSymbolFontSettingsOptions,
  MaterialSymbols,
  MaterialSymbolVariants,
} from "../../../types";
import { useRenderProps } from "@hooks/useRenderProps";
import { useMaterialSymbolFontVariationSettings } from "@hooks/useMaterialSymbolFontVariationSettings";
import { StyledIcon } from "../Icons.styles";

export interface MaterialSymbolProps
  extends IconComponentBase<never>,
    MaterialSymbolFontSettingsOptions {
  symbol: MaterialSymbols;
  /** The type of material symbol to
   * render. Note that the font for that style needs to
   * be in scope for it to render properly */
  variant?: MaterialSymbolVariants;
}

/** Render out material-symbols with sensible defaults. */
export const MaterialSymbol = React.forwardRef<
  HTMLElement,
  MaterialSymbolProps
>(function MaterialSymbol(props, forwardedRef) {
  const {
    symbol,
    className,
    variant = "outlined",
    size = "medium",
    isDisabled = false,
    isFocusable = false,
    style,
    weight,
    grade,
    opticalSize,
    fill,
    ...rest
  } = props;

  const ref = useObjectRef(forwardedRef);

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

  const fontVariationSettings = useMaterialSymbolFontVariationSettings({
    fill,
    weight,
    grade,
    opticalSize,
  });

  const componentProps = [filterDOMProps(rest), renderProps];

  const { focusableProps } = useFocusable({}, ref);

  if (isFocusable) {
    componentProps.push(focusableProps);
  }

  const mergedProps = mergeProps(...componentProps);

  return (
    <StyledIcon
      ref={ref}
      aria-hidden
      {...mergedProps}
      style={{
        fontVariationSettings: fontVariationSettings || undefined,
        ...mergedProps.style,
      }}
    >
      {symbol}
    </StyledIcon>
  );
});
