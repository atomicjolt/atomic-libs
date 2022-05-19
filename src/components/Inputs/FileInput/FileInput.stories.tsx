import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import FileInput, { Props } from ".";

export default {
  title: "Inputs/FileInput",
  component: FileInput,
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (
  args: Omit<Props, "file" | "onChange">
) => {
  const [file, setFile] = useState<File | null>(null);

  console.log(file);
  return <FileInput file={file} onChange={setFile} {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

// Additional stories go here
