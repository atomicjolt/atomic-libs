import React from "react";
import "../../general.scss";
import "./styles.scss";
import Button from "../../Buttons/Button";
import { MaterialIcon } from "../../../types";

export interface Props {
  /** `aj-banner--${className}` */
  readonly className: string;
  readonly icon?: MaterialIcon;
  readonly children: React.ReactNode;
  readonly buttonText: string;
  readonly onClick: () => void;
}

/** A view-spanning Banner with an associated `onClick` action */
export default function ActionBanner({
  className,
  children,
  icon,
  buttonText,
  onClick,
}: Props) {
  return (
    <div className={`aj-banner--${className}`}>
      {icon && (
        <i className="material-icons" aria-hidden>
          {icon}
        </i>
      )}
      <div className="aj-banner__main">{children}</div>
      <Button className="inverted" onClick={onClick}>
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

export function UpgradeBanner({ time, app, onClick }: UpgradeBannerProps) {
  return (
    <ActionBanner
      icon="new_releases"
      className="upgrade"
      onClick={onClick}
      buttonText="Upgrade Now"
    >
      Your trial expires in {time}. Upgrade now to re-enable Atomic {app}.
    </ActionBanner>
  );
}
