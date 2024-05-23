import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextField } from ".";
import { FieldLabel } from "../Field/FieldLabel";
import { FieldMessage } from "../Field/FieldMessage";
import { FieldInput } from "../Field/FieldInput";
import { FieldErrorMessage } from "../Field/FieldError";
import { FieldTextArea } from "../Field/FieldTextArea";
import { Group } from "../../Layout/Group";
import IconButton from "../../Buttons/IconButton";
import { FieldStateControls } from "@sb/helpers";

export default {
  title: "Fields/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
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
    size: "large",
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
    ...Primary.args,
    children: [
      <FieldLabel key="label">Label</FieldLabel>,
      <FieldMessage key="message">Message</FieldMessage>,
      <FieldTextArea key="textarea" />,
      <FieldErrorMessage key="error">Error Message</FieldErrorMessage>,
    ],
  },
};

export const WithButton: Story = {
  args: {
    ...Primary.args,
    children: [
      <FieldLabel key="label">Username</FieldLabel>,
      <Group isMerged key="group">
        <FieldInput key="input" placeholder="Jon@then" />
        <IconButton key="button" icon="add" aria-label="add user" />
      </Group>,
      <FieldErrorMessage key="error">Error Message</FieldErrorMessage>,
    ],
  },
};
