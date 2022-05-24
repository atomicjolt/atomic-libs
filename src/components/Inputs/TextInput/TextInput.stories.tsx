import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextInput, { TextInputProps } from ".";
import { DefaultInputProperties } from "../../../utils";

export default {
  title: "Inputs/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => {
  return <TextInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  value: null!,
  type: "text",
  ...DefaultInputProperties,
  label: "Text input label",
  placeholder: "",
  readonly: false,
};

// Additional stories go here
