import React from "react";

import Button from "../../Buttons/Button";
import {
  HasChildren,
  HasClassName,
  MaterialIconVariants,
  MaterialIcons,
} from "../../../types";
import MaterialIcon from "../../Utility/MaterialIcon";
import Banner, { BannerVariants } from "../Banner";
import { ButtonVariants } from "../../Buttons/Buttons.types";

export interface ActionBannerProps extends HasChildren, HasClassName {
  readonly variant?: BannerVariants;
  readonly icon?: MaterialIcons;
  readonly iconVariant?: MaterialIconVariants;
  readonly buttonVariant?: ButtonVariants;
  readonly buttonText: string;
  readonly onClick: () => void;
}

/** A view-spanning Banner with an associated `onClick` action */
export default function ActionBanner(props: ActionBannerProps) {
  const {
    variant = "info",
    icon,
    iconVariant = "default",
    buttonVariant = "inverted",
    buttonText,
    onClick,
    children,
    className,
  } = props;

  return (
    <Banner
      className={className}
      variant={variant}
      beforeContent={icon && <MaterialIcon icon={icon} variant={iconVariant} />}
      afterContent={
        <Button onClick={onClick} variant={buttonVariant}>
          {buttonText}
        </Button>
      }
    >
      {children}
    </Banner>
  );
}
