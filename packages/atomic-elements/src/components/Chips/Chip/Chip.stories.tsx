import { Meta, StoryObj } from "@storybook/react";
import { Chip } from ".";
import { fn } from "@storybook/test";
import { PressableArgTypes } from "@sb/helpers";

export default {
  title: "Chips/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      type: "string",
    },
    variant: {
      control: "select",
      options: ["default", "warning", "success", "danger"],
    },
    onRemove: {
      description: "Function to call when the chip is removed",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof Chip>;

type Story = StoryObj<typeof Chip>;

export const Primary: Story = {
  args: {
    children: "Chip",
  },
};

export const Removable: Story = {
  args: {
    ...Primary.args,
    onRemove: fn(),
  },
};

export const Pressasble: Story = {
  args: {
    ...Primary.args,
    onPress: fn(),
  },
  argTypes: {
    ...PressableArgTypes,
  },
};
