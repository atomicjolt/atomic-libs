import { Meta, StoryObj } from "@storybook/react";
import SearchInput from ".";
import { NewTextInputControls } from "../../storybook";

const meta: Meta<typeof SearchInput> = {
  title: "Inputs/User Input/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSubmit: { control: false, table: { category: "Events" } },
    ...NewTextInputControls,
  },
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Primary: Story = {
  args: {
    label: "Search input label",
    onSubmit: (value: string) => alert(`Search for: ${value}`),
  },
};
