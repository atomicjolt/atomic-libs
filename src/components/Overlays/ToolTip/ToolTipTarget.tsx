import React, { useRef } from "react";
import type { DOMAttributes } from "@react-types/shared";
import { FocusableOptions } from "react-aria";
import { useFocusable } from "@react-aria/focus";
import { StyledTarget } from "styled-components/dist/types";
import { HasChildren, HasClassName } from "../../../types";
import classNames from "classnames";
import { StyledToolTipTarget } from "./ToolTip.styles";

export type ToolTipTargetProps<P extends DOMAttributes> = HasClassName &
  FocusableOptions &
  HasChildren &
  P & {
    as?: StyledTarget<"web">;
  };

export function ToolTipTarget<P extends DOMAttributes>(
  props: ToolTipTargetProps<P>
) {
  const { className, as, children, ...rest } = props;
  const ref = useRef(null);
  const { focusableProps } = useFocusable(rest, ref);

  return (
    <StyledToolTipTarget
      {...focusableProps}
      as={as}
      className={classNames(className)}
      ref={ref}
    >
      {children}
    </StyledToolTipTarget>
  );
}
