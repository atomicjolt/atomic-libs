import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  CheckBox,
  Chip,
  ChipGroup,
  ComboBox,
  CustomSelect,
  IconButton,
  IconMenu,
  Item,
  MaterialIcon,
  Menu,
  MenuTrigger,
  NumberInput,
  OverlayTrigger,
  Popover,
  SearchInput,
  TextAreaInput,
  TextInput,
  TimeInput,
  ToolTip,
  ToolTipTrigger,
} from "../elements";
import { Link } from "../../../src/components/Routing/Link";
import { RouterProvider } from "react-aria";

export default function Aria() {
  return (
    <div>
      <RouterProvider navigate={console.log}>
        <IconMenu icon="more_vert" aria-label="More options">
          <IconMenu.Item href="/somewhere">Google</IconMenu.Item>
          <IconMenu.Item>Facebook</IconMenu.Item>
          <IconMenu.Item>Twitter</IconMenu.Item>
        </IconMenu>

        <OverlayTrigger>
          <Button>Press ME</Button>
          <Popover>
            <Menu>
              <Menu.Item>Google</Menu.Item>
              <Menu.Item>Facebook</Menu.Item>
              <Menu.Item>Twitter</Menu.Item>
            </Menu>
          </Popover>
        </OverlayTrigger>
        <Link href="/somewhere">Google</Link>
      </RouterProvider>
    </div>
  );
}
