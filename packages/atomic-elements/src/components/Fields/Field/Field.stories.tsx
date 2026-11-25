import { Meta, StoryObj } from "@storybook/react-vite";
import { Field } from ".";
import { Label } from "../Atoms/Label";
import { Input } from "../Atoms/Input";
import { ErrorMessage } from "../Atoms/ErrorMessage";
import { Message } from "../Atoms/Message";
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
      <Label key="label">Label</Label>,
      <Message key="message">Message</Message>,
      <Input key="input" />,
      <ErrorMessage key="error">Error Message</ErrorMessage>,
    ],
  },
};
