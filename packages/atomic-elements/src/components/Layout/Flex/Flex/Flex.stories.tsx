import { Meta, StoryObj } from "@storybook/react";
import { Flex } from ".";
import { FlexItem } from "../FlexItem";

export default {
  title: "Layouts/Flex/Flex",
  component: Flex,
  argTypes: {
    children: {
      control: false,
    },
    as: {
      control: false,
    },
    direction: {
      control: "select",
      options: ["row", "column"],
    },
    alignContent: {
      control: "select",
      options: [
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
        "start",
        "end",
        "baseline",
      ],
    },
    alignItems: {
      control: "select",
      options: [
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "baseline",
        "start",
        "end",
        "self-start",
        "self-end",
      ],
    },
    justifyContent: {
      control: "select",
      options: [
        "stretch",
        "center",
        "flex-start",
        "flex-end",
        "space-between",
        "space-around",
        "space-evenly",
        "start",
        "end",
        "baseline",
      ],
    },
    wrap: {
      control: "select",
      options: ["wrap", "nowrap", "wrap-reverse"],
    },
    gap: {
      control: "number",
    },
    rowGap: {
      control: "number",
    },
    columnGap: {
      control: "number",
    },
  },
} as Meta<typeof Flex>;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    children: [
      <FlexItem
        grow={1}
        basis={200}
        style={{ backgroundColor: "powderblue", height: "200px" }}
      />,
      <FlexItem
        basis={200}
        style={{ backgroundColor: "rebeccapurple", height: "200px" }}
      />,
      <FlexItem
        basis={200}
        style={{ backgroundColor: "goldenrod", height: "200px" }}
      />,
    ],
  },
};

export const Grid: Story = {
  args: {
    direction: "row",
    gap: 16,
    wrap: true,
    children: [
      <FlexItem
        basis={200}
        style={{ backgroundColor: "powderblue", height: "200px" }}
      />,
      <FlexItem
        basis={200}
        style={{ backgroundColor: "rebeccapurple", height: "200px" }}
      />,
      <FlexItem
        basis={200}
        style={{ backgroundColor: "goldenrod", height: "200px" }}
      />,
      <FlexItem
        basis={200}
        style={{ backgroundColor: "powderblue", height: "200px" }}
      />,
      <FlexItem
        basis={200}
        style={{ backgroundColor: "rebeccapurple", height: "200px" }}
      />,
      <FlexItem
        basis={200}
        style={{ backgroundColor: "goldenrod", height: "200px" }}
      />,
      <FlexItem
        basis={200}
        style={{ backgroundColor: "powderblue", height: "200px" }}
      />,
      <FlexItem
        basis={200}
        style={{ backgroundColor: "rebeccapurple", height: "200px" }}
      />,
      <FlexItem
        basis={200}
        style={{ backgroundColor: "goldenrod", height: "200px" }}
      />,
      <FlexItem
        basis={200}
        style={{ backgroundColor: "powderblue", height: "200px" }}
      />,
      <FlexItem
        basis={200}
        style={{ backgroundColor: "rebeccapurple", height: "200px" }}
      />,
      <FlexItem
        basis={200}
        style={{ backgroundColor: "goldenrod", height: "200px" }}
      />,
    ],
  },
};
