import { Meta, StoryObj } from "@storybook/react-vite";
import { loader } from "@styles/theme/component";
import { SpinnerLoader } from ".";
import { AriaLabelArgTypes, RenderStylePropsArgTypes } from "@sb/helpers";

const meta: Meta<typeof SpinnerLoader> = {
  title: "Feedback/SpinnerLoader",
  component: SpinnerLoader,
  parameters: {
    layout: "centered",
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

type Story = StoryObj<typeof SpinnerLoader>;

export const Primary: Story = {
  args: {
    "aria-label": "Loading",
    message: "Getting ducks in a row...",
    orientation: "horizontal",
  },
};
