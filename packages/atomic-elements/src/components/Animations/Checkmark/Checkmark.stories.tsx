import { Meta, StoryObj } from "@storybook/react-vite";
import { Checkmark } from ".";
import { RenderPropsArgTypes } from "@sb/helpers";
import { animation } from "@styles/theme/component";

export default {
  title: "Animations/Checkmark",
  component: Checkmark,
  parameters: {
    layout: "centered",
    cssprops: { animation },
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
