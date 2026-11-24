import { Meta, StoryObj } from "@storybook/react-vite";
import { ProgressCircle } from ".";
import { RenderStylePropsArgTypes } from "@sb/helpers";
import { progressCircle } from "@styles/theme/component";

export default {
  title: "Feedback/ProgressCircle",
  component: ProgressCircle,
  parameters: {
    layout: "centered",
    cssprops: { progressCircle },
  },
  argTypes: {
    ...RenderStylePropsArgTypes,
    value: {
      control: "number",
      description:
        "The value of the progress circle. Must be between maxValue and minValue.",
      table: { defaultValue: { summary: "0" } },
    },
    maxValue: {
      control: "number",
      description: "The maximum value of the progress circle.",
      table: { defaultValue: { summary: "100" } },
    },
    minValue: {
      control: "number",
      description: "The minimum value of the progress circle.",
      table: { defaultValue: { summary: "0" } },
    },
    isIndeterminate: {
      control: "boolean",
      description: "Whether the progress circle is indeterminate.",
    },
    $trackColor: {
      control: "color",
    },
    $indicatorColor: {
      control: "color",
    },
    $bg: {
      control: "color",
    },
    showValueLabel: {
      control: "boolean",
      description: "Whether to show the value label.",
    },
    valueLabel: {
      control: "text",
      description: "Custom value label to display in the center of the circle.",
    },
    formatOptions: {
      control: "object",
      description: "Options to format the value label.",
    },
  },
} as Meta<typeof ProgressCircle>;

type Story = StoryObj<typeof ProgressCircle>;

export const Primary: Story = {
  args: {
    value: 35,
    $size: "100",
  },
};

export const ValueLabel: Story = {
  args: {
    ...Primary.args,
    $trackWidth: "5",
    showValueLabel: true,
  },
};

export const ValueLabelFormatOptions: Story = {
  args: {
    ...Primary.args,
    $trackWidth: "5",
    showValueLabel: true,
    formatOptions: {
      style: "currency",
      currency: "JPY",
    },
  },
};

export const Indeterminate: Story = {
  args: {
    isIndeterminate: true,
    $trackColor: "transparent",
    $linecap: "round",
    $size: "100",
    $trackWidth: "5",
  },
};

export const CustomRange: Story = {
  args: {
    value: 50,
    minValue: 20,
    maxValue: 80,
    $trackWidth: "5",
    $size: "100",
    showValueLabel: true,
  },
};
