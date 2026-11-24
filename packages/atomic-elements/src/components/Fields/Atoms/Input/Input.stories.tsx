import { Meta, StoryObj } from "@storybook/react-vite";
import { LoadingArgTypes } from "@sb/helpers";
import { Input } from ".";

export default {
  title: "Fields/Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...LoadingArgTypes,
  },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: "Type something...",
    type: "text",
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading",
  },
};
