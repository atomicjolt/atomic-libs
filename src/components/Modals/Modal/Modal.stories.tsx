import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal, { Props } from ".";

export default {
title: "Modals/Modal",
component: Modal
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args: Props) => (
  <Modal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Modal Title",
  content: "Complex stuff",
  primaryButton: "Save",
}

// Additional stories go here