import { ComponentMeta, ComponentStory } from "@storybook/react";
import ConfirmationModal, { Props } from ".";

export default {
title: "Modals/ConfirmationModal",
component: ConfirmationModal
} as ComponentMeta<typeof ConfirmationModal>

const Template: ComponentStory<typeof ConfirmationModal> = (args: Props) => (
  <ConfirmationModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Delete Item",
  content: "Are you sure you want to delete this item?",
  primaryButton: "Delete",
}

// Additional stories go here