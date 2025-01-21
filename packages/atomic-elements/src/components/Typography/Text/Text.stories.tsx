import { Meta, StoryObj } from "@storybook/react";
import { Text } from ".";
import {
  MarginArgTypes,
  RenderPropsArgTypes,
  TypographyArgTypes,
} from "@sb/helpers";
import { ScaleSteps } from "@styles/scale";

export default {
  title: "Typography/Text",
  component: Text,
  argTypes: {
    ...MarginArgTypes,
    ...RenderPropsArgTypes,
    ...TypographyArgTypes,
  },
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    as: "div",
    $size: "3",
    children: "The quick brown fox jumps over the lazy dog",
  },
};
