import { Meta, StoryObj } from "@storybook/react";
import { ToggleSwitch } from ".";
import { getCssProps } from "@sb/cssprops";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Inputs/Choose State/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Toggle"),
  },
  argTypes: {
    isLoading: {
      control: "boolean",
      table: {
        category: "Field State",
      },
    },
    loadingLabel: {
      control: "text",
      table: {
        category: "Field State",
      },
    },
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

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading",
  },
};
