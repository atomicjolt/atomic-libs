import { DOMAttributes, FocusableElement } from "@react-types/shared";
import React from "react";
import {
  AriaButtonOptions,
  AriaLinkOptions,
  ButtonAria,
  useButton,
  useLink,
} from "react-aria";

interface ButtonLinkOptions
  extends Omit<AriaButtonOptions<"button">, "elementType" | "target">,
    Omit<AriaLinkOptions, "elementType"> {
  elementType: "button" | "a";
}

/** Conditionally returns button or link props depending on what
 * the kind of element being rendered is
 */
export function useButtonLink(
  props: ButtonLinkOptions,
  ref: React.RefObject<HTMLButtonElement | HTMLAnchorElement>
): ButtonAria<DOMAttributes<FocusableElement>> {
  const { buttonProps, isPressed: isPressedButton } = useButton(props, ref);
  const { linkProps, isPressed: isPressedLink } = useLink(props, ref);

  if (props.elementType === "a") {
    return { buttonProps: linkProps, isPressed: isPressedLink };
  }

  return { buttonProps, isPressed: isPressedButton };
}
