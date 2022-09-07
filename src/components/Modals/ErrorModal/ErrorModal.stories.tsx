import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ErrorModalComponent, { ErrorModalProps } from ".";

export default {
  title: "Modals/ErrorModal",
  component: ErrorModalComponent,
} as ComponentMeta<typeof ErrorModalComponent>;

const Template: ComponentStory<typeof ErrorModalComponent> = (
  args: ErrorModalProps
) => <ErrorModalComponent {...args} />;

export const ErrorModal = Template.bind({});
ErrorModal.args = {
  open: true,
  title: "Error",
  children: "Something went wrong",
};

// Additional stories go here
