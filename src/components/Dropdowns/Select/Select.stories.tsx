import { ComponentMeta, ComponentStory } from "@storybook/react";
import Select, { Props } from ".";

export default {
  title: "Dropdowns/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: Props) => (
  <Select {...args}>
    <option value="none">- Select an option -</option>
    <option value="value1">Option 1</option>
    <option value="value2">Option 2</option>
  </Select>
);

export const Default = Template.bind({});
Default.args = {
  value: "none",
  label: "Select label",
  message: "",
  hideLabel: false,
  error: "",
  disabled: false,
  required: false,
  size: "medium",
};

// Additional stories go here
