import { Meta, StoryObj } from "@storybook/react";
import { getCssProps } from "@sb/cssprops";
import Spinner from ".";
import { AriaLabelArgTypes } from "@sb/helpers";

const meta: Meta<typeof Spinner> = {
  title: "Loaders/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
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

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
  args: {
    isLoading: true,
  },
};
