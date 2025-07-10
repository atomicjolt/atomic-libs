import { Meta, StoryObj } from "@storybook/react";
import { View } from ".";
import {
  BackgroundArgTypes,
  LayoutArgTypes,
  RenderPropsArgTypes,
} from "@sb/helpers";

export default {
  title: "Layouts/View",
  component: View,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...RenderPropsArgTypes,
    ...LayoutArgTypes,
    ...BackgroundArgTypes,
  },
} as Meta<typeof View>;

type Story = StoryObj<typeof View>;

export const Primary: Story = {
  args: {
    children: "Hello, World!",
  },
};
