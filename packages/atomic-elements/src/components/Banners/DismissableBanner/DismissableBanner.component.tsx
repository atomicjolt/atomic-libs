import React, { useState } from "react";
import {
  HasChildren,
  HasClassName,
  MaterialIconVariants,
  MaterialIcons,
} from "../../../types";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { Banner, BannerVariants } from "../Banner";

interface SharedProps extends HasClassName, HasChildren {
  /** When present, you control if the error is dismissed or not. When not present, the component will dismiss itself */
  readonly onDismiss?: () => void;
}

export interface DismissableBannerProps extends SharedProps {
  readonly variant?: BannerVariants;
  /** Name of material icon to be displayed */
  readonly icon?: MaterialIcons;
  /** Variant of material icon to be displayed */
  readonly iconVariant?: MaterialIconVariants;
}

/** A Banner that the user can dismiss by clicking the "x" on the right.
 *
 * For convenience, there are also `ErrorBanner` and `WarningBanner` components that set sensible defaults
 * for the `variant` and `icon` props.
 */
export function DismissableBanner(props: DismissableBannerProps) {
  const {
    children,
    variant,
    iconVariant = "default",
    icon,
    onDismiss,
    className,
  } = props;

  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <Banner className={className} variant={variant}>
      {icon && <MaterialIcon icon={icon} variant={iconVariant} />}
      <Banner.Content>{children}</Banner.Content>
      <Banner.IconButton
        icon="close"
        className="aje-banner__dismiss"
        aria-label={`dismiss ${variant}`}
        onPress={() => {
          !onDismiss && setVisible(false);
          onDismiss && onDismiss();
        }}
      />
    </Banner>
  );
}

export type BannerWrapperProps = SharedProps;

/** Conveneince Wrapper around `DismissableBanner` */
export function ErrorBanner(props: BannerWrapperProps) {
  return <DismissableBanner variant="error" icon="error" {...props} />;
}

export function WarningBanner(props: BannerWrapperProps) {
  return <DismissableBanner variant="warning" icon="warning" {...props} />;
}
