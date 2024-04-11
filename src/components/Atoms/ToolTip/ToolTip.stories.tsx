import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ToolTip } from ".";

const meta: Meta<typeof ToolTip> = {
  title: "Atoms/ToolTip",
  component: ToolTip,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    children: {
      control: false,
    },
    delay: {
      control: "number",
      description: "Delay in milliseconds before the tooltip appears",
    },
    closeDelay: {
      control: "number",
      description: "Delay in milliseconds before the tooltip disappears",
    },
    defaultOpen: {
      control: "boolean",
      description: "Whether the tooltip should be open by default",
    },
    isDisabled: {
      control: "boolean",
      description: "Whether the tooltip should be disabled",
    },
    tooltip: {
      control: "text",
      description: "The content of the tooltip",
    },
    isOpen: {
      control: "boolean",
      description: "Control the open state of the tooltip manually",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Callback for when the tooltip open state changes",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToolTip>;

export const Primary: Story = {
  args: {
    children: <button>Hover Me</button>,
    tooltip: "Here's the tooltip",
    className: "",
    delay: 0,
  },
};

export const DefaultOpen: Story = {
  args: {
    ...Primary.args,
    defaultOpen: true,
  },
};
