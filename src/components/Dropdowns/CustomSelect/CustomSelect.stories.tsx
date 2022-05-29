import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import CustomSelect, { Props } from ".";
import MaterialIcon from "../../Utility/MaterialIcon";

export default {
  title: "Dropdowns/CustomSelect",
  component: CustomSelect,
  // subcomponents: {
  //   "CustomSelect.Item": CustomSelect.Item,
  //   "CustomSelect.Empty": CustomSelect.Empty,
  // },
} as ComponentMeta<typeof CustomSelect>;

const Template: ComponentStory<typeof CustomSelect> = (args: Props<any>) => {
  return <CustomSelect {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  value: "val1",
  label: "Custom Select Label",
  children: [
    <CustomSelect.Item value="val1" key="1">
      Option 1
    </CustomSelect.Item>,
    <CustomSelect.Item value="val2" key="2">
      Option 2
    </CustomSelect.Item>,
  ],
};

export const WithEmpty = Template.bind({});
WithEmpty.args = {
  ...Default.args,
  children: [<CustomSelect.Empty key="empty" />, ...Default.args.children],
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  ...Default.args,
  children: [
    <CustomSelect.Item value="val1" key="1">
      <MaterialIcon icon="search" />
      Option 1
    </CustomSelect.Item>,
    <CustomSelect.Item value="val2" key="2">
      <MaterialIcon icon="u_turn_left" />
      Option 2
    </CustomSelect.Item>,
  ],
};
