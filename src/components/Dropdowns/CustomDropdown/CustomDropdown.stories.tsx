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
    <CustomDropdown.Item
      key={1}
      onClick={() => {
        console.log("Option 1 clicked");
      }}
    >
      Option 1
    </CustomDropdown.Item>,
    <CustomDropdown.Item
      key={2}
      onClick={() => {
        console.log("Option 2 clicked");
      }}
    >
      Option 2
    </CustomDropdown.Item>,
  ],
};

// Additional stories go here
