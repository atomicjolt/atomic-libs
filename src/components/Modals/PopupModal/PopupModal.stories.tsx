import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import PopupModalComponent, { PopupModalProps } from ".";
import Button from "../../Buttons/Button";

export default {
  title: "Modals/PopupModal",
  component: PopupModalComponent,
  argTypes: {
    actions: {
      control: false,
    },
    title: {
      control: "text",
    },
  },
} as ComponentMeta<typeof PopupModalComponent>;

const Template: ComponentStory<typeof PopupModalComponent> = (
  args: PopupModalProps
) => <PopupModalComponent {...args} />;

export const PopupModal = Template.bind({});
PopupModal.args = {
  open: true,
  title: "Popup!",
  children:
    "Here's the content for the popup, it should probably be brief because this modal is intended to be small",
  actions: [<Button key="2">OK</Button>],
};

// Additional stories go here
