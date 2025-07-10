import { Meta, StoryObj } from "@storybook/react";
import { InputControls } from "@sb/helpers";
import { MultiSelectField } from ".";
import { getCssProps } from "@sb/cssprops";
import { FieldLabel } from "../Field/FieldLabel";
import { FieldMessage } from "../Field/FieldMessage";
import { Popover } from "@components/Overlays/Popover";
import { ListBox } from "@components/Dropdowns/ListBox";
import { FieldErrorMessage } from "../Field/FieldError";
import { Item } from "@components/Collection";
import { Button } from "@components/Buttons/Button";
import { MaterialIcon } from "@components/Icons/MaterialIcon";

export default {
  title: "Fields/MultiSelectField",
  component: MultiSelectField,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Dropdown", "Listbox"),
  },
  argTypes: {
    ...InputControls,
    selectedKeys: {
      control: "multi-select",
      description:
        "Control the value of the selected keys in a controlled component",
      options: ["val1", "val2", "val3"],
    },
    defaultSelectedKeys: {
      control: false,
      description:
        "Control the value of the selected keys in an uncontrolled component",
    },
    children: {
      control: false,
    },
    isOpen: {
      control: "boolean",
      description: "Control the open state of the menu",
    },
    defaultOpen: {
      control: "boolean",
      description: "Control the inital state of the menu",
    },
    onOpenChange: {
      control: false,
      action: "onOpenChange",
      description: "Callback for when the menu is opened or closed",
      table: {
        category: "Events",
      },
    },
    onSelectionChange: {
      action: "onSelectionChange",
      control: false,
      description: "Callback for when the selection changes",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof MultiSelectField>;

type Story = StoryObj<typeof MultiSelectField>;

export const Default: Story = {
  args: {
    children: [
      <FieldLabel key="label">Select an item</FieldLabel>,
      <FieldMessage key="message">Choose an item from the list</FieldMessage>,
      <Button key="button" variant="dropdown">
        Select Items
        <MaterialIcon icon="arrow_drop_down" style={{ marginLeft: "auto" }} />
      </Button>,
      <Popover key="popover">
        <ListBox>
          <Item id="1">Item 1</Item>
          <Item id="2">Item 2</Item>
          <Item id="3">Item 3</Item>
        </ListBox>
      </Popover>,
      <FieldErrorMessage key="error">Something went wrong</FieldErrorMessage>,
    ],
  },
};
