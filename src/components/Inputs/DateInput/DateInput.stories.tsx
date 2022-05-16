import { ComponentMeta, ComponentStory } from "@storybook/react";
import DateInput, { Props } from ".";

export default {
  title: "Inputs/DateInput",
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args: Props) => (
  <DateInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Date input label",
  message: "MM/DD/YYYY",
};

// Additional stories go here
