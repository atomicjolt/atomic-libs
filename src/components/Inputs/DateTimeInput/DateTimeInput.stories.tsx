import { ComponentMeta, ComponentStory } from "@storybook/react";
import DateTimeInput, { Props } from ".";

export default {
  title: "Inputs/DateTimeInput",
  component: DateTimeInput,
} as ComponentMeta<typeof DateTimeInput>;

const Template: ComponentStory<typeof DateTimeInput> = (args: Props) => (
  <DateTimeInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Date time input label",
  message: "MM/DD/YYYY, hh:mm AM/PM",
};

// Additional stories go here
