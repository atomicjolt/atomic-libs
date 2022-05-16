import { ComponentMeta, ComponentStory } from "@storybook/react";
import Combobox, { Props } from ".";

export default {
  title: "Dropdowns/Combobox",
  component: Combobox,
} as ComponentMeta<typeof Combobox>;

const Template: ComponentStory<typeof Combobox> = (args: Props) => (
  <Combobox {...args}>
    <span>Option 1</span>
  </Combobox>
);

export const Default = Template.bind({});
Default.args = {
  label: "Combobox label",
};

// Additional stories go here
