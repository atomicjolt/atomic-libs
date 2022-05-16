import React, { useState, useEffect } from "react";
import IconButton from "../../Buttons/IconButton";
import "../../general.scss";
import "./styles.scss";

export interface Props {
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
export default function ThreeDotMenu({
  children,
  label = "More options",
  dropRight,
  disabled = false,
}: Props) {
  let dropDirection = dropRight ? " drop-right" : "";
  const [menuActive, setMenuActive] = useState(false);

  const handleOpen = () => {
    if (menuActive) {
      setMenuActive(false);
    } else {
      setMenuActive(true);
    }
  };

  useEffect(() => {
    const closeMenu = () => {
      if (!menuActive) return;
      setMenuActive(false);
    };

    window.addEventListener("click", closeMenu);

    return () => window.removeEventListener("click", closeMenu);
  }, [menuActive]);

  return (
    <div className="aj-menu">
      <IconButton
        icon="more_vert"
        ariaControls="menuID"
        ariaExpanded={menuActive}
        ariaHasPopup="menu"
        ariaLabel={label}
        disabled={disabled}
        btnID="comboID"
        onClick={handleOpen}
      />
      <div
        className={`aj-menu__dropdown${dropDirection}`}
        role="menu"
        id="menuID"
        aria-labelledby="comboID"
        tabIndex={-1}
      >
        <button className="aj-menu__option" id="op1">
          <i className="material-icons" aria-hidden>
            save_alt
          </i>
          Option 1
        </button>
        <button className="aj-menu__option" id="op2">
          {children}
        </button>
        <button className="aj-menu__option" id="op3">
          {children}
        </button>
      </div>
    </div>
  );
}
