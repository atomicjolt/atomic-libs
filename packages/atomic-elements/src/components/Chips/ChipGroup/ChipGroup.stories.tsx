import { Meta, StoryObj } from "@storybook/react";
import { ChipGroup } from ".";
import { InputControls, MultiSelectionArgTypes } from "@sb/helpers";
import { getCssProps } from "@sb/cssprops";
import { Chip } from "../Chip";
import { fn } from "@storybook/test";

export default {
  title: "Chips/ChipGroup",
  component: ChipGroup,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("ChipGroup"),
  },
  argTypes: {
    ...InputControls,
    ...MultiSelectionArgTypes,
    children: {
      control: false,
    },
    onRemove: {
      description: "Function to call when a chip is removed",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof ChipGroup>;

type Story = StoryObj<typeof ChipGroup>;

export const Primary: Story = {
  args: {
    label: "Chip Group",
    children: [
      <Chip id="news">News</Chip>,
      <Chip id="travel">Travel</Chip>,
      <Chip id="gaming">Gaming</Chip>,
      <Chip id="shopping">Shopping</Chip>,
    ],
  },
};

export const RemoveChip: Story = {
  args: {
    ...Primary.args,
    onRemove: fn(),
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
