import { ComponentMeta, ComponentStory } from "@storybook/react";
import FileInput, { Props } from ".";

export default {
title: "Inputs/FileInput",
component: FileInput
} as ComponentMeta<typeof FileInput>

const Template: ComponentStory<typeof FileInput> = (args: Props) => (
  <FileInput {...args} />
);

export const Default = Template.bind({});
Default.args = {

}

// Additional stories go here