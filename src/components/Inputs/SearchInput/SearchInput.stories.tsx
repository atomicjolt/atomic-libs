import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchInput, { Props } from ".";

export default {
  title: "Inputs/SearchInput",
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args: Props) => (
  <SearchInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Search input label",
};

// Additional stories go here
