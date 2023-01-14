import React, { useState } from "react";
import cn from "classnames";
import { HasClassName, MaterialIcons } from "../../../types";
import { Banner, BannerDismiss, BannerMain } from "../Banners.styles";
import MaterialIcon from "../../Utility/MaterialIcon";

interface SharedProps extends HasClassName {
  /** Content to render in the banner */
  readonly children: React.ReactNode;
  /** Callback function for when the user dismisses the banner */
  readonly onDismiss?: () => void;
  /** When `autoDismiss` is true, clicking on the `x`
   * will remove the banner automatically. If it is set to false,
   * you must manage hidiing it yourself. */
  readonly autoDismiss?: boolean;
}

export interface DismissableBannerProps extends SharedProps {
  /** The variant of banner to be displayed.
   * Gets added to the top-level classname
   * as: `aje-banner--${type}`. The component
   * comes shipped with styles for these types:
   * - `error`
   * - `warning`
   * - `info` */
  readonly variant?: "error" | "warning" | "info" | (string & {});
  /** Name of material icon to be displayed */
  readonly icon?: MaterialIcons;
}

/** A Banner that the user can dismiss by clicking the "x" on the right
 *
 * **NOTE**: Both the error and warning banners have conveneience wrappers: `ErrorBanner` and `WarningBanner`
 */
export default function DismissableBanner(props: DismissableBannerProps) {
  const {
    children,
    variant,
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
    <Banner className={cn(`aje-banner--${variant}`, className)}>
      {icon && <MaterialIcon icon={icon} />}
      <BannerMain className="aje-banner__main">{children}</BannerMain>
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
