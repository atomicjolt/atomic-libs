import { Meta, StoryObj } from "@storybook/react-vite";
import { loader } from "@styles/theme/component";
import { AriaLabelArgTypes, RenderStylePropsArgTypes } from "@sb/helpers";
import { ThreeDotLoader } from ".";

const meta: Meta<typeof ThreeDotLoader> = {
  title: "Feedback/ThreeDotLoader",
  component: ThreeDotLoader,
  parameters: {
    cssprops: { loader },
  },
  argTypes: {
    ...AriaLabelArgTypes,
    ...RenderStylePropsArgTypes,
    isLoading: {
      control: "boolean",
      table: { category: "State" },
    },
    message: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ThreeDotLoader>;

export const Primary: Story = {
  args: {
    message: "Spinning up the engines...",
  },
};
