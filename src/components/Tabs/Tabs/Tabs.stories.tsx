import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tabs from ".";
import Tab from "./Tab";
import TabsNavigation, { TabLink } from "./TabNavigation";
import { TabsContent } from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Tabs/Tabs",
  component: Tabs,
  argTypes: {
    currentTab: {
      control: "select",
      options: ["tab1", "tab2"],
    },
    children: {
      control: false,
    },
    onChange: {
      control: false,
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Navigation key="nav">
        <Tabs.Link to="tab1">Tab One</Tabs.Link>
        <Tabs.Link to="tab2">Tab Two</Tabs.Link>
      </Tabs.Navigation>
      <Tabs.Content key="content">
        <Tabs.Tab name="tab1">
          <div>
            <h2>First Tab</h2>
          </div>
        </Tabs.Tab>
        <Tabs.Tab name="tab2">
          <div>
            <h2>Second Tab</h2>
          </div>
        </Tabs.Tab>
      </Tabs.Content>
    </Tabs>
  ),
  args: {
    currentTab: "tab1",
  },
};
