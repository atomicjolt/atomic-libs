import { Meta, StoryObj } from "@storybook/react";
import { ComboInput } from ".";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import IconButton from "../../Buttons/IconButton";
import { Input } from "../Atoms/Input";
import { NumberField } from "../NumberField";
import { FieldInput } from "../Field/FieldInput";
import { Group } from "@components/Layout/Group";

export default {
  title: "Fields/ComboInput",
  component: ComboInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    padding: {
      control: "multi-select",
      options: ["left", "right"],
    },
  },
} as Meta<typeof ComboInput>;

type Story = StoryObj<typeof ComboInput>;

export const Primary: Story = {
  args: {
    children: [
      <MaterialIcon icon="search" key="icon" />,
      <Input placeholder="Search" key="actual-input" />,
    ],
  },
};

export const NumberInputWithSearch: Story = {
  render: (args) => <ComboInput {...args}></ComboInput>,
  args: {
    padding: "left",
    children: [
      <Input key="input" />,
      <span key="total">/10</span>,
      <IconButton icon="search" variant="ghost" key="icon" />,
    ],
  },
};

export const NumberFieldWithButtons: Story = {
  render: (args) => (
    <NumberField>
      <ComboInput {...args}>
        <FieldInput />
        <Group gap={0}>
          <NumberField.DecrementButton
            icon="remove"
            variant="ghost"
            size="small"
          />
          <NumberField.IncrementButton
            icon="add"
            variant="ghost"
            size="small"
          />
        </Group>
      </ComboInput>
    </NumberField>
  ),
  args: {
    padding: "left",
  },
};
