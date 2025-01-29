import { forwardRef } from "react";
import {
  HasChildren,
  HasClassName,
  MaterialIconVariants,
  MaterialIcons,
  RenderBaseProps,
} from "../../../types";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { Banner, BannerVariants } from "../Banner";
import { ButtonVariants } from "../../Buttons/Button";
import { useRenderProps } from "@hooks";

export interface ActionBannerProps extends RenderBaseProps<never> {
  readonly variant?: BannerVariants;
  readonly icon?: MaterialIcons;
  readonly iconVariant?: MaterialIconVariants;
  readonly buttonVariant?: ButtonVariants;
  readonly buttonText: string;
  readonly onPress: () => void;
}

/** A view-spanning Banner with an associated `onPress` action */

export const ActionBanner = forwardRef<HTMLDivElement, ActionBannerProps>(
  (props, ref) => {
    const {
      variant = "info",
      icon,
      iconVariant = "default",
      buttonVariant = "inverted",
      buttonText,
      onPress,
    } = props;

    const renderProps = useRenderProps({
      componentClassName: "aje-banner",
      ...props,
      variant,
    });

    return (
      <Banner {...renderProps} ref={ref}>
        {icon && <MaterialIcon icon={icon} variant={iconVariant} />}
        <Banner.Content>{renderProps.children}</Banner.Content>
        <Banner.Button variant={buttonVariant} onPress={onPress}>
          {buttonText}
        </Banner.Button>
      </Banner>
    );
  }
);
