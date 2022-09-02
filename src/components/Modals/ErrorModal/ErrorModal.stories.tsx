import { ComponentMeta, ComponentStory } from "@storybook/react";
import ErrorModal, { Props } from ".";

export default {
  title: "Modals/ErrorModal",
  component: ErrorModal,
} as ComponentMeta<typeof ErrorModal>;

const Template: ComponentStory<typeof ErrorModal> = (args: Props) => (
  <ErrorModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: "Error",
  children: "Something went wrong",
};

// Additional stories go here
