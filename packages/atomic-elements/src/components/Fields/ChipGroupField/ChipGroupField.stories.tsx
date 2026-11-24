import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { MultiSelectionArgTypes } from "@sb/helpers";
import { ChipGroupField } from ".";
import { Label } from "../Atoms/Label";
import { Message } from "../Atoms/Message";
import { ErrorMessage } from "../Atoms/ErrorMessage";
import { Chip } from "@components/Chips/Chip";

export default {
  title: "Fields/ChipGroupField",
  component: ChipGroupField,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // Options match the chip ids used in the stories below.
    ...MultiSelectionArgTypes,
    onRemove: {
      action: "onRemove",
      description: "Handler called when a user deletes a chip",
      table: {
        category: "Events",
      },
    },
  },
} as Meta<typeof ChipGroupField>;

type Story = StoryObj<typeof ChipGroupField>;

const chips = (
  <ChipGroupField.List key="list">
    <Chip id="news">News</Chip>
    <Chip id="travel">Travel</Chip>
    <Chip id="gaming">Gaming</Chip>
    <Chip id="shopping">Shopping</Chip>
  </ChipGroupField.List>
);

export const Primary: Story = {
  args: {
    children: [<Label key="label">Label</Label>, chips],
  },
};

export const Removable: Story = {
  args: {
    ...Primary.args,
    onRemove: fn(),
  },
};

export const Selectable: Story = {
  args: {
    selectionMode: "multiple",
    defaultSelectedKeys: ["news", "gaming"],
    children: [
      <Label key="label">Interests</Label>,
      <Message key="message">Pick the topics you want to follow</Message>,
      chips,
    ],
  },
};

export const Invalid: Story = {
  args: {
    isInvalid: true,
    children: [
      <Label key="label">Interests</Label>,
      chips,
      <ErrorMessage key="error">Pick at least one topic</ErrorMessage>,
    ],
  },
};
