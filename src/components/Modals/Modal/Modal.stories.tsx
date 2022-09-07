import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ModalComponent, { ModalProps } from ".";

export default {
  title: "Modals/Modal",
  component: ModalComponent,
} as ComponentMeta<typeof ModalComponent>;

const Template: ComponentStory<typeof ModalComponent> = (args: ModalProps) => (
  <ModalComponent {...args} />
);

export const Modal = Template.bind({});
Modal.args = {
  open: true,
  title: "Modal Title",
  children: "Complex stuff",
  primaryButton: "Save",
};

// Additional stories go here
