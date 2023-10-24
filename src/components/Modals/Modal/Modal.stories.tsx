import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from ".";

const meta: Meta<typeof Modal> = {
  title: "Modals/Modal",
  component: Modal,
  argTypes: {
    title: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    open: true,
    title: "Modal Title",
    children: "Here's the content for the modal",
    primaryButton: "Primary Action",
    secondaryButton: "Secondary Action",
  },
};

