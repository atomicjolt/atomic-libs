import { Meta, StoryObj } from "@storybook/react";
import TextAreaInput from ".";
import { TextInputControls } from "../../storybook";

const meta: Meta<typeof TextAreaInput> = {
  title: "Inputs/User Input/TextAreaInput",
  component: TextAreaInput,
  argTypes: {
    ...TextInputControls,
    onChange: { action: "changed", table: { category: "Events" } },
  },
};

export default meta;

type Story = StoryObj<typeof TextAreaInput>;

export const Primary: Story = {
  args: {
    defaultValue: "Textarea content",
    resize: "both",
    size: "full",
    label: "Textarea label",
    message: "1000 characters",
  },
};
