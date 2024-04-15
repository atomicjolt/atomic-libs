import React from "react";
import { HasVariant } from "../../../types";
import { ButtonVariants } from "../Buttons.types";
import { Group, GroupProps } from "../../Layout/Group";

export interface SharedProps extends HasVariant<ButtonVariants> {
  isDisabled?: boolean;
}

export interface ButtonGroupChildProps extends SharedProps {
  buttonVariant?: ButtonVariants;
}

export type ButtonGroupChild = React.ReactElement<ButtonGroupChildProps>;

export interface ButtonGroupProps
  extends SharedProps,
    Omit<GroupProps, "children"> {
  children: ButtonGroupChild | ButtonGroupChild[];
}

/** Wrapper around the  [Group Component](/docs/layouts-group--overview)
 * Used to group several buttons / icon buttons / icon menus together into a visual & logical group.
 *
 * In addition to the normal behavior of the Group component, this component also passes down several
 * of it's props to it's children as defaults.
 */
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
    <Group
      isMerged={isMerged}
      className={className}
      id={id}
      size={size}
      gap={gap}
      direction={direction}
    >
      {mergedPropsChildren}
    </Group>
  );
}
