import { Meta, StoryObj } from "@storybook/react";
import { FlexItem } from ".";
import { Flex } from "../Flex";

export default {
  title: "Layouts/Flex/FlexItem",
  component: FlexItem,
  argTypes: {
    as: {
      control: false,
    },
    align: {
      control: "select",
      options: [
        "auto",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "stretch",
      ],
    },
    grow: {
      control: "number",
    },
    shrink: {
      control: "number",
    },
    basis: {
      control: "number",
    },
    order: {
      control: "number",
    },
  },
} as Meta<typeof FlexItem>;

type Story = StoryObj<typeof FlexItem>;

export const Default: Story = {
  render: (args) => (
    <Flex>
      <FlexItem {...args}>
        <div style={{ backgroundColor: "red", height: "200px" }} />
      </FlexItem>
      <FlexItem basis={200}>
        <div style={{ backgroundColor: "blue", height: "200px" }} />
      </FlexItem>
      <FlexItem basis={200}>
        <div style={{ backgroundColor: "green", height: "200px" }} />
      </FlexItem>
    </Flex>
  ),
  args: {
    basis: 200,
  },
};
