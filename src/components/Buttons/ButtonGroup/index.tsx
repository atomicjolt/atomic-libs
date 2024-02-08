import React from "react";
import { BaseProps, HasVariant } from "../../../types";
import { ButtonVariants } from "../Buttons.types";
import classNames from "classnames";
import { ButtonGroupWrapper } from "./ButtonGroup.styles";

export interface SharedProps extends HasVariant<ButtonVariants> {
  isDisabled?: boolean;
}

export interface ButtonGroupChildProps extends SharedProps {
  buttonVariant?: ButtonVariants;
}

export type ButtonGroupChild = React.ReactElement<ButtonGroupChildProps>;

export interface ButtonGroupProps extends SharedProps, BaseProps {
  /** Configure the gap between each button */
  gap?: number;
  /** When true, the gap will be completly removed and
   * the buttons will be grouped into a single visual element.
   * Works best when `variant` is set to `secondary` or `border` */
  isMerged?: boolean;
  children: ButtonGroupChild | ButtonGroupChild[];
  /** Configure the direction of the buttons flow. */
  direction?: "row" | "column";
}

/** Component used to logically and visually group a set of buttons together */
export function ButtonGroup(props: ButtonGroupProps) {
  const {
    children,
    isMerged,
    className,
    id,
    size,
    gap,
    direction = "row",
    ...overrides
  } = props;

  const mergedPropsChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      ...overrides,
      buttonVariant: props.variant,
      ...child.props,
    });
  });

  return (
    <ButtonGroupWrapper
      role="group"
      id={id}
      className={classNames("aje-btn-group", className, {
        "is-merged": isMerged,
        "is-column": direction === "column",
        "is-row": direction === "row",
      })}
      gap={gap}
    >
      {mergedPropsChildren}
    </ButtonGroupWrapper>
  );
}
