import { Meta, StoryObj } from "@storybook/react";
import { FormatDuration } from ".";

export default {
  title: "Format/FormatDuration",
  component: FormatDuration,
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
    value: {
      control: "number",
    },
    minUnit: {
      control: "select",
      options: ["second", "minute", "hour", "day", "week", "month", "year"],
    },
    maxUnit: {
      control: "select",
      options: ["second", "minute", "hour", "day", "week", "month", "year"],
    },
    fallback: {
      control: "text",
    },
    style: {
      control: "select",
      options: ["long", "short", "narrow"],
    },
  },
} as Meta<typeof FormatDuration>;

type Story = StoryObj<typeof FormatDuration>;

export const Primary: Story = {
  args: {
    value: 3892,
  },
};

export const NoDuration: Story = {
  args: {
    value: null,
    fallback: "No duration",
  },
};

export const CustomizeRender: Story = {
  args: {
    ...Primary.args,
    children: (value) => <h1>Duration: {value}</h1>,
  },
  parameters: {
    docs: {
      source: {
        code: `
<FormatDuration value={3600} fallback="No duration">
  {(value) => <h1>Duration: {value}</h1>}
</FormatDuration>
`,
      },
    },
  },
};
