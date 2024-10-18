import { Meta, StoryObj } from "@storybook/react";
import { PlacementArgType } from "@sb/helpers";
import { MenuTrigger } from "../../Dropdowns/Menu/MenuTrigger";
import { Popover } from ".";
import { Menu } from "../../Dropdowns/Menu";
import { Button } from "../../Buttons/Button";
import { Item } from "@components/Collection";

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
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Menu>
        </Popover>
      </MenuTrigger>
    );
  },
  args: {},
};
