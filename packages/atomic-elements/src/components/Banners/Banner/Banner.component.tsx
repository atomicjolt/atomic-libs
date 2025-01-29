import React, { forwardRef, RefAttributes } from "react";
import { useRenderProps } from "@hooks/useRenderProps";
import {
  ElementWrapper,
  RenderBaseProps,
  SuggestStrings,
} from "../../../types";
import { BannerContent, StyledBanner } from "../Banners.styles";
import { IconButton, IconButtonProps } from "../../Buttons/IconButton";
import { Button, ButtonProps } from "../../Buttons/Button";

export type BannerVariants = SuggestStrings<
  "info" | "error" | "success" | "warning"
>;

export interface BannerProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLDivElement> {
  readonly variant?: BannerVariants;
}

function Banner(props: BannerProps, ref: React.Ref<HTMLDivElement>) {
  const { variant = "info", children, className, style, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-banner",
    variant,
    children,
    className,
    style,
  });

  return <StyledBanner ref={ref} {...renderProps} {...rest} />;
}

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
  IconButton: typeof BannerIconButton;
  Button: typeof BannerButton;
}

/** A view-spanning Banner. The most Basic kind of banner,
 * with no associated actions / buttons. Useful building block when constructing
 * your own banners.
 */
const _Banner = forwardRef(Banner) as unknown as ForwardedBanner;
_Banner.displayName = "Banner";

/** Wrapper around the textual content of a Banner */
_Banner.Content = BannerContent;
BannerContent.displayName = "Banner.Content";

/** IconButton for Banners */
_Banner.IconButton = BannerIconButton;
BannerIconButton.displayName = "Banner.IconButton";

/** Button for Banners */
_Banner.Button = BannerButton;
BannerButton.displayName = "Banner.Button";

export { _Banner as Banner };
