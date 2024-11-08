import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextInputControls } from "@sb/helpers";
import { ComboBox } from ".";
import { Item } from "../../Collection";
import { getCssProps } from "@sb/cssprops";

const meta: Meta<typeof ComboBox> = {
  title: "Dropdowns/Selection/Combobox",
  component: ComboBox,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Dropdown", "Input", "Listbox"),
  },
  argTypes: {
    ...TextInputControls,
    variant: {
      table: { category: "Presentation" },
    },
    children: { control: false },
    allowsCustomValue: {
      control: "boolean",
      description:
        "Whether the ComboBox allows the user to enter a custom value. If true, the ComboBox will allow the user to enter a value that is not in the list of options. If false, the ComboBox will only allow the user to select from the list of options.",
    },
    defaultInputValue: {
      control: "text",
      description:
        "The default value of the input field for an uncontrolled comobox",
    },
    inputValue: {
      control: "text",
      description: "The value of the input field for a controlled combobox.",
    },
    defaultSelectedKey: {
      control: "select",
      options: ["1", "2"],
      description: "Key of the selected item for an uncontrolled component.",
    },
    selectedKey: {
      control: "select",
      options: ["1", "2"],
      description: "Key of the selected item for a controlled component.",
    },
    disabledKeys: {
      control: "multi-select",
      options: ["1", "2", "3"],
      description: "Array of the disabled keys.",
    },
    menuTrigger: {
      control: "select",
      options: ["manual", "input", "focus"],
      description:
        "Controls when the dropdown menu is shown. `manual` will only show the dropdown when the user clicks the button. `input` will show the dropdown when the input is focused & the user enters input. `focus` will show the dropdown when the input is focused",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ComboBox>;

export const Primary: Story = {
  args: {
    label: "Combobox label",
    menuTrigger: "focus",
    children: [
      <Item key="1" id="1">
        Option 1
      </Item>,
      <Item key="2" id="2">
        Option 2
      </Item>,
      <Item key="3" id="3">
        Option 3
      </Item>,
    ],
  },
};

export const Floating: Story = {
  args: {
    ...Primary.args,
    variant: "floating",
  },
};

export const PrefixIcon: Story = {
  args: {
    ...Primary.args,
    prefixIcon: "search",
    icon: "arrow_drop_down",
    size: "large",
  },
};

export const ScollingDropdown: Story = {
  args: {
    ...Primary.args,
    children: [
      <Item key="1" id="1">
        Option 1
      </Item>,
      <Item key="2" id="2">
        Option 2
      </Item>,
      <Item key="3" id="3">
        Option 3
      </Item>,
      <Item key="4" id="4">
        Option 4
      </Item>,
      <Item key="5" id="5">
        Option 5
      </Item>,
      <Item key="6" id="6">
        Option 6
      </Item>,
      <Item key="7" id="7">
        Option 7
      </Item>,
      <Item key="8" id="8">
        Option 8
      </Item>,
      <Item key="9" id="9">
        Option 9
      </Item>,
      <Item key="10" id="10">
        Option 10
      </Item>,
      <Item key="11" id="11">
        Option 11
      </Item>,
      <Item key="12" id="12">
        Option 12
      </Item>,
      <Item key="13" id="13">
        Option 13
      </Item>,
      <Item key="14" id="14">
        Option 14
      </Item>,
      <Item key="15" id="15">
        Option 15
      </Item>,
      <Item key="16" id="16">
        Option 16
      </Item>,
      <Item key="17" id="17">
        Option 17
      </Item>,
      <Item key="18" id="18">
        Option 18
      </Item>,
      <Item key="19" id="19">
        Option 19
      </Item>,
      <Item key="20" id="20">
        Option 20
      </Item>,
    ],
  },
};

export const DynamicCollection: Story = {
  render: () => {
    let options = [
      { id: 1, name: "Aerospace" },
      { id: 2, name: "Mechanical" },
      { id: 3, name: "Civil" },
    ];

    return (
      <ComboBox label="Pick a engineering major" items={options}>
        {(item) => <Item>{item.name}</Item>}
      </ComboBox>
    );
  },
  args: {
    ...Primary.args,
  },
};
