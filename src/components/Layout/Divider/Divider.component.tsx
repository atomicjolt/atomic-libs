import React from "react";
import { useSeparator } from "@react-aria/separator";
import { AriaLabelProps, BaseProps } from "../../../types";
import { useRenderProps } from "@hooks/useRenderProps";
import { StyledDivider } from "./Divider.styles";

export interface DividerProps extends BaseProps, AriaLabelProps {
  /** The orientation of the divider */
  orientation?: "horizontal" | "vertical";
  /** The margins along the primary axis of the divider.
   * When "horizontal" it's the top & bottom margin and when
   * "vertical" it's the left & right margin */
  spacing?: number | string;

  /** The HTML element type that will be used to render the divider. */
  as?: React.ElementType;
}

/** A visual divider between two groups of content */
export function Divider(props: DividerProps) {
  const { orientation = "horizontal", spacing, as } = props;
  const { separatorProps } = useSeparator({
    ...props,
    elementType: typeof as === "string" ? as : "div",
  });

  const renderProps = useRenderProps({
    componentClassName: "aje-divider",
    ...props,
  });

  return (
    <StyledDivider
      {...separatorProps}
      {...renderProps}
      as={as}
      $spacing={spacing}
      aria-orientation={orientation}
    />
  );
}
