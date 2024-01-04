import { Meta, StoryObj } from "@storybook/react";
import ConfirmationModal from ".";

const meta: Meta<typeof ConfirmationModal> = {
  title: "Modals/ConfirmationModal",
  component: ConfirmationModal,
};

export default meta;

type Story = StoryObj<typeof ConfirmationModal>;

export const Primary: Story = {
  args: {
    title: "Confirmation",
    children: "Are you sure you want to proceed?",
    open: true,
    confirmText: "Confirm",
  },
};
