import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from ".";
import { Item } from "../../Utility/Collection";

const meta: Meta<typeof Tabs> = {
  title: "Layouts/Tabs",
  component: Tabs,
  argTypes: {
    selectedKey: {
      control: "select",
      options: ["tab1", "tab2"],
      description: "The key of the selected tab in a controlled component.",
    },
    defaultSelectedKey: {
      control: "select",
      options: ["tab1", "tab2"],
      description: "The key of the selected tab in an uncontrolled component.",
    },
    children: {
      control: false,
    },
    disabledKeys: {
      control: "select",
      options: ["None", "Tab 1", "Tab 2", "Both Tabs"],
      mapping: {
        None: [],
        "Tab 1": ["tab1"],
        "Tab 2": ["tab2"],
        "All Tabs": ["tab1", "tab2", "tab3"],
      },
      description: "An array of keys to disable.",
    },
    isDisabled: {
      control: "boolean",
      description: "Whether the entire tab component is disabled.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  args: {
    children: [
      <Item key="tab1" title="Tab 1">
        <h1>Tab One</h1>
      </Item>,
      <Item key="tab2" title="Tab 2">
        <h1>Tab Two</h1>
      </Item>,
      <Item key="tab3" title="Tab 3">
        <h1>Tab Three</h1>
      </Item>,
    ],
  },
};
