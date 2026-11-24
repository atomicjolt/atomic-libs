import { forwardRef } from "react";
import {
  ElementWrapper,
  MaterialIconVariants,
  MaterialIcons,
  RenderBaseProps,
} from "../../../types";
import { Banner, BannerVariants } from "../Banner";
import { ButtonVariants } from "../../Buttons/Button";
import { useRenderProps } from "@hooks";

export interface ActionBannerProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLDivElement> {
  /** Colour variant: `info`, `error`, `success` or `warning`
   * @default "info"
   */
  readonly variant?: BannerVariants;
  /** Material icon shown before the content. No icon is shown when omitted. */
  readonly icon?: MaterialIcons;
  /** Icon set for `icon`
   * @default "default"
   */
  readonly iconVariant?: MaterialIconVariants;
  /** Variant of the action button
   * @default "inverted"
   */
  readonly buttonVariant?: ButtonVariants;
  /** Text of the action button */
  readonly buttonText: string;
  /** Called when the action button is pressed */
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
      children,
      ...rest
    } = props;

    const renderProps = useRenderProps({
      componentClassName: "aje-banner",
      children,
    });

    return (
      <Banner ref={ref} variant={variant} {...rest}>
        {icon && <Banner.Icon icon={icon} variant={iconVariant} />}
        <Banner.Content>{renderProps.children}</Banner.Content>
        <Banner.Button variant={buttonVariant} onPress={onPress}>
          {buttonText}
        </Banner.Button>
      </Banner>
    );
  }
);
