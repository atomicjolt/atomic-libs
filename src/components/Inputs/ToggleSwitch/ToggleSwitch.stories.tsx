import { Meta, StoryObj } from "@storybook/react";
import { ToggleSwitch } from ".";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Inputs/Choose State/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onChange: {
      control: false,
      table: {
        category: "Events",
      },
    },
    defaultSelected: {
      control: "boolean",
      description:
        "Whether the switch is checked by default for an uncontrolled component",
    },
    isSelected: {
      control: "boolean",
      description: "Whether the switch is checked for a controlled component",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Primary: Story = {
  args: {
    children: "Toggle switch",
  },
};
