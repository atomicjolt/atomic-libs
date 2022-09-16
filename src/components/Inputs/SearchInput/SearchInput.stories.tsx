import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchInputComponent, { SearchInputProps } from ".";
import {
  DefaultInputProperties,
  InputControls,
  inputProperties,
} from "../../storybook";

export default {
  title: "Inputs/SearchInput",
  component: SearchInputComponent,
  argTypes: InputControls,
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
