import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextInput, { Props } from ".";
import { DefaultInputProperties } from "../../../utils";

export default {
  title: "Inputs/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: Props) => {
  return <TextInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  value: "",
  type: "text",
  ...DefaultInputProperties,
  label: "Text input label",
  placeholder: "",
  readonly: false,
};

// Additional stories go here
