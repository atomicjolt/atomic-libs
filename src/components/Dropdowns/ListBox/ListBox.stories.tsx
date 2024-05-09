import React from "react";
import { StoryObj, Meta } from "@storybook/react";
import { ListBox } from ".";
import { Item, Section } from "../..";
import {
  MultiSelectItemChildren,
  MultiSelectionArgTypes,
} from "../../storybook";

const meta: Meta<typeof ListBox> = {
  title: "Dropdowns/ListBox",
  component: ListBox,
  argTypes: {
    ...MultiSelectionArgTypes,
    children: {
      control: false,
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
    children: MultiSelectItemChildren,
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
      ...MultiSelectItemChildren,
      <Section title="Section Title">
        <Item key={4}>Option 4</Item>
        <Item key={5}>Option 5</Item>
      </Section>,
    ],
  },
};
