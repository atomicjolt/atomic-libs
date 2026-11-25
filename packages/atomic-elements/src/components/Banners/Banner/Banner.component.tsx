import { setDisplayName } from "@utils/displayName";
import React, { forwardRef, RefAttributes, type JSX } from "react";
import { useRenderProps } from "@hooks/useRenderProps";
import {
  ElementWrapper,
  RenderBaseProps,
  SuggestStrings,
} from "../../../types";
import {
  BannerContent,
  StyledBanner,
  StyledBannerIcon,
} from "../Banners.styles";
import { IconButton, IconButtonProps } from "../../Buttons/IconButton";
import { Button, ButtonProps } from "../../Buttons/Button";
import { MaterialIcon, MaterialIconProps } from "../../Icons/MaterialIcon";

export type BannerVariants = SuggestStrings<
  "info" | "error" | "success" | "warning"
>;

export interface BannerProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLDivElement> {
  /** Colour variant: `info`, `error`, `success` or `warning`
   * @default "info"
   */
  readonly variant?: BannerVariants;
}

export type BannerIconProps = MaterialIconProps;

const BannerIcon = forwardRef<HTMLElement, BannerIconProps>((props, ref) => {
  return (
    <StyledBannerIcon className="aje-banner__icon">
      <MaterialIcon ref={ref} {...props} />
    </StyledBannerIcon>
  );
});

const BannerIconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const { variant = "banner", ...rest } = props;
    return <IconButton ref={ref} variant={variant} {...rest} />;
  }
);

const BannerButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant = "inverted", ...rest } = props;
    return <Button ref={ref} variant={variant} {...rest} />;
  }
);

interface ForwardedBanner {
  (props: BannerProps & RefAttributes<HTMLDivElement>): JSX.Element;
  displayName: string;
  Content: typeof BannerContent;
  Icon: typeof BannerIcon;
  IconButton: typeof BannerIconButton;
  Button: typeof BannerButton;
}

/** A view-spanning Banner. The most Basic kind of banner,
 * with no associated actions / buttons. Useful building block when constructing
 * your own banners.
 */
export const Banner = forwardRef(function Banner(
  props: BannerProps,
  ref: React.Ref<HTMLDivElement>
) {
  const { variant = "info", children, className, style, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-banner",
    variant,
    children,
    className,
    style,
  });

  return <StyledBanner ref={ref} {...renderProps} {...rest} />;
}) as unknown as ForwardedBanner;
setDisplayName(Banner, "Banner");

/** Wrapper around the textual content of a Banner */
Banner.Content = BannerContent;
setDisplayName(BannerContent, "Banner.Content");

/** Icon for Banners. Renders a `MaterialIcon` inside a wrapper that keeps it
 * aligned with the Banner's buttons */
Banner.Icon = BannerIcon;
setDisplayName(BannerIcon, "Banner.Icon");

/** IconButton for Banners. Its `variant` defaults to `"banner"`. */
Banner.IconButton = BannerIconButton;
setDisplayName(BannerIconButton, "Banner.IconButton");

/** Button for Banners. Its `variant` defaults to `"inverted"`. */
Banner.Button = BannerButton;
setDisplayName(BannerButton, "Banner.Button");
