import { Meta, StoryObj } from "@storybook/react";
import { ComboInput } from ".";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { IconButton } from "../../Buttons/IconButton";
import { Input } from "../Atoms/Input";
import { NumberField } from "../NumberField";
import { FieldInput } from "../Field/FieldInput";
import { Group } from "@components/Layout/Group";
import { Text } from "@components/Typography/Text";
import { RenderPropsArgTypes } from "@sb/helpers";

export default {
  title: "Fields/ComboInput",
  component: ComboInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    ...RenderPropsArgTypes,
    padding: {
      control: "select",
      options: ["left", "right", "both"],
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
    padding: "both",
  },
};

export const NumberInputWithSearch: Story = {
  render: (args) => <ComboInput {...args}></ComboInput>,
  args: {
    padding: "left",
    children: [
      <Input key="input" />,
      <Text key="text" $size="3">
        /10
      </Text>,
      <IconButton icon="search" variant="ghost" key="icon" />,
    ],
  },
};

export const NumberFieldWithButtons: Story = {
  render: (args) => (
    <NumberField>
      <ComboInput {...args}>
        <FieldInput />
        <Group>
          <IconButton slot="decrement" icon="remove" variant="ghost" />
          <IconButton slot="increment" icon="add" variant="ghost" />
        </Group>
      </ComboInput>
    </NumberField>
  ),
  args: {
    padding: "left",
  },
};
