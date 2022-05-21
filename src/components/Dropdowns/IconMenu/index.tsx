import React, { useState, useEffect } from "react";
import cn from "classnames";
import IconButton from "../../Buttons/IconButton";
import "../../general.scss";
import "./styles.scss";
import { useBool, useClick, useIds } from "../../../hooks";
import { CanHaveIcon, HasChildren, MaterialIcons } from "../../../types";

export interface Props {
  icon: MaterialIcons;
  children: React.ReactNode;
  /** Must include a label. */
  label: string;
  /** For when the dropdown menu needs to expand to the right instead of the left. */
  dropRight?: boolean;
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
  dropRight,
  disabled = false,
}: Props) {
  const [menuActive, toggleMenu] = useBool(false);

  const [buttonId, menuId] = useIds("three-dot-menu", ["button", "menu"]);

  useClick(() => {
    if (!menuActive) return;
    toggleMenu();
  }, [menuActive]);

  return (
    <div className="aj-menu">
      <IconButton
        icon={icon}
        ariaControls={menuId}
        ariaExpanded={menuActive}
        ariaHasPopup="menu"
        ariaLabel={label}
        disabled={disabled}
        id={buttonId}
        onClick={toggleMenu}
      />
      <div
        className={cn("aj-menu__dropdown", { "drop-right": dropRight })}
        role="menu"
        id={menuId}
        aria-labelledby={buttonId}
        tabIndex={-1}
      >
        {children}
      </div>
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
    <button className="aj-menu__option" onClick={onClick}>
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
