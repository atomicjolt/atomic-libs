import React, { useState } from "react";
import {
  HasChildren,
  HasClassName,
  MaterialIconVariants,
  MaterialIcons,
} from "../../../types";
import { BannerDismiss } from "../Banners.styles";
import MaterialIcon from "../../Icons/MaterialIcon";
import Banner, { BannerVariants } from "../Banner";

interface SharedProps extends HasClassName, HasChildren {
  /** Callback function for when the user dismisses the banner.
   * Is called regardless of the value of `autoDismiss` */
  readonly onDismiss?: () => void;
  /** When `autoDismiss` is true, clicking on the `x`
   * will remove the banner automatically. If it is set to false,
   * you must manage hidiing it yourself in response to the `onDismiss` event*/
  readonly autoDismiss?: boolean;
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
export default function DismissableBanner(props: DismissableBannerProps) {
  const {
    children,
    variant,
    iconVariant = "default",
    icon,
    autoDismiss = false,
    onDismiss,
    className,
  } = props;

  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <Banner
      className={className}
      variant={variant}
      beforeContent={icon && <MaterialIcon icon={icon} variant={iconVariant} />}
      afterContent={
        <BannerDismiss
          className="aje-banner__dismiss"
          aria-label={`dismiss ${variant}`}
          onClick={() => {
            autoDismiss && setVisible(false);
            onDismiss && onDismiss();
          }}
        >
          <MaterialIcon icon="close" />
        </BannerDismiss>
      }
    >
      {children}
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
