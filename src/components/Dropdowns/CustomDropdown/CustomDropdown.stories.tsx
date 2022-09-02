import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomDropdown, { Props } from ".";
import { DefaultInputProperties } from "../../../utils";
import MaterialIcon from "../../Utility/MaterialIcon";

export default {
  title: "Dropdowns/CustomDropdown",
  component: CustomDropdown,
  argTypes: {
    value: {
      control: "select",
      options: ["val1", "val2", null],
    },
  },
} as ComponentMeta<typeof CustomDropdown>;

const Template: ComponentStory<typeof CustomDropdown> = (args: Props<any>) => {
  return <CustomDropdown {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  value: "val1",
  ...DefaultInputProperties,
  label: "Custom Select Label",
  children: [
    <CustomDropdown.Option value="val1" key="1">
      Option 1
    </CustomDropdown.Option>,
    <CustomDropdown.Option value="val2" key="2">
      Option 2
    </CustomDropdown.Option>,
  ],
};

export const WithEmpty = Template.bind({});
WithEmpty.args = {
  value: null,
  children: [
    <CustomDropdown.Empty key="empty">
      -- Select an Option --
    </CustomDropdown.Empty>,
    ...Default.args.children,
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...Default.args,
  children: [
    <CustomDropdown.Option value="val1" key="1">
      <MaterialIcon icon="search" />
      Option 1
    </CustomDropdown.Option>,
    <CustomDropdown.Option value="val2" key="2">
      <MaterialIcon icon="u_turn_left" />
      Option 2
    </CustomDropdown.Option>,
  ],
};
