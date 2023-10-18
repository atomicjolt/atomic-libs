import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DateInputComponnent, { DateInputProps } from ".";
import { DefaultInputProperties, TextInputControls } from "../../../storybook";

export default {
  title: "Inputs/Date & Time/DateInput",
  component: DateInputComponnent,
  argTypes: {
    value: {
      control: "date",
    },
    ...TextInputControls,
    onSelect: {
      control: "false",
      table: {
        category: "Events",
      },
    },
  },
} as ComponentMeta<typeof DateInputComponnent>;

const Template: ComponentStory<typeof DateInputComponnent> = (
  args: DateInputProps
) => <DateInputComponnent {...args} />;

export const DateInput = Template.bind({});
DateInput.args = {
  value: new Date(),
  ...DefaultInputProperties,
  label: "Date input",
  placeholder: "mm/dd/yyy",
};
