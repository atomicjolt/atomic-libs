import React, { useRef } from "react";
import { useFocusable } from "@react-aria/focus";

export type ToolTipTargetProps = {
  children: React.ReactElement<any>;
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
