import { Meta, StoryObj } from "@storybook/react";
import { Checkmark } from ".";
import { RenderPropsArgTypes } from "@sb/helpers";

export default {
  title: "Animations/Checkmark",
  component: Checkmark,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...RenderPropsArgTypes,
  },
} as Meta<typeof Checkmark>;

type Story = StoryObj<typeof Checkmark>;

export const Primary: Story = {
  args: {
    size: "medium",
  },
};
