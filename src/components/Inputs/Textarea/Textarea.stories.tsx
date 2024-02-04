import { Meta, StoryObj } from "@storybook/react";
import Textarea from ".";
import { NewTextInputControls } from "../../storybook";

const meta: Meta<typeof Textarea> = {
  title: "Inputs/User Input/Textarea",
  component: Textarea,
  argTypes: {
    ...NewTextInputControls,
    onChange: { action: "changed", table: { category: "Events" } },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Primary: Story = {
  args: {
    defaultValue: "Textarea content",
    resize: "both",
    size: "full",
    label: "Textarea label",
    message: "1000 characters",
  },
};
