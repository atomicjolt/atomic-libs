import React from "react";
import cn from "classnames";
import { HasChildren, HasClassName, SuggestStrings } from "../../../types";
import { BannerMain, StyledBanner } from "../Banners.styles";

export type BannerVariants = SuggestStrings<
  "info" | "error" | "success" | "warning"
>;

export interface BannerProps extends HasChildren, HasClassName {
  readonly variant?: BannerVariants;
  /** Render Something before the text content of the banner */
  readonly beforeContent?: React.ReactNode;
  /** Render Something after the text content of the banner */
  readonly afterContent?: React.ReactNode;
}

/** A view-spanning Banner. The most Basic kind of banner,
 * with no associated actions / buttons. Useful building block when constructing
 * your own banners.
 */
export default function Banner(props: BannerProps) {
  const {
    variant = "info",
    children,
    className,
    beforeContent,
    afterContent,
  } = props;

  return (
    <StyledBanner className={cn(`aje-banner--${variant}`, className)}>
      {beforeContent}
      <BannerMain className="aje-banner__main">{children}</BannerMain>
      {afterContent}
    </StyledBanner>
  );
}
