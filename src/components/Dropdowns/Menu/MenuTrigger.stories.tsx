import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Menu } from ".";
import { MenuTrigger } from "./MenuTrigger";
import Button from "../../Buttons/Button";
import IconButton from "../../Buttons/IconButton";
import MaterialIcon from "../../Icons/MaterialIcon";
import { Popover } from "../../Overlays/Popover";

export default {
  title: "Dropdowns/Menu/MenuTrigger",
  component: MenuTrigger,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Control the open state of the menu externally.",
    },
    defaultOpen: {
      control: "boolean",
      description: "Whether the menu is open by default.",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Callback for when the menu is opened or closed.",
      table: {
        category: "Events",
      },
    },
    trigger: {
      control: "select",
      options: ["press", "longPress"],
      description: "The trigger type for opening the menu.",
    },
  },
} as Meta<typeof MenuTrigger>;

type Story = StoryObj<typeof MenuTrigger>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children: [
      <Button key="button">
        Open Me
        <MaterialIcon icon="arrow_drop_down" />
      </Button>,
      <Popover placement="bottom left" key="popover">
        <Menu>
          <Menu.Item onAction={() => alert("Item 1")}>Item 1</Menu.Item>
          <Menu.Item onAction={() => alert("Item 2")}>Item 2</Menu.Item>
          <Menu.Item onAction={() => alert("Item 3")}>Item 3</Menu.Item>
        </Menu>
      </Popover>,
    ],
  },
};

export const IconButtonTrigger: Story = {
  args: {
    children: [
      <IconButton icon="arrow_drop_down" />,
      <Popover placement="bottom left" key="popover">
        <Menu>
          <Menu.Item onAction={() => alert("Item 1")}>Item 1</Menu.Item>
          <Menu.Item onAction={() => alert("Item 2")}>Item 2</Menu.Item>
          <Menu.Item onAction={() => alert("Item 3")}>Item 3</Menu.Item>
        </Menu>
      </Popover>,
    ],
  },
};
