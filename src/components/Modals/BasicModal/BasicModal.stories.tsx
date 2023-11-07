import { Meta, StoryObj } from "@storybook/react";
import BasicModal from ".";

const meta: Meta<typeof BasicModal> = {
  title: "Modals/BasicModal",
  component: BasicModal,
};

export default meta;

type Story = StoryObj<typeof BasicModal>;

export const Primary: Story = {
  args: {
    children: "Modal Content",
  },
};
