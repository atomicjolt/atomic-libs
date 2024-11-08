import React from "react";
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

/** A view-spanning Banner. The most Basic kind of banner,
 * with no associated actions / buttons. Useful building block when constructing
 * your own banners.
 */
export function Banner(props: BannerProps) {
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
    <StyledBanner className={cn(`aje-banner--${variant}`, className)}>
      {content}
    </StyledBanner>
  );
}

function BannerIconButon(props: IconButtonProps) {
  const { variant = "banner", ...rest } = props;
  return <IconButton variant={variant} {...rest} />;
}

function BannerButton(props: ButtonProps) {
  const { variant = "inverted", ...rest } = props;
  return <Button variant={variant} {...rest} />;
}

/** Wrapper around the textual content of a Banner */
Banner.Content = BannerContent;
BannerContent.displayName = "Banner.Content";

/** IconButton for Banners */
Banner.IconButton = BannerIconButon;
BannerIconButon.displayName = "Banner.IconButton";

/** Button for Banners */
Banner.Button = BannerButton;
BannerButton.displayName = "Banner.Button";
