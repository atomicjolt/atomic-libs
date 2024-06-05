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
          <IconMenu.Item href="https://www.google.com">Google</IconMenu.Item>
          <IconMenu.Item href="/somewhere">Internal</IconMenu.Item>
          <IconMenu.Item>Twitter</IconMenu.Item>
        </IconMenu>
        <br />
        <br />
        <Link href="https://www.google.com">External</Link>
        <br />
        <Link href="/somewhere">Internal</Link>
        <br />
        <br />
        <Button href="https://www.google.com" as="a">
          External
        </Button>
        <br />
        <br />
        <Button href="/somewhere" as="a">
          Internal
        </Button>

        <IconButton
          icon="add"
          aria-label="Add"
          as="a"
          href="https://www.google.com"
        />
      </RouterProvider>
    </div>
  );
}
