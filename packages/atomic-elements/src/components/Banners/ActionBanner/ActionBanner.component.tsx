import React from "react";

import {
  HasChildren,
  HasClassName,
  MaterialIconVariants,
  MaterialIcons,
} from "../../../types";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { Banner, BannerVariants } from "../Banner";
import { ButtonVariants } from "../../Buttons/Button";

export interface ActionBannerProps extends HasChildren, HasClassName {
  readonly variant?: BannerVariants;
  readonly icon?: MaterialIcons;
  readonly iconVariant?: MaterialIconVariants;
  readonly buttonVariant?: ButtonVariants;
  readonly buttonText: string;
  readonly onPress: () => void;
}

/** A view-spanning Banner with an associated `onPress` action */
export function ActionBanner(props: ActionBannerProps) {
  const {
    variant = "info",
    icon,
    iconVariant = "default",
    buttonVariant = "inverted",
    buttonText,
    onPress,
    children,
    className,
  } = props;

  return (
    <Banner className={className} variant={variant}>
      {icon && <MaterialIcon icon={icon} variant={iconVariant} />}
      <Banner.Content>{children}</Banner.Content>
      <Banner.Button variant={buttonVariant} onPress={onPress}>
        {buttonText}
      </Banner.Button>
    </Banner>
  );
}
