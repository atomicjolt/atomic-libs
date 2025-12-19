import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { now, getLocalTimeZone } from "@internationalized/date";
import { DateField } from ".";
import { FieldLabel } from "../Field/FieldLabel";
import { FieldMessage } from "../Field/FieldMessage";
import { FieldErrorMessage } from "../Field/FieldError";
import { FieldStateControls } from "@sb/helpers";

export default {
  title: "Fields/DateField",
  component: DateField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...FieldStateControls,
    value: {
      control: false,
      description:
        "The value of the date field. Accepts a value from `@internationalized/date` library",
    },
    defaultValue: {
      control: false,
      description:
        "The default value of the date field. Accepts a value from `@internationalized/date` library",
    },
    granularity: {
      control: "select",
      options: ["day", "hour", "minute", "second"],
      description: "The granularity of the date field",
    },
    hideTimeZone: {
      control: "boolean",
      description: "Hides the timezone",
    },
    shouldForceLeadingZeros: {
      control: "boolean",
      description:
        "Forces leading zeros on the date field. If this is not set it is determined by the user's locale",
    },
    maxValue: {
      control: false,
      description:
        "The maximum value of the date field. Accepts a value from `@internationalized/date` library",
    },
    minValue: {
      control: false,
      description:
        "The minimum value of the date field. Accepts a value from `@internationalized/date` library",
    },
    hourCycle: {
      control: "select",
      options: [12, 24],
      description: "Use a 12 or 24 hour cycle",
    },
    isDateUnavailable: {
      control: false,
      description:
        "A function that is called for every date. If it returns true, the date is disabled",
    },
    onChange: {
      action: "onChange",
      description: "Handler that is called when the date value changes",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof DateField>;

type Story = StoryObj<typeof DateField>;

const date = now(getLocalTimeZone());

export const Primary: Story = {
  args: {
    defaultValue: date,
    granularity: "day",
    hideTimeZone: true,
    children: [
      <FieldLabel key="label">Date</FieldLabel>,
      <FieldMessage key="message">Select a date</FieldMessage>,
      <DateField.Segments key="segments">
        {(_, index) => <DateField.Segment key={index} index={index} />}
      </DateField.Segments>,
      <FieldErrorMessage key="error">
        Please enter a valid date
      </FieldErrorMessage>,
    ],
  },
};

export const DayGranularity: Story = {
  args: {
    ...Primary.args,
    granularity: "day",
    children: [
      <FieldLabel key="label">Birth Date</FieldLabel>,
      <DateField.Segments key="segments">
        {(_, index) => <DateField.Segment key={index} index={index} />}
      </DateField.Segments>,
    ],
  },
};

export const HourGranularity: Story = {
  args: {
    ...Primary.args,
    granularity: "hour",
    children: [
      <FieldLabel key="label">Meeting Date & Time</FieldLabel>,
      <DateField.Segments key="segments">
        {(_, index) => <DateField.Segment key={index} index={index} />}
      </DateField.Segments>,
    ],
  },
};

export const MinuteGranularity: Story = {
  args: {
    ...Primary.args,
    granularity: "minute",
    children: [
      <FieldLabel key="label">Appointment Time</FieldLabel>,
      <DateField.Segments key="segments">
        {(_, index) => <DateField.Segment key={index} index={index} />}
      </DateField.Segments>,
    ],
  },
};

export const WithError: Story = {
  args: {
    ...Primary.args,
    isInvalid: true,
    children: [
      <FieldLabel key="label">Event Date</FieldLabel>,
      <FieldMessage key="message">
        Choose when your event will happen
      </FieldMessage>,
      <DateField.Segments key="segments">
        {(_, index) => <DateField.Segment key={index} index={index} />}
      </DateField.Segments>,
      <FieldErrorMessage key="error">
        Please select a future date
      </FieldErrorMessage>,
    ],
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    isDisabled: true,
    children: [
      <FieldLabel key="label">System Date</FieldLabel>,
      <DateField.Segments key="segments">
        {(_, index) => <DateField.Segment key={index} index={index} />}
      </DateField.Segments>,
    ],
  },
};

export const Required: Story = {
  args: {
    ...Primary.args,
    isRequired: true,
    children: [
      <FieldLabel key="label">Due Date</FieldLabel>,
      <FieldMessage key="message">This field is required</FieldMessage>,
      <DateField.Segments key="segments">
        {(_, index) => <DateField.Segment key={index} index={index} />}
      </DateField.Segments>,
    ],
  },
};
