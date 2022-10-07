import React from "react";
import cn from "classnames";

import Button from "../../Buttons/Button";
import { HasClassName, MaterialIcons } from "../../../types";

type ActionBannerVariants = "upgrade" | (string & {});

export interface ActionBannerProps extends HasClassName {
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
export default function ActionBanner(props: ActionBannerProps) {
  const {
    variant = "upgrade",
    children,
    icon,
    buttonText,
    onClick,
    className,
  } = props;

  return (
    <div className={cn(`aje-banner--${variant}`, className)}>
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

export interface UpgradeBannerProps extends HasClassName {
  /** The ammount of time left on their trial */
  time: string;
  /** The name of the Atomic-App that this applies to */
  app: string;
  onClick: () => void;
}

/** A wrapper around `ActionBanner` */
export function UpgradeBanner(props: UpgradeBannerProps) {
  const { time, app, onClick, className } = props;
  return (
    <ActionBanner
      icon="new_releases"
      variant="upgrade"
      onClick={onClick}
      buttonText="Upgrade Now"
      className={className}
    >
      Your trial expires in {time}. Upgrade now to re-enable {app}.
    </ActionBanner>
  );
}
