import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { MenuTrigger } from "../../Dropdowns/Menu/MenuTrigger";
import { Popover } from ".";
import { Menu } from "../../Dropdowns/Menu";
import { Button } from "../../Buttons/Button";
import { PlacementArgType } from "../../storybook";

export default {
  title: "Overlays/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    offset: {
      control: "number",
      description:
        "The distance in pixels between the popover and the target element.",
      defaultValue: 4,
    },
    isOpen: {
      control: "boolean",
      description:
        "Whether the popover is open or not. Not needed when paired with a Trigger Wrapper",
      defaultValue: false,
    },
    defaultOpen: {
      control: "boolean",
      description:
        "Whether the popover is open by default. Not needed when paired with a Trigger Wrapper",
      defaultValue: false,
    },
    ...PlacementArgType,
  },
} as Meta<typeof Popover>;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: (args) => {
    return (
      <MenuTrigger>
        <Button>Press Me</Button>
        <Popover {...args}>
          <Menu>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
          </Menu>
        </Popover>
      </MenuTrigger>
    );
  },
  args: {},
};
