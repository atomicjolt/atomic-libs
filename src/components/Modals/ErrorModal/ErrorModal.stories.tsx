import { Meta, StoryObj } from "@storybook/react";
import ErrorModal from ".";

const meta: Meta<typeof ErrorModal> = {
  title: "Modals/ErrorModal",
  component: ErrorModal,
};

export default meta;

type Story = StoryObj<typeof ErrorModal>;

export const Primary: Story = {
  args: {
    isOpen: false,
    title: "Error",
    children: "An error has occurred",
    buttonText: "Close",
    centered: true,
  },
};
