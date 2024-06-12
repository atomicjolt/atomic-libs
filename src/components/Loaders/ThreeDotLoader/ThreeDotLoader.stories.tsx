import { Meta, StoryObj } from "@storybook/react";
import { getCssProps } from "@sb/cssprops";
import ThreeDotLoader from ".";
import { AriaLabelArgTypes } from "@sb/helpers";

const meta: Meta<typeof ThreeDotLoader> = {
  title: "Loaders/ThreeDotLoader",
  component: ThreeDotLoader,
  parameters: {
    cssprops: getCssProps("Loader"),
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
  },
};
