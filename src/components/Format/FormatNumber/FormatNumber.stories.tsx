import { Meta, StoryObj } from "@storybook/react";
import { FormatNumber } from ".";

export default {
  title: "Format/FormatNumber",
  component: FormatNumber,
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
    style: {
      control: "select",
      options: ["decimal", "currency", "percent", "unit"],
    },
    minimumIntegerDigits: {
      control: "number",
    },
    minimumFractionDigits: {
      control: "number",
    },
    maximumFractionDigits: {
      control: "number",
    },
    minimumSignificantDigits: {
      control: "number",
    },
    maximumSignificantDigits: {
      control: "number",
    },
    useGrouping: {
      control: "boolean",
    },
    notation: {
      control: "select",
      options: ["standard", "scientific", "engineering", "compact"],
    },
    compactDisplay: {
      control: "select",
      options: ["short", "long"],
    },
  },
} as Meta<typeof FormatNumber>;

type Story = StoryObj<typeof FormatNumber>;

export const Primary: Story = {
  args: {
    value: 123456.789,
  },
};

export const AsPercent: Story = {
  args: {
    ...Primary.args,
    value: 0.1234,
    style: "percent",
  },
};

export const AsUnit: Story = {
  args: {
    ...Primary.args,
    style: "unit",
    unit: "meter",
    unitDisplay: "long",
  },
  argTypes: {
    unit: {
      control: "text",
    },
    unitDisplay: {
      control: "select",
      options: ["long", "short", "narrow"],
    },
  },
};

export const AsCurrency: Story = {
  args: {
    ...Primary.args,
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
    currencySign: "standard",
  },
  argTypes: {
    currency: {
      control: "select",
      options: ["USD", "EUR", "JPY", "CNY"],
    },
    currencyDisplay: {
      control: "select",
      options: ["symbol", "narrowSymbol", "code", "name"],
    },
    currencySign: {
      control: "select",
      options: ["standard", "accounting"],
    },
  },
};
