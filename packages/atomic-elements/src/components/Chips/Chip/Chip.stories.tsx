import { Meta, StoryObj } from "@storybook/react-vite";
import { Chip } from ".";
import { fn } from "storybook/test";
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
    onAction: {
      table: {
        disable: true,
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

export const Warning: Story = {
  args: {
    ...Primary.args,
    variant: "warning",
  },
};

export const Success: Story = {
  args: {
    ...Primary.args,
    variant: "success",
  },
};

export const Danger: Story = {
  args: {
    ...Primary.args,
    variant: "danger",
  },
};

export const Disabled: Story = {
  args: {
    ...Removable.args,
    isDisabled: true,
  },
};

export const Pressable: Story = {
  args: {
    ...Primary.args,
    onPress: fn(),
  },
  argTypes: {
    ...PressableArgTypes,
  },
};
