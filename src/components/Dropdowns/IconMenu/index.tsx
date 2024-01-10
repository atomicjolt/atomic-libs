import React, { useImperativeHandle, useRef } from "react";
import {
  MenuTriggerProps,
  useMenuTriggerState,
  useTreeState,
} from "react-stately";
import cn from "classnames";
import IconButton from "../../Buttons/IconButton";
import { useIds } from "../../../hooks";
import {
  CanHavIcon,
  HasChildren,
  HasClassName,
  HasIcon,
  MaterialIconVariants,
} from "../../../types";
import Popover, { PopoverWrapper } from "../../Utility/Popover";
import MaterialIcon from "../../Icons/MaterialIcon";
import { useDropdown } from "../../../hooks/useDropdown";
import {
  IconMenuDropdown,
  IconMenuOption,
  IconMenuWrapper,
} from "./IconMenu.styles";
import { PopoverPosition } from "../../Utility/Popover/Popover.types";
import { ButtonVariants } from "../../Buttons/Buttons.types";
import {
  AriaButtonOptions,
  AriaMenuProps,
  useButton,
  useMenu,
  useMenuItem,
  useMenuSection,
  useMenuTrigger,
  useSeparator,
} from "react-aria";

interface IconMenuProps<T> extends AriaMenuProps<T>, MenuTriggerProps {
  label?: string;
}

export default function IconMenu<T extends object>(props: IconMenuProps<T>) {
  const state = useMenuTriggerState(props);
  const ref = useRef<HTMLButtonElement>(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);

  return (
    <>
      {/* <Button {...menuTriggerProps} ref={ref} /> */}
      <IconButton
        icon="more_vert"
        aria-label="more"
        {...menuTriggerProps}
        ref={ref}
      />
      {state.isOpen && <Menu {...props} {...menuProps} />}
    </>
  );
}

function Menu<T extends object>(props: AriaMenuProps<T>) {
  const state = useTreeState(props);
  const ref = useRef<HTMLUListElement>(null);
  const { menuProps } = useMenu(props, state, ref);

  return (
    <ul {...menuProps} ref={ref}>
      {[...state.collection].map((item) =>
        item.type === "section" ? (
          <MenuSection key={item.key} section={item} state={state} />
        ) : (
          <MenuItem key={item.key} item={item} state={state} />
        )
      )}
    </ul>
  );
}

function MenuSection({ section, state }) {
  let { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  let { separatorProps } = useSeparator({
    elementType: "li",
  });

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <li
          {...separatorProps}
          style={{
            borderTop: "1px solid gray",
            margin: "2px 5px",
          }}
        />
      )}
      <li {...itemProps}>
        {section.rendered && (
          <span
            {...headingProps}
            style={{
              fontWeight: "bold",
              fontSize: "1.1em",
              padding: "2px 5px",
            }}
          >
            {section.rendered}
          </span>
        )}
        <ul
          {...groupProps}
          style={{
            padding: 0,
            listStyle: "none",
          }}
        >
          {[...section.childNodes].map((node) => (
            <MenuItem key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
}

function MenuItem({ item, state }) {
  // Get props for the menu item element
  let ref = useRef<HTMLLIElement>(null);
  let { menuItemProps, isSelected } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  return (
    <li {...menuItemProps} ref={ref}>
      {item.rendered}
      {isSelected && <span aria-hidden="true">✅</span>}
    </li>
  );
}

// interface IconMenuItemProps extends HasChildren, CanHavIcon {
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
// }

// function IconMenuItem(props: IconMenuItemProps) {
//   const { children, icon, iconVariant, onClick } = props;
//   return (
//     <IconMenuOption className="aje-menu__option" onClick={onClick}>
//       {icon && <MaterialIcon icon={icon} variant={iconVariant} />}
//       {children}
//     </IconMenuOption>
//   );
// }

// IconMenuItem.displayName = "IconMenu.Item";
// IconMenu.Item = IconMenuItem;

// export default IconMenu;
