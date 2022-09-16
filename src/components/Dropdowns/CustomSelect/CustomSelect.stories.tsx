import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomSelect from ".";
import { DefaultInputProperties } from "../../storybook";
import MaterialIcon from "../../Utility/MaterialIcon";
import { Option, EmptyOption } from "./Option";
import { CustomSelectProps } from "./CustomSelect.types";
import Button from "../../Buttons/Button";

export default {
  title: "Dropdowns/CustomSelect",
  component: CustomSelect,
  argTypes: {
    value: {
      control: "select",
      options: ["val1", "val2", null],
    },
  },
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = (
  args: CustomSelectProps<any>
) => {
  return <CustomSelect {...args} />;
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

// const FloatingTemplate: ComponentStory<typeof FloatingCustomSelect> = (
//   args: CustomSelectProps<any>
// ) => {
//   return <FloatingCustomSelect {...args} />;
// };

// export const FloatingVariant = FloatingTemplate.bind({});
// FloatingVariant.args = Default.args;
