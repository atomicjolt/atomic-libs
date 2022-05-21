import { ComponentMeta, ComponentStory } from "@storybook/react";
import TimeInput, { Props } from ".";
import { DefaultInputProperties } from "../../../utils";

export default {
  title: "Inputs/TimeInput",
  component: TimeInput,
} as ComponentMeta<typeof TimeInput>;

const Template: ComponentStory<typeof TimeInput> = (args: Props) => (
  <TimeInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: "",
  ...DefaultInputProperties,
  label: "Time input label",
  message: "hh:mm AM/PM",
};

// Additional stories go here
