import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from ".";
import ProgressCircleMeta from "@components/Feedback/ProgressCircle/ProgressCircle.stories";

const meta: Meta<typeof Spinner> = {
  title: "Animations/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: ProgressCircleMeta.argTypes,
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {};
