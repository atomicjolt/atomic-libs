import { Meta, StoryObj } from "@storybook/react";
import { TextArea } from ".";

export default {
  title: "Fields/Atoms/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isLoading: {
      control: "boolean",
      table: {
        category: "Field State",
      },
    },
    loadingLabel: {
      control: "text",
      table: {
        category: "Field State",
      },
    },
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
