import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabsC from ".";
import { TabsContent, TabsProps } from "./Tabs";
import Tab from "./Tab";
import TabsNavigation, { TabLink } from "./TabNavigation";

export default {
  title: "Tabs/Tabs",
  component: TabsC,
  subcomponents: {
    "Tabs.Tab": Tab,
    "Tabs.Link": TabLink,
    "Tabs.Navigation": TabsNavigation,
    "Tabs.Content": TabsContent,
  },
  argTypes: {
    currentTab: {
      control: "select",
      options: ["tab1", "tab2"],
    },
    children: {
      control: false,
    },
  },
} as ComponentMeta<typeof TabsC>;

const Template: ComponentStory<typeof TabsC> = (args: TabsProps<string>) => (
  <TabsC {...args} />
);

export const Tabs = Template.bind({});
Tabs.args = {
  currentTab: "tab1",
  children: [
    <TabsC.Navigation key="nav">
      <TabsC.Link to="tab1">Tab One</TabsC.Link>
      <TabsC.Link to="tab2">Tab Two</TabsC.Link>
    </TabsC.Navigation>,
    <TabsC.Content key="content">
      <TabsC.Tab name="tab1">
        <div>
          <h2>First Tab</h2>
        </div>
      </TabsC.Tab>
      <TabsC.Tab name="tab2">
        <div>
          <h2>Second Tab</h2>
        </div>
      </TabsC.Tab>
    </TabsC.Content>,
  ],
};
