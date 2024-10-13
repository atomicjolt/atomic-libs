import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputControls } from "@sb/helpers";
import { MultiSelectField } from ".";
import { Item } from "../../Collection";
import { getCssProps } from "@sb/cssprops";

export default {
  title: "Dropdowns/Selection/MultiSelect",
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
    label: "Multiselect Label",
    children: [
      <Item key="val1">Option 1</Item>,
      <Item key="val2">Option 2</Item>,
      <Item key="val3">Option 3</Item>,
    ],
  },
};

export const Floating: Story = {
  args: {
    ...Default.args,
    variant: "floating",
  },
};
