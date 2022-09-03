import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomDropdown, { CustomDropdownProps } from ".";
import { DefaultInputProperties } from "../../../utils";
import MaterialIcon from "../../Utility/MaterialIcon";
import { Option, EmptyOption } from "./Option";

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

const Template: ComponentStory<typeof CustomDropdown> = (
  args: CustomDropdownProps<any>
) => {
  return <CustomDropdown {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  value: "val1",
  variant: "default",
  ...DefaultInputProperties,
  placeholder: undefined,
  label: "Custom Select Label",
  children: [
    <Option value="val1" key="1">
      Option 1
    </Option>,
    <Option value="val2" key="2">
      Option 2
    </Option>,
  ],
};

export const WithEmpty = Template.bind({});
WithEmpty.args = {
  ...Default.args,
  value: null,
  children: [
    <EmptyOption key="empty">-- Select an Option --</EmptyOption>,
    ...Default.args.children,
  ],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...Default.args,
  children: [
    <Option value="val1" key="1">
      <MaterialIcon icon="search" />
      Option 1
    </Option>,
    <Option value="val2" key="2">
      <MaterialIcon icon="u_turn_left" />
      Option 2
    </Option>,
  ],
};
