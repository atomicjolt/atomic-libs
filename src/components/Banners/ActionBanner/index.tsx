import React from "react";
import Button from "../../Buttons/Button";
import { MaterialIcons } from "../../../types";

type ActionBannerVariants = "upgrade" | (string & {});

export interface ActionBannerProps {
  /** `aje-banner--${className}` pre-defined styles for:
   * - `upgrade`
   */
  readonly variant?: ActionBannerVariants;
  readonly icon?: MaterialIcons;
  readonly children: React.ReactNode;
  readonly buttonText: string;
  readonly onClick: () => void;
}

/** A view-spanning Banner with an associated `onClick` action */
export default function ActionBanner({
  variant = "upgrade",
  children,
  icon,
  buttonText,
  onClick,
}: ActionBannerProps) {
  return (
    <div className={`aje-banner--${variant}`}>
      {icon && (
        <i className="material-icons" aria-hidden>
          {icon}
        </i>
      )}
      <div className="aje-banner__main">{children}</div>
      <Button variant="inverted" onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
}

export interface UpgradeBannerProps {
  /** The ammount of time left on their trial */
  time: string;
  /** The name of the Atomic-App that this applies to */
  app: string;
  onClick: () => void;
}

/** A wrapper around `ActionBanner` */
export function UpgradeBanner({ time, app, onClick }: UpgradeBannerProps) {
  return (
    <ActionBanner
      icon="new_releases"
      variant="upgrade"
      onClick={onClick}
      buttonText="Upgrade Now"
    >
      Your trial expires in {time}. Upgrade now to re-enable {app}.
    </ActionBanner>
  );
}
