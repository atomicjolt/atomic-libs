import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import IconMenu from ".";
import { PlacementArgType } from "@sb/helpers";
import { MaterialIcon, Section } from "../../";

const meta: Meta<typeof IconMenu> = {
  title: "Dropdowns/IconMenu",
  component: IconMenu,
  parameters: {
    layout: "centered",
  },
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
    disabledKeys: {
      control: "multi-select",
      options: ["item1", "item2", "item3"],
      description: "Keys of items that should be disabled.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconMenu>;

export const Primary: Story = {
  args: {
    icon: "more_vert",
    children: [
      <IconMenu.Item key="item1" onAction={() => alert("Item 1")}>
        Item 1
      </IconMenu.Item>,
      <IconMenu.Item key="item2" onAction={() => alert("Item 2")}>
        Item 2
      </IconMenu.Item>,
      <IconMenu.Item key="item3" onAction={() => alert("Item 3")}>
        Item 3
      </IconMenu.Item>,
    ],
  },
};

export const WithSections: Story = {
  args: {
    ...Primary.args,
    children: [
      <IconMenu.Item key="item1">Item 1</IconMenu.Item>,
      <IconMenu.Item key="item2">Item 2</IconMenu.Item>,
      <Section>
        <IconMenu.Item key="item3">Item 3</IconMenu.Item>
        <IconMenu.Item key="item4">Item 4</IconMenu.Item>
      </Section>,
    ],
  },
};

export const WithIcons: Story = {
  args: {
    ...Primary.args,
    children: [
      <IconMenu.Item key="item1">
        <MaterialIcon icon="edit" />
        Edit
      </IconMenu.Item>,
      <IconMenu.Item key="item2">
        <MaterialIcon icon="delete" />
        Delete
      </IconMenu.Item>,
      <IconMenu.Item key="item3">
        <MaterialIcon icon="archive" />
        Archive
      </IconMenu.Item>,
    ],
  },
};

export const DisabledItems: Story = {
  args: {
    ...Primary.args,
    disabledKeys: ["item2"],
  },
};
