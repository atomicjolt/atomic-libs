import React, { useState } from "react";
import { MaterialIcons } from "../../../types";

export interface Props {
  readonly children?: React.ReactNode;
  /** The type of banner to be displayed.
   * Gets added to the top-level classname
   * as: `aj-banner--${type}`. The component
   * comes shipped with styles for these types:
   * - `error`
   * - `warning` */
  readonly type: string;
  /** Name of material icon to be displayed */
  readonly icon?: MaterialIcons;
  /** Callback function for when the user dismisses the banner */
  readonly onDismiss?: () => void;
}

/** A Banner that the user can dismiss by clicking the "x" on the right
 *
 * **NOTE**: Both the error and warning banners have conveneience wrappers: `ErrorBanner` and `WarningBanner`
 */
export default function DismissableBanner({
  children,
  type,
  icon,
  onDismiss,
}: Props) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div className={`aj-banner--${type}`}>
      {icon && (
        <i className="material-icons" aria-hidden>
          {icon}
        </i>
      )}
      <div className="aj-banner__main">{children}</div>
      <button
        className="aj-banner__dismiss"
        aria-label={`dismiss ${type}`}
        onClick={() => {
          setVisible(false);
          onDismiss && onDismiss();
        }}
      >
        <i className="material-icons" aria-hidden>
          close
        </i>
      </button>
    </div>
  );
}

export interface BannerWrapperProps {
  /** Content to render in the banner */
  readonly children: React.ReactNode;
}

/** Conveneince Wrapper around `DismissableBanner` */
export function ErrorBanner({ children }: BannerWrapperProps) {
  return (
    <DismissableBanner type="error" icon="error">
      {children}
    </DismissableBanner>
  );
}

export function WarningBanner({ children }: BannerWrapperProps) {
  return (
    <DismissableBanner type="warning" icon="warning">
      {children}
    </DismissableBanner>
  );
}
