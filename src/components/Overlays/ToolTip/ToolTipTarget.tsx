import React, { useRef } from "react";
import type { DOMAttributes } from "@react-types/shared";
import { FocusableOptions } from "react-aria";
import { useFocusable } from "@react-aria/focus";
import { StyledTarget } from "styled-components/dist/types";
import { HasChildren, HasClassName } from "../../../types";
import classNames from "classnames";
import { StyledToolTipTarget } from "./ToolTip.styles";

export type ToolTipTargetProps = {
  children: React.ReactElement;
};

export function ToolTipTarget(props: ToolTipTargetProps) {
  const { children } = props;
  const child = React.Children.only(children);
  const ref = useRef(null);
  const { focusableProps } = useFocusable({}, ref);

  return React.cloneElement(child, {
    ...child.props,
    ...focusableProps,
    ref,
  });
}
