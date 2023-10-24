import { Meta, StoryObj } from "@storybook/react";
import NumberInput from ".";
import {
  DefaultInputProperties,
  UncontrolledInputControls,
  TextInputControls,
} from "../../storybook";

const meta: Meta<typeof NumberInput> = {
  title: "Inputs/NumberInput",
  component: NumberInput,
  parameters: {
    layout: "centered",
  },
  argTypes: TextInputControls,
};

export default meta;

type Story = StoryObj<typeof NumberInput>;

export const Controlled: Story = {
  args: {
    value: 10,
    min: 0,
    max: 100,
    ...DefaultInputProperties,
    size: "small",
    label: "Number input label",
  },
};

export const Uncontrolled: Story = {
  args: {
    min: 0,
    max: 10,
    label: "Number input label",
  },
  argTypes: UncontrolledInputControls,
};
