import { Meta, StoryObj } from "@storybook/react";
import DateInputComponnent, { DateInputProps } from ".";
import { now, getLocalTimeZone } from "@internationalized/date";
import {
  NewDefaultInputProperties,
  NewTextInputControls,
} from "../../../storybook";

export default {
  title: "Inputs/Date & Time/DateInput",
  component: DateInputComponnent,

  argTypes: {
    ...NewTextInputControls,
    value: {
      control: false,
    },
    defaultValue: {
      control: false,
    },
    // TODO: hide the placeholder control
    // placeholder: {
    //   control: false,
    // },
    granularity: {
      control: "select",
      options: ["day", "hour", "minute", "second"],
    },
  },
} as Meta<typeof DateInputComponnent>;

type Story = StoryObj<typeof DateInputComponnent>;

const date = now(getLocalTimeZone());

export const Primary: Story = {
  args: {
    defaultValue: date,
    ...NewDefaultInputProperties,
    label: "Date input",
    size: "small",
    hideTimeZone: true,
    isInvalid: false,
  },
};

export const DayGranularity: Story = {
  args: {
    ...Primary.args,
    granularity: "day",
  },
};
