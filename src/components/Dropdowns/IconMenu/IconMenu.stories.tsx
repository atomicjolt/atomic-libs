import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import IconMenu from ".";

const meta: Meta<typeof IconMenu> = {
  title: "Dropdowns/IconMenu",
  component: IconMenu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    buttonVariant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "error",
        "success",
        "inverted",
        "content",
      ],
    },
    iconVariant: {
      control: "select",
      options: ["default", "outlined", "round", "sharp", "two-tone"],
    },
    position: {
      control: "select",
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "bottom-right",
        "bottom-left",
        "top-right",
        "top-left",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconMenu>;

export const Primary: Story = {
  render: (args) => (
    <IconMenu {...args}>
      <IconMenu.Item icon="add_alert" onClick={() => {}}>
        Option 1
      </IconMenu.Item>
      <IconMenu.Item icon="info" onClick={() => {}}>
        Option 2
      </IconMenu.Item>
      <IconMenu.Item icon="alarm_on" onClick={() => {}}>
        Option 3
      </IconMenu.Item>
    </IconMenu>
  ),
  args: {
    icon: "more_vert",
    label: "Custom dropdown label",
    disabled: false,
    position: "bottom-left",
    iconVariant: "default",
  },
};
