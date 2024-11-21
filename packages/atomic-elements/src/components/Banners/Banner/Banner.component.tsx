import React from "react";
import cn from "classnames";
import { HasChildren, HasClassName, SuggestStrings } from "../../../types";
import { BannerContent, StyledBanner } from "../Banners.styles";
import { IconButton, IconButtonProps } from "../../Buttons/IconButton";
import { Button, ButtonProps } from "../../Buttons/Button";
import { ButtonContext } from "@components/Buttons/Button/Button.context";
import { DEFAULT_SLOT } from "@hooks/useSlottedContext";

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

  return (
    <ButtonContext.Provider
      value={{
        slots: {
          [DEFAULT_SLOT]: {},
          icon: {
            variant: "banner",
          },
          action: {
            variant: "inverted",
          },
        },
      }}
    >
      <StyledBanner className={cn(`aje-banner--${variant}`, className)}>
        {children}
      </StyledBanner>
    </ButtonContext.Provider>
  );
}

function BannerIconButon(props: IconButtonProps) {
  return <IconButton slot="icon" {...props} />;
}

function BannerButton(props: ButtonProps) {
  return <Button slot="action" {...props} />;
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
