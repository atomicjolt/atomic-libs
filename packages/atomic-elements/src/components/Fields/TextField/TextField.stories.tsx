import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { TextField } from ".";
import { Label } from "../Atoms/Label";
import { Message } from "../Atoms/Message";
import { Input } from "../Atoms/Input";
import { ErrorMessage } from "../Atoms/ErrorMessage";
import { TextArea } from "../Atoms/TextArea";
import { Group } from "../../Layout/Group";
import { IconButton } from "../../Buttons/IconButton";
import { FieldStateControls, LoadingArgTypes } from "@sb/helpers";

export default {
  title: "Fields/TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...FieldStateControls,
    ...LoadingArgTypes,
    type: {
      control: "select",
      options: ["text", "email", "password", "search", "tel", "url"],
      description: "Type of the input element",
      table: { defaultValue: { summary: '"text"' } },
    },
    defaultValue: {
      control: "text",
      description: "Initial value (uncontrolled)",
    },
    value: {
      control: "text",
      description: "Value (controlled)",
    },
    onChange: {
      action: "onChange",
      description: "Handler that is called when the input value changes",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof TextField>;

type Story = StoryObj<typeof TextField>;

export const Primary: Story = {
  args: {
    size: "large",
    children: [
      <Label key="label">Label</Label>,
      <Message key="message">Message</Message>,
      <Input key="input" />,
      <ErrorMessage key="error">Error Message</ErrorMessage>,
    ],
  },
};

export const ForTextArea: Story = {
  args: {
    ...Primary.args,
    children: [
      <Label key="label">Label</Label>,
      <Message key="message">Message</Message>,
      <TextArea key="textarea" />,
      <ErrorMessage key="error">Error Message</ErrorMessage>,
    ],
  },
};

export const Loading: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingLabel: "Loading",
  },
};

export const WithButton: Story = {
  args: {
    ...Primary.args,
    children: [
      <Label key="label">Username</Label>,
      <Group isMerged key="group">
        <Input key="input" placeholder="Enter a username" />
        <IconButton key="button" icon="add" aria-label="add user" />
      </Group>,
      <ErrorMessage key="error">Error Message</ErrorMessage>,
    ],
  },
};
