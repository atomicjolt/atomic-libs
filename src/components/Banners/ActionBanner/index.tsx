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
  readonly onClick: () => void;
}

/** A view-spanning Banner with an associated `onClick` action */
export default function ActionBanner({
  className,
  children,
  icon,
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
        Upgrade Now
      </Button>
    </div>
  );
}

export interface UpgradeBannerProps {
  time: string;
  app: string;
  onClick: () => void;
}

export function UpgradeBanner({ time, app, onClick }: UpgradeBannerProps) {
  return (
    <ActionBanner icon="new_releases" className="upgrade" onClick={onClick}>
      Your trial expires in {time}. Upgrade now to re-enable Atomic {app}.
    </ActionBanner>
  );
}
