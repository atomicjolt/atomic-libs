import React from "react";
import {
  Pressable as ReactAriaPressable,
  PressProps,
} from "@react-aria/interactions";
import { DOMAttributes } from "@react-types/shared";

interface PressableProps extends PressProps {
  children: React.ReactElement<DOMAttributes, string>;
}

/** Wraps a react element to make it respond to press events like `Button` does */
export function Pressable(props: PressableProps) {
  return <ReactAriaPressable {...props} />;
}
