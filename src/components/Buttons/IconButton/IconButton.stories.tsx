import { Meta, StoryObj } from "@storybook/react";
import IconButton from ".";

const meta: Meta<typeof IconButton> = {
  title: "Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onClick: {
      control: false,
    },
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "error",
        "success",
        "inverted",
        "content",
        "ghost",
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    icon: "more_vert",
    ariaLabel: "More options",
    loading: false,
  },
};

export const Loading: Story = {
  args: {
    icon: "more_vert",
    ariaLabel: "More options",
    loading: true,
    loadingLabel: "Loading...",
    loadingComplete: false,
  },
};
