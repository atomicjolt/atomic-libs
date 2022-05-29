import { ComponentMeta, ComponentStory } from "@storybook/react";
import DateInput, { Props } from ".";
import { DefaultInputProperties } from "../../../utils";

export default {
  title: "Inputs/Date & Time/DateInput",
  component: DateInput,
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args: Props<any>) => (
  <DateInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: new Date("2022-02-21"),
  min: new Date("2022-01-01"),
  max: new Date("2023-01-01"),
  ...DefaultInputProperties,
  label: "Date input label",
  message: "MM/DD/YYYY",
  readonly: false,
};

// Additional stories go here
