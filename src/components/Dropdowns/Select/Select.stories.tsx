import { ComponentMeta, ComponentStory } from "@storybook/react";
import Select, { Props } from ".";

export default {
  title: "Dropdowns/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: Props) => (
  <Select {...args}>
    <option>- Select an option -</option>
  </Select>
);

export const Default = Template.bind({});
Default.args = {
  label: "Select label",
};

// Additional stories go here
