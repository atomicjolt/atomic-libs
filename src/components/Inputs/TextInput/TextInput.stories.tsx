import { Meta, StoryObj } from "@storybook/react";
import TextInput from ".";
import { NewTextInputControls } from "../../storybook";

const meta: Meta<typeof TextInput> = {
  title: "Inputs/User Input/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...NewTextInputControls,
    variant: { table: { category: "Presentation" } },
    type: {
      control: "select",
      options: ["text", "password", "email", "tel", "number", "search"],
    },
    minLength: { control: "number" },
    maxLength: { control: "number" },
  },
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Primary: Story = {
  args: {
    type: "text",
    variant: "default",
    label: "Text input label",
  },
};

export const Floating: Story = {
  args: {
    ...Primary.args,
    variant: "floating",
  },
};
