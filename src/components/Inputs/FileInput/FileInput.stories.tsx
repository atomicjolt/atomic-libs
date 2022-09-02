import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FileInput, { Props } from ".";

export default {
  title: "Inputs/FileInput",
  component: FileInput,
  argTypes: {
    file: {
      control: false,
    },
  },
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args: Props) => {
  return <FileInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

export const WithFile = Template.bind({});
WithFile.args = {
  file: new File(["test"], "test.txt"),
};
