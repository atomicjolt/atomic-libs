import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal, { Props } from ".";

export default {
  title: "Modals/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: Props) => (
  <Modal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: "Modal Title",
  children: "Complex stuff",
  primaryButton: "Save",
};

// Additional stories go here
