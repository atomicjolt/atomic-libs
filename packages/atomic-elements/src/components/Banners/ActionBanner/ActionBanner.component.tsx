import { forwardRef } from "react";
import {
  ElementWrapper,
  MaterialIconVariants,
  MaterialIcons,
  RenderBaseProps,
} from "../../../types";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { Banner, BannerVariants } from "../Banner";
import { ButtonVariants } from "../../Buttons/Button";
import { useRenderProps } from "@hooks";

export interface ActionBannerProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLDivElement> {
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
      className,
      style,
      children,
      ...rest
    } = props;

    const renderProps = useRenderProps({
      componentClassName: "aje-banner",
      className,
      style,
      variant,
      children,
    });

    return (
      <Banner ref={ref} {...renderProps} {...rest}>
        {icon && <MaterialIcon icon={icon} variant={iconVariant} />}
        <Banner.Content>{renderProps.children}</Banner.Content>
        <Banner.Button variant={buttonVariant} onPress={onPress}>
          {buttonText}
        </Banner.Button>
      </Banner>
    );
  }
);
