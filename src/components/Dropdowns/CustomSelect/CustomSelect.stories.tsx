import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomSelect from ".";
import {
  DefaultInputProperties,
  disableControl,
  InputControls,
  inputProperties,
} from "../../storybook";
import MaterialIcon from "../../Utility/MaterialIcon";
import Option from "../Option";
import { CustomSelectProps } from "./CustomSelect.types";

export default {
  title: "Dropdowns/CustomSelect",
  component: CustomSelect,
  argTypes: {
    value: {
      control: "select",
      options: ["val1", "val2", "val3", null],
    },
    ...InputControls,
    ...disableControl("children"),
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
  ...inputProperties({ filter: ["placeholder"] }),
  label: "Custom Select Label",
  searchable: false,
  searchPlaceholder: "Search...",
  children: [
    <Option value="val1" key="1">
      Option 1
    </Option>,
    <Option value="val2" key="2">
      Option 2
    </Option>,
    <Option value="val3" key="3">
      Option 3
    </Option>,
  ],
};

export const Seachable = Template.bind({});
Seachable.args = {
  ...Default.args,
  searchable: true,
  children: [
    <Option value="val1" searchKey="Option 1" key="1">
      Option 1
    </Option>,
    <Option value="val2" searchKey="Option 2" key="2">
      Option 2
    </Option>,
    <Option value="val3" searchKey="Option 3" key="3">
      Option 3
    </Option>,
  ],
};

export const WithEmpty = Template.bind({});
WithEmpty.args = {
  ...Default.args,
  value: null,
  children: [
    <Option value={null} key="empty">
      -- Select an Option --
    </Option>,
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

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  ...Default.args,
  value: ["val1", "val2"],
};

MultiSelect.argTypes = {
  value: {
    control: "multi-select",
    options: ["val1", "val2", "val3"],
  },
};
