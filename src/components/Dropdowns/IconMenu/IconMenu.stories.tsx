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
    placement: {
      ...PlacementArgType,
    },
    children: {
      control: false,
    },
    onAction: {
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconMenu>;

export const Primary: Story = {
  args: {
    icon: "more_vert",
    iconVariant: "default",
    onAction: (key: React.Key) => console.log(key),
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
