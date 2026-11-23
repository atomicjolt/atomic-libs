import { Meta, StoryObj } from "@storybook/react-vite";
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
    style: { fontSize: "25px" },
    children: "Hello, World!",
  },
};
