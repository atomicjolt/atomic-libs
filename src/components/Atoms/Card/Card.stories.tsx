import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";
import { ExtendedSize } from "../../../types";
import { MaterialIcon } from "../../Icons/MaterialIcon";

export default {
  title: "Layouts/Card",
  component: Card,
  subcomponents: {
    "Card.Title": Card.Title,
    "Card.Panel": Card.Panel,
    "Card.Columns": Card.Columns,
  },
} as Meta<typeof Card>;

type Args = React.ComponentProps<typeof Card> & {
  column1Size: ExtendedSize;
  column2Size: ExtendedSize;
};

type Story = StoryObj<Args>;

export const Primary: Story = {
  args: {
    children: [
      <Card.Title>Card Title</Card.Title>,
      <Card.Panel>Here is some content within a panel</Card.Panel>,
    ],
  },
};

export const WithColumns: Story = {
  render: (args) => {
    const { column1Size, column2Size, ...rest } = args;
    return (
      <Card {...rest}>
        <Card.Title>Card Title</Card.Title>
        <Card.Columns>
          <Card.Panel size={column1Size}>Column 1</Card.Panel>
          <Card.Panel size={column2Size}>Column 2</Card.Panel>
        </Card.Columns>
      </Card>
    );
  },
  argTypes: {
    column1Size: {
      name: "Column 1 Size",
      control: "select",
      options: ["small", "medium", "large", "full", "auto"],
    },
    column2Size: {
      name: "Column 2 Size",
      control: "select",
      options: ["small", "medium", "large", "full", "auto"],
    },
  },
};
