import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextField } from ".";
import { FieldLabel } from "../Field/FieldLabel";
import { FieldMessage } from "../Field/FieldMessage";
import { FieldInput } from "../Field/FieldInput";
import { FieldErrorMessage } from "../Field/FieldError";
import { FieldTextArea } from "../Field/FieldTextArea";
import { FieldStateControls } from "../../storybook";

export default {
  title: "Fields/TextField",
  component: TextField,
  argTypes: {
    ...FieldStateControls,
    defaultValue: {
      control: "text",
    },
    value: {
      control: "text",
    },
    onChange: {
      action: "onChange",
      description: "Handler that is called when the input value changes",
      table: {
        category: "Events",
      },
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
} as Meta<typeof TextField>;

type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  args: {
    children: [
      <FieldLabel key="label">Label</FieldLabel>,
      <FieldMessage key="message">Message</FieldMessage>,
      <FieldInput key="input" />,
      <FieldErrorMessage key="error">Error Message</FieldErrorMessage>,
    ],
  },
};

export const ForTextArea: Story = {
  args: {
    children: [
      <FieldLabel key="label">Label</FieldLabel>,
      <FieldMessage key="message">Message</FieldMessage>,
      <FieldTextArea key="textarea" />,
      <FieldErrorMessage key="error">Error Message</FieldErrorMessage>,
    ],
  },
};
