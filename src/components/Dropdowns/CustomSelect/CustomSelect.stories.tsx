import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InputControls } from "../../storybook";
import { CustomSelect } from ".";
import { Item, Section } from "../../Collection";

const meta: Meta<typeof CustomSelect> = {
  title: "Dropdowns/Selection/CustomSelect",
  component: CustomSelect,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...InputControls,
    selectedKey: {
      control: "select",
      description:
        "Control the value of the selected key in a controlled component",
      options: ["val1", "val2", "val3", null],
    },
    defaultSelectedKey: {
      control: "false",
      description:
        "Control the value of the selected key in an uncontrolled component",
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
};

export default meta;

type Story = StoryObj<typeof CustomSelect>;

export const Primary: Story = {
  args: {
    size: "medium",
    menuSize: "medium",
    variant: "default",
    label: "Custom Select Label",
    children: [
      <Item key="val1">Item 1</Item>,
      <Item key="val2">Item 2</Item>,
      <Item key="val3">Item 3</Item>,
    ],
  },
};

export const WithSections: Story = {
  args: {
    ...Primary.args,
    children: [
      <Item key="val1">Item 1</Item>,
      <Item key="val2">Item 2</Item>,
      <Item key="val3">Item 3</Item>,
      <Section title="Section Title">
        <Item key="val4">Item 4</Item>
        <Item key="val5">Item 5</Item>
      </Section>,
    ],
  },
};

export const Floating: Story = {
  args: {
    ...Primary.args,
    defaultSelectedKey: "undefined",
    variant: "floating",
  },
};

export const Searchable: Story = {
  args: {
    ...Primary.args,
    isSearchable: true,
    searchPlaceholder: "Search",
  },
};
