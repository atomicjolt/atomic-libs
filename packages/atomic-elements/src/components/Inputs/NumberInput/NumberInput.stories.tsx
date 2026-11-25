import { Meta, StoryObj } from "@storybook/react-vite";
import { NumberInput } from ".";
import { TextInputControls, LoadingArgTypes } from "@sb/helpers";
import { input } from "@styles/theme/component";
import { fn } from "storybook/test";

const meta: Meta<typeof NumberInput> = {
  title: "Inputs/User Input/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
    cssprops: { input },
  },
  argTypes: {
    ...TextInputControls,
    ...LoadingArgTypes,
    variant: {
      options: ["default", "floating"],
      description: "Variant of the input",
      table: {
        defaultValue: { summary: '"default"' },
      },
    },
    size: {
      table: {
        defaultValue: { summary: '"medium"' },
      },
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
    },
    step: {
      control: "number",
      description:
        "Amount the value changes by when using the increment and decrement buttons or arrow keys",
    },
    onChange: {
      description: "Called with the new number when the value changes",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Primary: Story = {
  args: {
    onChange: fn(),
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

export const Floating: Story = {
  args: {
    ...Primary.args,
    variant: "floating",
  },
};

export const WithError: Story = {
  args: {
    ...Primary.args,
    isInvalid: true,
    error: "Please enter a valid number",
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading",
  },
};
