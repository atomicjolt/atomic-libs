import { Meta, StoryObj } from "@storybook/react-vite";
import { BouncingDots } from ".";
import { RenderStylePropsArgTypes, AriaLabelArgTypes } from "@sb/helpers";
import { animation } from "@styles/theme/component";

export default {
  title: "Animations/BouncingDots",
  component: BouncingDots,
  parameters: {
    layout: "centered",
    cssprops: { animation },
  },
  argTypes: {
    ...RenderStylePropsArgTypes,
    ...AriaLabelArgTypes,
  },
} as Meta<typeof BouncingDots>;

type Story = StoryObj<typeof BouncingDots>;

export const Primary: Story = {
  args: {},
};
