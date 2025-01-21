import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { Strong } from ".";
import {
  ColorArgTypes,
  MarginArgTypes,
  RenderPropsArgTypes,
} from "@sb/helpers";

export default {
  title: "Typography/Strong",
  component: Strong,
  argTypes: {
    ...RenderPropsArgTypes,
    ...MarginArgTypes,
    ...ColorArgTypes,
  },
} as Meta<typeof Strong>;

type Story = StoryObj<typeof Strong>;

export const Primary: Story = {
  render: (args) => (
    <Text>
      The most important step a man can take; it's not the first one, is it?{" "}
      <Strong {...args}>{args.children}</Strong>
    </Text>
  ),
  args: {
    children: "It's the next one.",
  },
};
