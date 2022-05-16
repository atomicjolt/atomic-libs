import { ComponentMeta, ComponentStory } from "@storybook/react";
import Textarea, { Props } from ".";

export default {
  title: "Inputs/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args: Props) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Textarea label",
};

// Additional stories go here
