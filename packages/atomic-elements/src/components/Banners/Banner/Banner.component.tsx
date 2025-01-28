import React, { forwardRef } from "react";
import cn from "classnames";
import { HasChildren, HasClassName, SuggestStrings } from "../../../types";
import { BannerContent, StyledBanner } from "../Banners.styles";
import { IconButton, IconButtonProps } from "../../Buttons/IconButton";
import { Button, ButtonProps } from "../../Buttons/Button";

export type BannerVariants = SuggestStrings<
  "info" | "error" | "success" | "warning"
>;

export interface BannerProps extends HasChildren, HasClassName {
  readonly variant?: BannerVariants;
}

function Banner(props: BannerProps, ref: React.Ref<HTMLDivElement>) {
  const { variant = "info", children, className } = props;

  let content: React.ReactNode;
  if (typeof children === "string") {
    content = (
      <BannerContent style={{ paddingLeft: "10px" }}>{children}</BannerContent>
    );
  } else {
    content = children;
  }

  return (
    <StyledBanner ref={ref} className={cn(`aje-banner--${variant}`, className)}>
      {content}
    </StyledBanner>
  );
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

/** Wrapper around the textual content of a Banner */
Banner.Content = BannerContent;
BannerContent.displayName = "Banner.Content";

/** IconButton for Banners */
Banner.IconButton = BannerIconButton;
BannerIconButton.displayName = "Banner.IconButton";

/** Button for Banners */
Banner.Button = BannerButton;
BannerButton.displayName = "Banner.Button";

/** A view-spanning Banner. The most Basic kind of banner,
 * with no associated actions / buttons. Useful building block when constructing
 * your own banners.
 */
const _Banner = forwardRef(Banner) as unknown as typeof Banner & {
  ref: React.Ref<HTMLDivElement>;
};

_Banner.Content = BannerContent;
_Banner.IconButton = BannerIconButton;
_Banner.Button = BannerButton;

export { _Banner as Banner };
