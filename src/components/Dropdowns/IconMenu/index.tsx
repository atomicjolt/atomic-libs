import React, { useRef } from "react";
import { MenuTriggerProps, useMenuTriggerState } from "react-stately";
import { AriaMenuProps, Placement, useMenuTrigger } from "react-aria";
import IconButton from "../../Buttons/IconButton";
import { HasClassName, HasIcon } from "../../../types";
import Popover from "../../Utility/Popover";
import { Menu } from "../Menu";
import { ButtonVariants } from "../../Buttons/Buttons.types";

export type IconMenuProps<T> = AriaMenuProps<T> &
  MenuTriggerProps &
  HasClassName &
  HasIcon & {
    buttonVariant?: ButtonVariants;
    placement?: Placement;
  };

export default function IconMenu<T extends {}>(props: IconMenuProps<T>) {
  const state = useMenuTriggerState(props);
  const ref = useRef<HTMLButtonElement>(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>(
    { trigger: props.trigger },
    state,
    ref
  );

  const {
    icon,
    className,
    iconVariant,
    buttonVariant,
    placement = "bottom start",
  } = props;

  return (
    <>
      <IconButton
        icon={icon}
        iconVariant={iconVariant}
        variant={buttonVariant}
        ref={ref}
        className={className}
        {...menuTriggerProps}
      />
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement={placement}>
          <Menu {...props} {...menuProps} />
        </Popover>
      )}
    </>
  );
}
