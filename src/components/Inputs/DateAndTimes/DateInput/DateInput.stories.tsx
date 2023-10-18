import { Meta, StoryObj } from "@storybook/react";
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
} as Meta<typeof DateInputComponnent>;

type Story = StoryObj<typeof DateInputComponnent>;

export const DateInput: Story = {
  args: {
    value: new Date(),
    ...DefaultInputProperties,
    label: "Date input",
    placeholder: "mm/dd/yyy",
  },
};
