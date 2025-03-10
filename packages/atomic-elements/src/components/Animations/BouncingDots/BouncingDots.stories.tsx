import { Meta, StoryObj } from "@storybook/react";
import { BouncingDots } from ".";
import { RenderPropsArgTypes, AriaLabelArgTypes } from "@sb/helpers";
import { getCssProps } from "@sb/cssprops";

export default {
  title: "Animations/BouncingDots",
  component: BouncingDots,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Animations"),
  },
  argTypes: {
    ...RenderPropsArgTypes,
    ...AriaLabelArgTypes,
  },
} as Meta<typeof BouncingDots>;

type Story = StoryObj<typeof BouncingDots>;

export const Primary: Story = {
  args: {},
};
