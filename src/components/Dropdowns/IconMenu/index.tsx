import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import IconButton from "../../Buttons/IconButton";
import { useBool, useClickOutside, useIds } from "../../../hooks";
import { CanHavIcon, HasChildren, HasClassName, HasIcon } from "../../../types";
import Popover, {
  PopoverPosition,
  PopoverWrapper,
} from "../../Utility/Popover";
import MaterialIcon from "../../Utility/MaterialIcon";
import { useDropdown } from "../../../hooks/useDropdown";
import {
  IconMenuDropdown,
  IconMenuOption,
  IconMenuWrapper,
} from "./IconMenu.styles";

export interface IconMenuProps extends HasClassName, HasIcon, HasChildren {
  /** Must include a label. */
  label: string;
  /** Changes where the dropdown menu appears */
  position?: PopoverPosition;
  disabled?: boolean;
}

/**
 * Three Dot Menu
 *
 * https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html for accessibility implementation.
 * */
function IconMenu(props: IconMenuProps) {
  const {
    icon,
    iconVariant = "default",
    children,
    label = "More options",
    disabled = false,
    position = "bottom-left",
    className,
  } = props;
  const [buttonId, menuId] = useIds("IconMenu", ["button", "menu"]);
  const [ref, menuActive, toggleMenu] = useDropdown<HTMLDivElement>();

  return (
    <IconMenuWrapper className={cn("aje-menu", className)} ref={ref}>
      <IconButton
        icon={icon}
        iconVariant={iconVariant}
        aria-controls={menuId}
        aria-expanded={menuActive}
        aria-haspopup="menu"
        ariaLabel={label}
        disabled={disabled}
        onClick={toggleMenu}
      />
      <PopoverWrapper>
        <Popover show={menuActive} position={position}>
          <IconMenuDropdown
            className="aje-menu__dropdown"
            role="menu"
            id={menuId}
            aria-labelledby={buttonId}
            tabIndex={-1}
            onClick={toggleMenu}
          >
            {children}
          </IconMenuDropdown>
        </Popover>
      </PopoverWrapper>
    </IconMenuWrapper>
  );
}

interface IconMenuItemProps extends HasChildren, CanHavIcon {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function IconMenuItem(props: IconMenuItemProps) {
  const { children, icon, iconVariant, onClick } = props;
  return (
    <IconMenuOption className="aje-menu__option" onClick={onClick}>
      {icon && <MaterialIcon icon={icon} variant={iconVariant} />}
      {children}
    </IconMenuOption>
  );
}

IconMenuItem.displayName = "IconMenu.Item";
IconMenu.Item = IconMenuItem;

export default IconMenu;
