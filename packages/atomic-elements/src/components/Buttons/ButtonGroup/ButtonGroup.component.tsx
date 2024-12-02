import React from "react";
import { Group, GroupProps } from "../../Layout/Group";
import { ButtonContext } from "../Button/Button.context";
import { ButtonProps } from "../Button/Button.component";
import { HasIcon } from "../../../types";

export interface ButtonGroupProps
  extends Omit<ButtonProps, "className" | "id">,
    HasIcon,
    Omit<GroupProps, "children" | "size"> {
  children: React.ReactNode;
}

/** Group a set of buttoons together & provide a common context to all buttons in the group
 *
 * @example
 * <ButtonGroup variant="border" isDisabled>
 *   <Button>Button 1</Button>
 *   <Button>Button 2</Button>
 * </ButtonGroup>
 */
export function ButtonGroup(props: ButtonGroupProps) {
  const {
    children,
    isMerged,
    className,
    id,
    gap,
    direction = "row",
    ...buttonProps
  } = props;

  return (
    <ButtonContext.Provider value={buttonProps}>
      <Group
        isMerged={isMerged}
        className={className}
        id={id}
        gap={gap}
        direction={direction}
      >
        {children}
      </Group>
    </ButtonContext.Provider>
  );
}
