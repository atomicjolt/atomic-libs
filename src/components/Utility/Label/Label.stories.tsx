import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import LabelComponent, { LabelProps } from ".";

export default {
  title: "Utility/Label",
  component: LabelComponent,
} as ComponentMeta<typeof LabelComponent>;

const Template: ComponentStory<typeof LabelComponent> = (args: LabelProps) => (
  <LabelComponent {...args} />
);

export const Label = Template.bind({});
Label.args = {
  children: "This is a Label",
  message: "This is a message beneath the label",
  error: "This is an error",
  hidden: false,
};
