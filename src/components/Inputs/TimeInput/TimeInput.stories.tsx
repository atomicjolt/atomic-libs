import { ComponentMeta, ComponentStory } from "@storybook/react";
import TimeInput, { Props } from ".";

export default {
title: "Inputs/TimeInput",
component: TimeInput
} as ComponentMeta<typeof TimeInput>

const Template: ComponentStory<typeof TimeInput> = (args: Props) => (
  <TimeInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Time input label",
}

// Additional stories go here