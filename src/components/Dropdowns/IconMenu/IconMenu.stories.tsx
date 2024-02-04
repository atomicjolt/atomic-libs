import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import IconMenu from ".";
import { PlacementArgType } from "../../storybook";
import { Item, Section } from "../../";

const meta: Meta<typeof IconMenu> = {
  title: "Dropdowns/IconMenu",
  component: IconMenu,
  parameters: {
    layout: "centered",
  },
  // TODO: fully fill out these args
  argTypes: {
    ...PlacementArgType,
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
    children: {
      control: false,
    },

    onAction: {
      description:
        "Callback for when an item is selected. The callback will receive the key of the selected item.",
      table: {
        category: "Events",
      },
    },
    onClose: {
      description: "Callback for when the menu is closed.",
      table: {
        category: "Events",
      },
    },
    onOpenChange: {
      description: "Callback for when the menu is opened or closed.",
      table: {
        category: "Events",
      },
    },
    isOpen: {
      control: "boolean",
      description: "Control the open state of the menu externally.",
    },
    defaultOpen: {
      control: "boolean",
      description: "Whether the menu is open by default.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconMenu>;

export const Primary: Story = {
  args: {
    icon: "more_vert",
    iconVariant: "default",
    children: [
      <Item key="item1">Item 1</Item>,
      <Item key="item2">Item 2</Item>,
      <Item key="item3">Item 3</Item>,
    ],
  },
};

export const WithSections: Story = {
  args: {
    ...Primary.args,
    children: [
      <Item key="item1">Item 1</Item>,
      <Item key="item2">Item 2</Item>,
      <Section>
        <Item key="item3">Item 3</Item>
        <Item key="item4">Item 4</Item>
      </Section>,
    ],
  },
};
