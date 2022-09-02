import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label, { Props } from ".";

export default {
  title: "Utility/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args: Props) => (
  <Label {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "This is a Label",
  message: "This is a message beneath the label",
  error: "This is an error",
  hidden: false,
};

// Additional stories go here
