import { ComponentMeta, ComponentStory } from "@storybook/react";
import Textarea, { Props } from ".";
import { DefaultInputProperties } from "../../../utils";

export default {
  title: "Inputs/Textarea",
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args: Props) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: "Text Area content",
  resize: true,
  ...(DefaultInputProperties as Props),
  label: "Textarea label",
  message: "1000 characters",
};

// Additional stories go here
