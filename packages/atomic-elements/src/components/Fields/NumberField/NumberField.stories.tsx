import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { NumberField } from ".";
import { Label } from "../Atoms/Label";
import { Message } from "../Atoms/Message";
import { Input } from "../Atoms/Input";
import { ErrorMessage } from "../Atoms/ErrorMessage";
import { Group } from "../../Layout/Group";
import { FieldStateControls, LoadingArgTypes } from "@sb/helpers";

export default {
  title: "Fields/NumberField",
  component: NumberField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...FieldStateControls,
    ...LoadingArgTypes,
    onChange: {
      action: "onChange",
      description: "Handler called when the numeric value changes",
      table: { category: "Events" },
    },
    step: {
      control: "number",
      description: "Amount to increment or decrement by",
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
    value: {
      control: "number",
      description: "Value of the input when controlled",
    },
  },
} as Meta<typeof NumberField>;

type Story = StoryObj<typeof NumberField>;

export const Primary: Story = {
  args: {
    size: "large",
    children: [
      <Label key="label">Label</Label>,
      <Message key="message">Message</Message>,
      <Group isMerged key="group">
        <NumberField.DecrementButton icon="remove" />
        <Input key="input" />
        <NumberField.IncrementButton icon="add" />
      </Group>,
      <ErrorMessage key="error">Error Message</ErrorMessage>,
    ],
  },
};

export const WithBounds: Story = {
  args: {
    ...Primary.args,
    minValue: 0,
    maxValue: 10,
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
