import { Meta, StoryObj } from "@storybook/react";
import { Em } from ".";
import { Text } from "../Text";
import {
  ColorArgTypes,
  MarginArgTypes,
  RenderPropsArgTypes,
} from "@sb/helpers";

export default {
  title: "Typography/Em",
  component: Em,
  argTypes: {
    ...RenderPropsArgTypes,
    ...MarginArgTypes,
    ...ColorArgTypes,
  },
} as Meta<typeof Em>;

type Story = StoryObj<typeof Em>;

export const Primary: Story = {
  render: (args) => (
    <Text>
      The most important step a man can take; it's not the first one, is it?{" "}
      <Em {...args}>{args.children}</Em>
    </Text>
  ),
  args: {
    children: "It's the next one.",
  },
};
