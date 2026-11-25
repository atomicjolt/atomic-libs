import { Meta, StoryObj } from "@storybook/react-vite";
import { now, today, getLocalTimeZone } from "@internationalized/date";
import { DateField } from ".";
import { Label } from "../Atoms/Label";
import { Message } from "../Atoms/Message";
import { ErrorMessage } from "../Atoms/ErrorMessage";
import { ComboInput } from "../ComboInput";
import { FieldStateControls } from "@sb/helpers";

// The generated snippet can't show the segments' render function, and prints
// date values as raw strings. Patch both so the snippet is copyable. Each
// story lists the source of its date props in `parameters.dateSource`.
const SEGMENTS_SOURCE = [
  "<DateField.Segments>",
  "  {(_, index) => <DateField.Segment key={index} index={index} />}",
  "</DateField.Segments>",
];

function transformSource(
  code: string,
  context: { parameters: { dateSource?: Record<string, string> } }
) {
  const dateSource = context.parameters.dateSource ?? {};
  return code
    .replace(
      /^([ \t]*)<DateField\.?Segments(?:\s[^>]*)?(?:\/>|>[\s\S]*?<\/DateField\.?Segments>)/gm,
      (_match, indent: string) =>
        SEGMENTS_SOURCE.map((line) => indent + line).join("\n")
    )
    .replace(
      /(defaultValue|minValue|maxValue)=\{[^}]*\}/g,
      (match, prop: string) =>
        dateSource[prop] ? `${prop}={${dateSource[prop]}}` : match
    );
}

export default {
  title: "Fields/DateField",
  component: DateField,
  parameters: {
    layout: "centered",
    docs: {
      source: { transform: transformSource },
    },
    dateSource: { defaultValue: "now(getLocalTimeZone())" },
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
      <Label key="label">Date</Label>,
      <Message key="message">Select a date</Message>,
      <ComboInput key="input" padding="both">
        <DateField.Segments>
          {(_, index) => <DateField.Segment key={index} index={index} />}
        </DateField.Segments>
      </ComboInput>,
      <ErrorMessage key="error">Please enter a valid date</ErrorMessage>,
    ],
  },
};

export const HourGranularity: Story = {
  args: {
    ...Primary.args,
    granularity: "hour",
    children: [
      <Label key="label">Meeting Date & Time</Label>,
      <ComboInput key="input" padding="both">
        <DateField.Segments>
          {(_, index) => <DateField.Segment key={index} index={index} />}
        </DateField.Segments>
      </ComboInput>,
    ],
  },
};

export const MinuteGranularity: Story = {
  args: {
    ...Primary.args,
    granularity: "minute",
    children: [
      <Label key="label">Appointment Time</Label>,
      <ComboInput key="input" padding="both">
        <DateField.Segments>
          {(_, index) => <DateField.Segment key={index} index={index} />}
        </DateField.Segments>
      </ComboInput>,
    ],
  },
};

export const WithError: Story = {
  args: {
    ...Primary.args,
    isInvalid: true,
    children: [
      <Label key="label">Event Date</Label>,
      <Message key="message">Choose when your event will happen</Message>,
      <ComboInput key="input" padding="both">
        <DateField.Segments>
          {(_, index) => <DateField.Segment key={index} index={index} />}
        </DateField.Segments>
      </ComboInput>,
      <ErrorMessage key="error">Please select a future date</ErrorMessage>,
    ],
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    isDisabled: true,
    children: [
      <Label key="label">System Date</Label>,
      <ComboInput key="input" padding="both">
        <DateField.Segments>
          {(_, index) => <DateField.Segment key={index} index={index} />}
        </DateField.Segments>
      </ComboInput>,
    ],
  },
};

export const Required: Story = {
  args: {
    ...Primary.args,
    isRequired: true,
    children: [
      <Label key="label">Due Date</Label>,
      <Message key="message">This field is required</Message>,
      <ComboInput key="input" padding="both">
        <DateField.Segments>
          {(_, index) => <DateField.Segment key={index} index={index} />}
        </DateField.Segments>
      </ComboInput>,
    ],
  },
};

export const MinAndMaxValue: Story = {
  args: {
    ...Primary.args,
    granularity: "day",
    minValue: today(getLocalTimeZone()),
    maxValue: today(getLocalTimeZone()).add({ days: 30 }),
    defaultValue: today(getLocalTimeZone()).subtract({ days: 1 }),
    children: [
      <Label key="label">Start Date</Label>,
      <Message key="message">Pick a date in the next 30 days</Message>,
      <ComboInput key="input" padding="both">
        <DateField.Segments>
          {(_, index) => <DateField.Segment key={index} index={index} />}
        </DateField.Segments>
      </ComboInput>,
      <ErrorMessage key="error">
        The date must be within the next 30 days
      </ErrorMessage>,
    ],
  },
  parameters: {
    dateSource: {
      defaultValue: "today(getLocalTimeZone()).subtract({ days: 1 })",
      minValue: "today(getLocalTimeZone())",
      maxValue: "today(getLocalTimeZone()).add({ days: 30 })",
    },
  },
};

export const ReadOnly: Story = {
  args: {
    ...Primary.args,
    isReadOnly: true,
    children: [
      <Label key="label">Created On</Label>,
      <ComboInput key="input" padding="both">
        <DateField.Segments>
          {(_, index) => <DateField.Segment key={index} index={index} />}
        </DateField.Segments>
      </ComboInput>,
    ],
  },
};
