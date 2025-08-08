import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { SearchField } from ".";
import { FieldLabel } from "../Field/FieldLabel";
import { FieldMessage } from "../Field/FieldMessage";
import { FieldInput } from "../Field/FieldInput";
import { FieldErrorMessage } from "../Field/FieldError";
import { ComboInput } from "../ComboInput";
import { IconButton } from "../../Buttons/IconButton";
import { FieldStateControls } from "@sb/helpers";

export default {
  title: "Fields/SearchField",
  component: SearchField,
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
    onSubmit: {
      action: "onSubmit",
      description: "Handler that is called when the search is submitted",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof SearchField>;

type Story = StoryObj<typeof SearchField>;

export const Primary: Story = {
  args: {
    size: "large",
    children: [
      <FieldLabel key="label">Search</FieldLabel>,
      <FieldMessage key="message">Enter your search terms</FieldMessage>,
      <ComboInput key="combo" padding="both">
        <FieldInput key="input" />
        <IconButton
          key="button"
          icon="search"
          variant="content"
          aria-label="search"
        />
      </ComboInput>,
      <FieldErrorMessage key="error">Error Message</FieldErrorMessage>,
    ],
  },
};
