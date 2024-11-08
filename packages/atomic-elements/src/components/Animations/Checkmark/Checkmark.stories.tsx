import { Meta, StoryObj } from "@storybook/react";
import { Checkmark } from ".";
import { RenderPropsArgTypes } from "@sb/helpers";
import { getCssProps } from "@sb/cssprops";

export default {
  title: "Animations/Checkmark",
  component: Checkmark,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Animations"),
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
