import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomDropdownFloating from ".";
import CustomDropdown, { CustomDropdownProps } from "../CustomDropdown";
import Doc from "./CustomDropdownFloating.doc.mdx";
import { DefaultInputProperties } from "../../../utils";

export default {
  title: "Dropdowns/CustomDropdownFloating",
  component: CustomDropdownFloating,
  parameters: {
    docs: {
      page: Doc,
    },
  },
} as ComponentMeta<typeof CustomDropdownFloating>;

const Template: ComponentStory<typeof CustomDropdownFloating> = (
  args: CustomDropdownProps<any>
) => <CustomDropdownFloating {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: "val1",
  ...DefaultInputProperties,
  label: "Custom Select Label",
  children: [
    <CustomDropdownFloating.Option value="val1" key="1">
      Option 1
    </CustomDropdownFloating.Option>,
    <CustomDropdownFloating.Option value="val2" key="2">
      Option 2
    </CustomDropdownFloating.Option>,
  ],
};
