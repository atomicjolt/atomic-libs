import { Meta, StoryObj } from "@storybook/react";
import { NumberInput } from ".";
import { TextInputControls } from "@sb/helpers";
import { getCssProps } from "@sb/cssprops";
import { fn } from "@storybook/test";

const meta: Meta<typeof NumberInput> = {
  title: "Inputs/User Input/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Input"),
  },
  argTypes: {
    ...TextInputControls,
    variant: {
      options: ["default", "floating"],
      description: "Variant of the input",
    },
    formatOptions: {
      control: "object",
      description: "Options for formatting the number",
    },
    minValue: {
      control: "number",
      description: "Minimum value allowed",
    },
    maxValue: {
      control: "number",
      description: "Maximum value allowed",
    },
    defaultValue: {
      control: "number",
      description: "Initial value of the input when uncontrolled",
      table: {
        category: "Common",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Primary: Story = {
  args: {
    onChange: fn(),
    size: "medium",
    label: "Number input",
  },
};

export const WithBounds: Story = {
  args: {
    ...Primary.args,
    minValue: 0,
    maxValue: 100,
  },
};

export const FormatAsCurrency: Story = {
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "currency",
      currency: "USD",
    },
  },
};

export const FormatAsPercent: Story = {
  args: {
    ...Primary.args,
    defaultValue: 0.5,
    formatOptions: {
      style: "percent",
    },
  },
};

export const FormatAsUnit: Story = {
  args: {
    ...Primary.args,
    defaultValue: 10,
    formatOptions: {
      style: "unit",
      unit: "mile-per-hour",
    },
  },
};
