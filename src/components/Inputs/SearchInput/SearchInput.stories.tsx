import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchInputComponent, { SearchInputProps } from ".";
import { DefaultInputProperties, TextInputControls } from "../../storybook";

export default {
  title: "Inputs/SearchInput",
  component: SearchInputComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSubmit: { control: false, table: { category: "Events" } },
    ...TextInputControls,
  },
} as ComponentMeta<typeof SearchInputComponent>;

const Template: ComponentStory<typeof SearchInputComponent> = (
  args: SearchInputProps
) => <SearchInputComponent {...args} />;

export const SearchInput = Template.bind({});
SearchInput.args = {
  value: "",
  submitButton: false,
  ...DefaultInputProperties,
  label: "Search input label",
};
