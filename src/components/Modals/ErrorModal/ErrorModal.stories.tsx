import { ComponentMeta, ComponentStory } from "@storybook/react";
import ErrorModal, { Props } from ".";

export default {
title: "Modals/ErrorModal",
component: ErrorModal
} as ComponentMeta<typeof ErrorModal>

const Template: ComponentStory<typeof ErrorModal> = (args: Props) => (
  <ErrorModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Error",
  content: "Something went wrong",
  primaryButton: "Delete",
}

// Additional stories go here