import { Meta, StoryObj } from "@storybook/react";
import { InputControls } from "@sb/helpers";
import { CustomSelect } from ".";
import { Item, Section } from "../../Collection";
import { getCssProps } from "@sb/cssprops";
import { MaterialIcon } from "@components/Icons/MaterialIcon";
import { Flex } from "@components/Layout/Flex";

const meta: Meta<typeof CustomSelect> = {
  title: "Dropdowns/Selection/CustomSelect",
  component: CustomSelect,
  parameters: {
    layout: "centered",
    cssprops: getCssProps("Dropdown", "Listbox", "Button"),
  },
  argTypes: {
    ...InputControls,
    variant: {
      control: "select",
      options: ["default", "floating"],
    },
    selectedKey: {
      control: "select",
      description:
        "Control the value of the selected key in a controlled component",
      options: ["val1", "val2", "val3", null],
    },
    defaultSelectedKey: {
      control: false,
      description:
        "Control the value of the selected key in an uncontrolled component",
    },
    children: {
      control: false,
    },
    isOpen: {
      control: "boolean",
      description: "Control the open state of the menu",
    },
    defaultOpen: {
      control: "boolean",
      description: "Control the inital state of the menu",
    },
    onOpenChange: {
      control: false,
      action: "onOpenChange",
      description: "Callback for when the menu is opened or closed",
      table: {
        category: "Events",
      },
    },
    onSelectionChange: {
      action: "onSelectionChange",
      control: false,
      description: "Callback for when the selection changes",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof CustomSelect>;

export const Primary: Story = {
  args: {
    size: "medium",
    variant: "default",
    label: "Custom Select Label",
    children: [
      <Item id="val1">Item 1</Item>,
      <Item id="val2">Item 2</Item>,
      <Item id="val3">Item 3</Item>,
    ],
  },
};

export const WithSections: Story = {
  args: {
    ...Primary.args,
    children: [
      <Item id="val1">Item 1</Item>,
      <Item id="val2">Item 2</Item>,
      <Item id="val3">Item 3</Item>,
      <Section title="Section Title">
        <Item id="val4">Item 4</Item>
        <Item id="val5">Item 5</Item>
      </Section>,
    ],
  },
};

export const Floating: Story = {
  args: {
    ...Primary.args,
    defaultSelectedKey: "undefined",
    variant: "floating",
  },
};

export const WithCustomContent: Story = {
  args: {
    ...Primary.args,
    children: [
      <Item key="1" textValue="Home">
        <Flex gap={4} alignItems="center">
          <MaterialIcon icon="home" />
          Home
        </Flex>
      </Item>,
      <Item key="2" textValue="Settings">
        <Flex gap={4} alignItems="center">
          <MaterialIcon icon="settings" />
          Settings
        </Flex>
      </Item>,
      <Item key="3" textValue="Profile">
        <Flex gap={4} alignItems="center">
          <MaterialIcon icon="account_circle" />
          Profile
        </Flex>
      </Item>,
    ],
  },
};
