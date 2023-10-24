import { Meta, StoryObj } from "@storybook/react";
import TextInput from ".";
import {
  InputControls,
  DefaultInputProperties,
  TextInputControls,
} from "../../storybook";

const meta: Meta<typeof TextInput> = {
  title: "Inputs/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  argTypes: TextInputControls,
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Controlled: Story = {
  args: {
    value: "Text input content",
    type: "text",
    variant: "default",
    ...DefaultInputProperties,
    label: "Text input label",
    placeholder: "",
    readOnly: false,
  },
};

export const Uncontrolled: Story = {
  args: {
    value: undefined,
    type: "text",
    variant: "default",
    ...DefaultInputProperties,
    label: "Text input label",
    placeholder: "",
    readOnly: false,
  },
  argTypes: {
    value: {
      control: false,
    },
    ...InputControls,
  },
};
