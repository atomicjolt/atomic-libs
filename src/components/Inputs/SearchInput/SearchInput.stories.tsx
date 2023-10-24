import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import SearchInput, { SearchInputProps } from ".";
import { DefaultInputProperties, TextInputControls } from "../../storybook";

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
  render: (args: SearchInputProps) => <SearchInput {...args} />,
  args: {
    value: "",
    submitButton: false,
    ...DefaultInputProperties,
    label: "Search input label",
  },
};
