import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomDropdown, { Props } from ".";

export default {
  title: "Dropdowns/CustomDropdown",
  component: CustomDropdown,
} as ComponentMeta<typeof CustomDropdown>;

const Template: ComponentStory<typeof CustomDropdown> = (args: Props) => {
  return <CustomDropdown {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Custom Dropdown Label",
  children: [
    <CustomDropdown.Item key={1} onClick={() => alert("Clicked Option 1")}>
      Option 1
    </CustomDropdown.Item>,
    <CustomDropdown.Item key={2} onClick={() => alert("Clicked Option 2")}>
      Option 2
    </CustomDropdown.Item>,
  ],
};

// Additional stories go here
