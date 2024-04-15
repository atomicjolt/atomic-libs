import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ListBox } from ".";
import { Item, Section } from "../..";

const meta: Meta<typeof ListBox> = {
  title: "Dropdowns/ListBox",
  component: ListBox,
  argTypes: {
    children: {
      control: false,
    },
    selectionMode: {
      control: "select",
      options: ["single", "multiple", "none"],
      description: "Controls how many items can be selected at once.",
    },
    selectionBehavior: {
      control: "select",
      options: ["replace", "toggle"],
      description:
        "Controls how the selection changes in `selectionMode` is `multiple`. `replace` will replace the current selection with the new selection. `toggle` will add or remove the new selection from the current selection.",
    },
    defaultSelectedKeys: {
      control: "select",
      options: [["1"], ["1", "2"]],
      description: "Array of the selected keys for an uncontrolled component.",
    },
    selectedKeys: {
      control: "select",
      options: [["1"], ["1", "2"]],
      description: "Array of the selected keys for a controlled component.",
    },
    disabledKeys: {
      control: "select",
      options: [["1"], ["1", "2"]],
      description: "Array of the disabled keys.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ListBox>;

export const Primary: Story = {
  args: {
    selectionMode: "single",
    defaultSelectedKeys: ["1"],
    selectionBehavior: "toggle",
    children: [
      <Item key="1">Option 1</Item>,
      <Item key="2">Option 2</Item>,
      <Item key="3">Option 3</Item>,
    ],
  },
};

export const MultipleSelection: Story = {
  args: {
    ...Primary.args,
    selectionMode: "multiple",
    defaultSelectedKeys: ["1", "3"],
  },
};

export const WithSections: Story = {
  args: {
    ...Primary.args,
    children: [
      <Item key="1">Option 1</Item>,
      <Item key="2">Option 2</Item>,
      <Item key="3">Option 3</Item>,
      <Section title="Section Title">
        <Item key={4}>Option 4</Item>
        <Item key={5}>Option 5</Item>
      </Section>,
    ],
  },
};
