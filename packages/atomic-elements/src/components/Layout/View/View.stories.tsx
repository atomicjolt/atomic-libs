import { Meta, StoryObj } from "@storybook/react";
import { View } from ".";
import {
  BackgroundArgTypes,
  BorderArgTypes,
  LayoutArgTypes,
  RenderPropsArgTypes,
} from "@sb/helpers";
import { Text } from "@components/Typography/Text";

export default {
  title: "Layouts/View",
  component: View,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...RenderPropsArgTypes,
    ...LayoutArgTypes,
    ...BorderArgTypes,
    ...BackgroundArgTypes,
  },
} as Meta<typeof View>;

type Story = StoryObj<typeof View>;

export const Primary: Story = {
  args: {
    children: <Text $size="4">Hello, World!</Text>,
  },
};

export const WithBorder: Story = {
  args: {
    ...Primary.args,
    $borderWidth: "1",
    $borderStyle: "solid",
    $borderColor: "neutral400",
    $radius: "3",
    $p: "4",
    $bg: "neutral200",
  },
};
