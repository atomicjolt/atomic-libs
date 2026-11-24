import { Meta, StoryObj } from "@storybook/react-vite";
import { ToggleSwitch } from ".";
import { toggle } from "@styles/theme/component";

const meta: Meta<typeof ToggleSwitch> = {
  title: "Inputs/Choose State/ToggleSwitch",
  component: ToggleSwitch,
  parameters: {
    layout: "centered",
    cssprops: { toggle },
  },
  argTypes: {
    isLoading: {
      control: "boolean",
      table: {
        category: "State",
      },
    },
    loadingLabel: {
      control: "text",
      table: {
        category: "State",
      },
    },
    children: {
      control: "text",
      description: "Label rendered next to the switch",
    },
    size: {
      // The switch has a fixed size; `size` has no visible effect.
      table: { disable: true },
    },
    onChange: {
      control: false,
      description:
        "Called with the new selected state when the switch is toggled",
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

export const Selected: Story = {
  args: {
    ...Primary.args,
    defaultSelected: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    isDisabled: true,
  },
};

export const ChildrenOnRight: Story = {
  args: {
    ...Primary.args,
    childrenPosition: "right",
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading",
  },
};
