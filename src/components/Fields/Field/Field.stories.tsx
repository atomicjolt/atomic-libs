import { Meta, StoryObj } from "@storybook/react";
import { Field } from ".";
import { FieldLabel } from "./FieldLabel";
import { FieldInput } from "./FieldInput";
import { FieldErrorMessage } from "./FieldError";
import { FieldMessage } from "./FieldMessage";
import { FieldStateControls } from "@sb/helpers";

export default {
  title: "Fields/Field",
  component: Field,
  argTypes: {
    ...FieldStateControls,
  },
} as Meta<typeof Field>;

type Story = StoryObj<typeof Field>;

export const Default: Story = {
  args: {
    children: [
      <FieldLabel key="label">Label</FieldLabel>,
      <FieldMessage key="message">Message</FieldMessage>,
      <FieldInput key="input" />,
      <FieldErrorMessage key="error">Error Message</FieldErrorMessage>,
    ],
  },
};
