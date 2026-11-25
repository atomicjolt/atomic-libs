import { Meta, StoryObj } from "@storybook/react-vite";
import { LoadingArgTypes } from "@sb/helpers";
import { TextArea } from ".";

export default {
  title: "Fields/Atoms/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...LoadingArgTypes,
  },
} as Meta<typeof TextArea>;

type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading",
  },
};
