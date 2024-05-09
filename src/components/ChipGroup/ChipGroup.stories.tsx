import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ChipGroup, Chip } from ".";
import {
  InputControls,
  MultiSelectItemChildren,
  MultiSelectionArgTypes,
} from "../storybook";

export default {
  title: "Inputs/ChipGroup",
  component: ChipGroup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...InputControls,
    ...MultiSelectionArgTypes,
    children: {
      control: false,
    },
    disabledKeys: {
      control: "multi-select",
      options: ["news", "travel", "gaming", "shopping"],
      description: "Keys of the items that should be disabled",
    },
    onRemove: {
      description: "Function to call when a chip is removed",
    },
  },
} as Meta<typeof ChipGroup>;

type Story = StoryObj<typeof ChipGroup>;

export const Primary: Story = {
  args: {
    label: "Chip Group",
    children: [
      <Chip key="news">News</Chip>,
      <Chip key="travel">Travel</Chip>,
      <Chip key="gaming">Gaming</Chip>,
      <Chip key="shopping">Shopping</Chip>,
    ],
  },
};

export const RemoveChip: Story = {
  args: {
    ...Primary.args,
    onRemove: (key) => console.log(key),
  },
};

export const MultipleSelection: Story = {
  args: {
    ...Primary.args,
    selectionMode: "multiple",
    defaultSelectedKeys: ["news", "shopping"],
  },
};

export const DisabledChips: Story = {
  args: {
    ...Primary.args,
    disabledKeys: ["shopping"],
  },
};
