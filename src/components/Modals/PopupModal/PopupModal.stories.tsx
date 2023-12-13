import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import PopupModal from ".";
import Button from "../../Buttons/Button";

const meta: Meta<typeof PopupModal> = {
  title: "Modals/PopupModal",
  component: PopupModal,
  argTypes: {
    actions: {
      control: false,
    },
    title: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PopupModal>;

export const Primary: Story = {
  args: {
    open: true,
    title: "Popup!",
    children:
      "Here's the content for the popup, it should probably be brief because this modal is intended to be small",
    actions: [<Button key="2">OK</Button>],
  },
};

