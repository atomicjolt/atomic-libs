import { Meta, StoryObj } from "@storybook/react-vite";
import { loader } from "@styles/theme/component";
import { SpinnerLoader } from ".";
import { RenderStylePropsArgTypes } from "@sb/helpers";

const meta: Meta<typeof SpinnerLoader> = {
  title: "Feedback/SpinnerLoader",
  component: SpinnerLoader,
  parameters: {
    layout: "centered",
    cssprops: { loader },
  },
  argTypes: {
    ...RenderStylePropsArgTypes,
    message: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof SpinnerLoader>;

export const Primary: Story = {
  args: {
    isLoading: true,
    message: "Getting ducks in a row...",
    orientation: "horizontal",
  },
};
