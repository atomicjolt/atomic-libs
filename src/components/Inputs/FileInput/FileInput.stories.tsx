import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import FileInput, { FileInputProps } from ".";
import { InputControls, inputProperties } from "../../storybook";

export default {
  title: "Inputs/FileInput",
  component: FileInput,
  argTypes: {
    file: {
      control: false,
    },
    ...InputControls,
  },
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args: FileInputProps) => {
  return <FileInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  ...inputProperties({ filter: ["hideLabel", "size", "message"] }),
  label: "Choose a file...",
};

export const WithFile = Template.bind({});
WithFile.args = {
  ...Default.args,
  file: new File(["test"], "test.txt"),
};
