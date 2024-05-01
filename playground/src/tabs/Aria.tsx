import React, { useState } from "react";
import {
  Button,
  CheckBox,
  ComboBox,
  CustomSelect,
  DateInput,
  DatePicker,
  IconMenu,
  Item,
  MaterialIcon,
  Menu,
  MenuTrigger,
  NumberInput,
  Popover,
  Radio,
  RadioGroup,
  SearchInput,
  TextAreaInput,
  TextInput,
  TimeInput,
} from "../elements";
import {
  FieldErrorMessage,
  FieldMessage,
  FieldInput,
  VirtualInput,
  FieldLabel,
  TextField,
} from "../../../src/components/Internal/Field";

export default function Aria() {
  return (
    <div>
      <MenuTrigger>
        <Button>
          Open Menu
          <MaterialIcon icon="arrow_drop_down" />
        </Button>
        <Popover placement="bottom left">
          <Menu>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Menu>
        </Popover>
      </MenuTrigger>

      <IconMenu>
        <IconMenu.Item onAction={() => alert("hi")}>Item 1</IconMenu.Item>
        <IconMenu.Item>Item 2</IconMenu.Item>
        <IconMenu.Item>Item 3</IconMenu.Item>
      </IconMenu>

      <CustomSelect label="label">
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </CustomSelect>
    </div>
  );
}
