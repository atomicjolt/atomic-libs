import { Meta, StoryObj } from "@storybook/react";
import { ChipGroupField } from ".";
import { Label } from "../Atoms/Label";
import { Chip } from "@components/Chips/Chip";

export default {
  title: "Fields/ChipGroupField",
  component: ChipGroupField,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof ChipGroupField>;

type Story = StoryObj<typeof ChipGroupField>;

export const Primary: Story = {
  args: {
    children: [
      <Label key="label">Label</Label>,
      <ChipGroupField.List key="list">
        <Chip>Chip 1</Chip>
        <Chip>Chip 2</Chip>
        <Chip>Chip 3</Chip>
      </ChipGroupField.List>,
    ],
  },
};
