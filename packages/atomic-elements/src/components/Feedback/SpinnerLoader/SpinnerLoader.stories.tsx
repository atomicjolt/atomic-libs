import { Meta, StoryObj } from "@storybook/react";
import { getCssProps } from "@sb/cssprops";
import { SpinnerLoader } from ".";
import { RenderStylePropsArgTypes } from "@sb/helpers";

const meta: Meta<typeof SpinnerLoader> = {
  title: "Feedback/SpinnerLoader",
  component: SpinnerLoader,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Loader"),
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
