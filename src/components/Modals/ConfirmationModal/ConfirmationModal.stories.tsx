import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ConfirmationModalComponent, { ConfirmationModalProps } from ".";

export default {
  title: "Modals/ConfirmationModal",
  component: ConfirmationModalComponent,
} as ComponentMeta<typeof ConfirmationModalComponent>;

const Template: ComponentStory<typeof ConfirmationModalComponent> = (
  args: ConfirmationModalProps
) => <ConfirmationModalComponent {...args} />;

export const ConfirmationModal = Template.bind({});
ConfirmationModal.args = {
  open: true,
  title: "Delete Item",
  children: "Are you sure you want to delete this item?",
  confirmText: "Delete",
};

// Additional stories go here
