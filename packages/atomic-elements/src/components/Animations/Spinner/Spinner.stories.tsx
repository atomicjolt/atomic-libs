import { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from ".";
import { AriaLabelArgTypes, RenderStylePropsArgTypes } from "@sb/helpers";

const meta: Meta<typeof Spinner> = {
  title: "Animations/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  // Spinner is always indeterminate, so ProgressCircle's value props
  // (value, minValue, maxValue, showValueLabel, …) have no effect here.
  argTypes: {
    ...AriaLabelArgTypes,
    ...RenderStylePropsArgTypes,
    $size: {
      control: "text",
      description: "The width and height of the spinner",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"40px"' },
      },
    },
    $trackWidth: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      description: "The width of the spinner's stroke",
      table: {
        type: { summary: '"1" | "2" | … | "10"' },
        defaultValue: { summary: '"6"' },
      },
    },
    $linecap: {
      control: "select",
      options: ["round", "butt"],
      description: "The linecap of the spinning indicator",
      table: {
        type: { summary: '"round" | "butt"' },
        defaultValue: { summary: '"round"' },
      },
    },
    $trackColor: {
      control: "color",
      description: "The color of the track behind the indicator",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"transparent"' },
      },
    },
    $indicatorColor: {
      control: "color",
      description: "The color of the spinning indicator",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"var(--animation-clr)"' },
      },
    },
    $bg: {
      control: "color",
      description: "The color of the circle's background",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"var(--progress-circle-bg-clr)"' },
      },
    },
    value: { table: { disable: true } },
    minValue: { table: { disable: true } },
    maxValue: { table: { disable: true } },
    showValueLabel: { table: { disable: true } },
    valueLabel: { table: { disable: true } },
    formatOptions: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Primary: Story = {
  args: {
    "aria-label": "Loading",
  },
};
