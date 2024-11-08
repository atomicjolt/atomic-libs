import { Meta, StoryObj } from "@storybook/react";
import { FormatDate } from ".";

export default {
  title: "Format/FormatDate",
  component: FormatDate,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ fontSize: "2rem", fontFamily: "Arial, sans-serif" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    calendar: {
      control: "text",
    },
    dateStyle: {
      control: "select",
      options: ["full", "long", "medium", "short"],
    },
    timeStyle: {
      control: "select",
      options: ["full", "long", "medium", "short"],
    },
    timeZone: {
      control: "text",
    },
    hour12: {
      control: "boolean",
    },
    weekday: {
      control: "select",
      options: ["long", "short"],
    },
    era: {
      control: "select",
      options: ["long", "short"],
    },
    year: {
      control: "select",
      options: ["numeric", "2-digit"],
    },
    month: {
      control: "select",
      options: ["numeric", "2-digit", "long", "short"],
    },
    day: {
      control: "select",
      options: ["numeric", "2-digit"],
    },
    hour: {
      control: "select",
      options: ["numeric", "2-digit"],
    },
    minute: {
      control: "select",
      options: ["numeric", "2-digit"],
    },
    second: {
      control: "select",
      options: ["numeric", "2-digit"],
    },
    fractionalSecondDigits: {
      control: "number",
    },
    timeZoneName: {
      control: "select",
      options: ["long", "short"],
    },
    formatMatcher: {
      control: "select",
      options: ["best fit", "lookup"],
    },
    hourCycle: {
      control: "select",
      options: ["h11", "h12", "h23", "h24"],
    },
    localeMatcher: {
      control: "select",
      options: ["lookup", "best fit"],
    },
    numberingSystem: {
      control: "text",
    },
    dayPeriod: {
      control: "select",
      options: ["long", "short"],
    },
  },
} as Meta<typeof FormatDate>;

type Story = StoryObj<typeof FormatDate>;

export const Primary: Story = {
  args: {
    value: new Date(),
    dateStyle: "long",
    timeStyle: "long",
  },
};
