import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ToolTip, { ToolTipProps } from ".";
import Button from "../../Buttons/Button";

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
    tip: {
      control: "text",
    },
    negotiatePosition: {
      control: false,
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToolTip>;

export const Primary: Story = {
  args: {
    children: <Button>Hover Over Me</Button>,
    tip: "Here's the tooltip",
    className: "",
    position: "top",
    show: false,
  },
};
