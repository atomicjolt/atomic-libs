import React, { useState, useEffect, useRef } from "react";
import cn from "classnames";
import IconButton from "../../Buttons/IconButton";
import { useBool, useClickOutside, useIds } from "../../../hooks";
import { CanHaveIcon, HasChildren, MaterialIcons } from "../../../types";
import Popover, {
  PopoverPosition,
  PopoverWrapper,
} from "../../Utility/Popover";

export interface IconMenuProps {
  icon: MaterialIcons;
  children: React.ReactNode;
  /** Must include a label. */
  label: string;
  /** Changes where the dropdown menu appears */
  position: PopoverPosition;
  disabled?: boolean;
}

/**
 * Three Dot Menu
 *
 * https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html for accessibility implementation.
 * */
function IconMenu({
  children,
  icon = "more_vert",
  label = "More options",
  disabled = false,
  position,
}: IconMenuProps) {
  const [menuActive, toggleMenu] = useBool(false);

  const [buttonId, menuId] = useIds("iconmenu", ["menu"]);
  const ref = useRef(null);

  useClickOutside(
    ref,
    () => {
      if (menuActive) {
        toggleMenu();
      }
    },
    { enabled: menuActive }
  );

  return (
    <div className="aje-menu" ref={ref}>
      <IconButton
        icon={icon}
        ariaControls={menuId}
        ariaExpanded={menuActive}
        ariaHasPopup="menu"
        ariaLabel={label}
        disabled={disabled}
        onClick={toggleMenu}
      />
      <PopoverWrapper>
        <Popover show={menuActive} position={position}>
          <div
            className={"aje-menu__dropdown"}
            role="menu"
            id={menuId}
            aria-labelledby={buttonId}
            tabIndex={-1}
            onClick={toggleMenu}
          >
            {children}
          </div>
        </Popover>
      </PopoverWrapper>
    </div>
  );
}

type IconMenuItemProps = HasChildren &
  CanHaveIcon & {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  };

function IconMenuItem({ children, icon, onClick }: IconMenuItemProps) {
  // TODO: Are ids important for these?
  return (
    <button className="aje-menu__option" onClick={onClick}>
      {icon && (
        <i className="material-icons" aria-hidden>
          {icon}
        </i>
      )}
      {children}
    </button>
  );
}

IconMenuItem.displayName = "IconMenu.Item";
IconMenu.Item = IconMenuItem;

export default IconMenu;