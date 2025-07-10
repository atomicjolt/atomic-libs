import { Meta, StoryObj } from "@storybook/react";
import { TextAreaInput } from ".";
import { TextInputControls } from "@sb/helpers";
import { getCssProps } from "@sb/cssprops";

const meta: Meta<typeof TextAreaInput> = {
  title: "Inputs/User Input/TextAreaInput",
  component: TextAreaInput,
  parameters: {
    cssprops: getCssProps("Input", "Textarea"),
  },
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
