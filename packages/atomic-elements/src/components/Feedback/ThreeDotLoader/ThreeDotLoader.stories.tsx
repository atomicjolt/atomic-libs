import { Meta, StoryObj } from "@storybook/react-vite";
import { loader } from "@styles/theme/component";
import { AriaLabelArgTypes } from "@sb/helpers";
import { ThreeDotLoader } from ".";

const meta: Meta<typeof ThreeDotLoader> = {
  title: "Feedback/ThreeDotLoader",
  component: ThreeDotLoader,
  parameters: {
    cssprops: { loader },
  },
  argTypes: {
    ...AriaLabelArgTypes,
    message: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ThreeDotLoader>;

export const Primary: Story = {
  args: {
    isLoading: true,
    placement: "center",
    message: "Spinning up the engines...",
  },
};
