import React from "react";
import { DOMAttributes, FocusableElement } from "@react-types/shared";
import { AriaButtonOptions, ButtonAria, useButton } from "@react-aria/button";
import { AriaLinkOptions, useLink } from "@react-aria/link";

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
  ref: React.RefObject<HTMLButtonElement | HTMLAnchorElement | null>
): ButtonAria<DOMAttributes<FocusableElement>> {
  const { buttonProps, isPressed: isPressedButton } = useButton(props, ref);
  const { linkProps, isPressed: isPressedLink } = useLink(props, ref);

  if (props.elementType === "a") {
    return { buttonProps: linkProps, isPressed: isPressedLink };
  }

  return { buttonProps, isPressed: isPressedButton };
}
