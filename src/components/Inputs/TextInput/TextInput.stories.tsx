import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextInput, { Props } from ".";

export default {
title: "Inputs/TextInput",
component: TextInput
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = (args: Props) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Text input label",
}

// Additional stories go here