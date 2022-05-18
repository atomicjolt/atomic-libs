import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import TextInput, { Props } from ".";

export default {
  title: "Inputs/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: Props) => {
  const { value: valueInital, ...props } = args;
  const [value, setValue] = useState(valueInital);

  return <TextInput {...props} value={value} onChange={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Text input label",
};

// Additional stories go here
