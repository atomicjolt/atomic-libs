import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { SearchField } from ".";
import { Label } from "../Atoms/Label";
import { Message } from "../Atoms/Message";
import { Input } from "../Atoms/Input";
import { ErrorMessage } from "../Atoms/ErrorMessage";
import { ComboInput } from "../ComboInput";
import { IconButton } from "../../Buttons/IconButton";
import {
  FieldStateControls,
  RenderPropsArgTypes,
  LoadingArgTypes,
} from "@sb/helpers";

export default {
  title: "Fields/SearchField",
  component: SearchField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...FieldStateControls,
    ...LoadingArgTypes,
    ...RenderPropsArgTypes,
    defaultValue: {
      control: "text",
      description: "Initial search text (uncontrolled)",
    },
    value: {
      control: "text",
      description: "Search text (controlled)",
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
    onClear: {
      action: "onClear",
      description:
        "Handler that is called when the field is cleared, with Escape or a clear-slot button.",
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
          slot="clear"
          key="clear-button"
          icon="close"
          variant="content"
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
