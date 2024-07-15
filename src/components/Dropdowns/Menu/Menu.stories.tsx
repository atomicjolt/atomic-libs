import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Menu } from ".";
import { MenuTrigger } from "./MenuTrigger";
import { Section } from "../../Collection";
import { Button } from "@components/Buttons/Button";
import { Popover } from "../../..";

export default {
  title: "Dropdowns/Menu/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClose: {
      description: "Callback for when the menu is closed.",
      table: {
        category: "Events",
      },
    },
    disabledKeys: {
      control: "multi-select",
      options: ["1", "2", "3"],
      description: "Keys of items that should be disabled.",
    },
    shouldFocusWrap: {
      control: "boolean",
      description:
        "Whether focus should wrap around the menu when using the keyboard.",
    },
  },
} as Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export const Primary: Story = {
  render: (args) => (
    <MenuTrigger>
      <Button>Open Menu</Button>
      <Popover>
        <Menu {...args}>{args.children}</Menu>
      </Popover>
    </MenuTrigger>
  ),
  args: {
    children: [
      <Menu.Item key="1" onAction={() => alert("Item 1")}>
        Item 1
      </Menu.Item>,
      <Menu.Item key="2" onAction={() => alert("Item 2")}>
        Item 2
      </Menu.Item>,
      <Menu.Item key="3" onAction={() => alert("Item 3")}>
        Item 3
      </Menu.Item>,
    ],
  },
};

export const WithSections: Story = {
  ...Primary,
  args: {
    children: [
      <Section key="section1" title="Section 1">
        <Menu.Item key="1" onAction={() => alert("Item 1")}>
          First Item in Section 1
        </Menu.Item>
        <Menu.Item key="2" onAction={() => alert("Item 2")}>
          Second Item in Section 1
        </Menu.Item>
      </Section>,
      <Section key="section2" title="Section 2">
        <Menu.Item key="3" onAction={() => alert("Item 3")}>
          First Item in Section 2
        </Menu.Item>
        <Menu.Item key="4" onAction={() => alert("Item 4")}>
          Second Item in Section 2
        </Menu.Item>
      </Section>,
    ],
  },
};
