import { Meta, StoryObj } from "@storybook/react";
import ToggleSwitch from ".";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Inputs/ToggleSwitch",
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
  },
};

export default meta;

type Story = StoryObj<typeof ToggleSwitch>;

export const Primary: Story = {
  args: {
    checked: false,
    label: "Toggle switch",
    disabled: false,
  },
};
