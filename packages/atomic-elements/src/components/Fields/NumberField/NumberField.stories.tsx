import React, { useLayoutEffect } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { NumberField } from ".";
import { FieldLabel } from "../Field/FieldLabel";
import { FieldMessage } from "../Field/FieldMessage";
import { FieldInput } from "../Field/FieldInput";
import { FieldErrorMessage } from "../Field/FieldError";
import { Group } from "../../Layout/Group";
import { FieldStateControls } from "@sb/helpers";
import { IconButton } from "@components/Buttons/IconButton";

// For some reason, without this line NumberField has the
// incorrect display name in the storybook docs
// @ts-ignore
NumberField.displayName = "NumberField";

export default {
  title: "Fields/NumberField",
  component: NumberField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...FieldStateControls,
    onChange: { action: "onChange", table: { category: "Events" } },
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
    "data-float": {
      table: {
        disable: true,
      },
    },
    "data-resize": {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof NumberField>;

type Story = StoryObj<typeof NumberField>;

export const Primary: Story = {
  args: {
    size: "large",
    children: [
      <FieldLabel key="label">Label</FieldLabel>,
      <FieldMessage key="message">Message</FieldMessage>,
      <Group isMerged key="group">
        <IconButton slot="decrement" icon="remove" />
        <FieldInput key="input" />
        <IconButton slot="increment" icon="add" />
      </Group>,
      <FieldErrorMessage key="error">Error Message</FieldErrorMessage>,
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
