import { ComponentMeta, ComponentStory } from "@storybook/react";
import DateTimeInput, { Props } from ".";
import { DefaultInputProperties } from "../../../utils";

export default {
  title: "Inputs/DateTimeInput",
  component: DateTimeInput,
} as ComponentMeta<typeof DateTimeInput>;

const Template: ComponentStory<typeof DateTimeInput> = (args: Props<any>) => (
  <DateTimeInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  value: new Date("2022-02-21"),
  min: new Date("2022-01-01"),
  max: new Date("2023-01-01"),
  ...DefaultInputProperties,
  label: "Date input label",
  message: "MM/DD/YYYY, HH:MM AM/PM",
  readonly: false,
};

// Additional stories go here
