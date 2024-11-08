import React from "react";
import { GroupWrapper } from "./Group.styles";
import { BaseProps, HasChildren } from "../../../types";
import classNames from "classnames";

export interface GroupProps extends HasChildren, BaseProps {
  /** Configure the gap between each child */
  gap?: number;
  /** When true, the gap will be completly removed and
   * children will be grouped into a single visual element. */
  isMerged?: boolean;
  /** Configure the flex axis of the group */
  direction?: "row" | "column";
}

/** Component used to logically and visually group a set of components together */
export function Group(props: GroupProps) {
  const { children, isMerged, className, id, gap, direction = "row" } = props;

  return (
    <GroupWrapper
      role="group"
      id={id}
      className={classNames("aje-group", className, {
        "is-merged": isMerged,
        "is-column": direction === "column",
        "is-row": direction === "row",
      })}
      gap={gap}
    >
      {children}
    </GroupWrapper>
  );
}
