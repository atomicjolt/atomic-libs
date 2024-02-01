import { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from ".";
import { now, getLocalTimeZone } from "@internationalized/date";
import {
  NewDefaultInputProperties,
  NewTextInputControls,
} from "../../../storybook";

export default {
  title: "Inputs/Date & Time/DatePicker",
  component: DatePicker,

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
} as Meta<typeof DatePicker>;

type Story = StoryObj<typeof DatePicker>;

const date = now(getLocalTimeZone());

export const Primary: Story = {
  args: {
    defaultValue: date,
    ...NewDefaultInputProperties,
    label: "Date Picker",
    size: "medium",
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
