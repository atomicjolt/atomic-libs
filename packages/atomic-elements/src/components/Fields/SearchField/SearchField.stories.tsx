import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SearchField } from ".";
import { Label } from "../Atoms/Label";
import { Message } from "../Atoms/Message";
import { Input } from "../Atoms/Input";
import { ErrorMessage } from "../Atoms/ErrorMessage";
import { ComboInput } from "../ComboInput";
import { IconButton } from "../../Buttons/IconButton";
import { FieldStateControls, RenderPropsArgTypes } from "@sb/helpers";

export default {
  title: "Fields/SearchField",
  component: SearchField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...FieldStateControls,
    ...RenderPropsArgTypes,
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
      description:
        "Handler that is called when the search is submitted. Either by clicking on a submit button or pressing the Enter key.",
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
    onChange: fn(),
    onSubmit: fn(),
    children: [
      <Label key="label">Search</Label>,
      <Message key="message">Enter your search terms</Message>,
      <Input key="input" />,
      <ErrorMessage key="error">Error Message</ErrorMessage>,
    ],
  },
};

export const WithSubmitButton: Story = {
  args: {
    ...Primary.args,
    children: [
      <Label key="label">Search</Label>,
      <Message key="message">Enter your search terms</Message>,
      <ComboInput key="combo" padding="both">
        <Input key="input" />
        <IconButton
          slot="submit"
          key="button"
          icon="search"
          variant="content"
          aria-label="search"
        />
      </ComboInput>,
      <ErrorMessage key="error">Error Message</ErrorMessage>,
    ],
  },
};

export const WithAdditionalAction: Story = {
  args: {
    ...Primary.args,
    children: [
      <Label key="label">Search</Label>,
      <Message key="message">Enter your search terms</Message>,
      <ComboInput key="combo" padding="both">
        <Input key="input" />
        <IconButton
          key="clear-button"
          icon="close"
          variant="content"
          aria-label="clear search"
        />
        <IconButton
          slot="submit"
          key="button"
          icon="search"
          variant="content"
          aria-label="search"
        />
      </ComboInput>,
      <ErrorMessage key="error">Error Message</ErrorMessage>,
    ],
  },
};
