import { Meta, StoryObj } from "@storybook/react";
import SearchInput from ".";
import { TextInputControls } from "../../storybook";

const meta: Meta<typeof SearchInput> = {
  title: "Inputs/User Input/SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSubmit: { control: false, table: { category: "Events" } },
    ...TextInputControls,
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
