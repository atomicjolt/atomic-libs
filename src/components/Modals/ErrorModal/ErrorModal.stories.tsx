import { Meta, StoryObj } from "@storybook/react";
import ErrorModal from ".";

const meta: Meta<typeof ErrorModal> = {
  title: "Modals/ErrorModal",
  component: ErrorModal,
  parameters: {
    docs: {
      story: {
        inline: false,
        height: "400px",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorModal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    title: "Error",
    children: "An error has occurred",
    buttonText: "Close",
    centered: true,
  },
};
