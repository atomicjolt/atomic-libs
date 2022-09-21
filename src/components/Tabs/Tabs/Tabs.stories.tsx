import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import TabsComponent, { Tab, TabLink, TabsNavigation } from ".";
import { TabsContent, TabsProps } from "./Tabs";

export default {
  title: "Tabs/Tabs",
  component: TabsComponent,
  subcomponents: {
    Tab,
    TabLink,
    TabsNavigation,
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
} as ComponentMeta<typeof TabsComponent>;

const Template: ComponentStory<typeof TabsComponent> = (
  args: TabsProps<string>
) => <TabsComponent {...args} />;

export const Tabs = Template.bind({});
Tabs.args = {
  currentTab: "tab1",
  children: [
    <TabsNavigation key="nav">
      <TabLink to="tab1">Tab One</TabLink>
      <TabLink to="tab2">Tab Two</TabLink>
    </TabsNavigation>,
    <TabsContent key="content">
      <Tab name="tab1">
        <div>
          <h2>First Tab</h2>
        </div>
      </Tab>
      <Tab name="tab2">
        <div>
          <h2>Second Tab</h2>
        </div>
      </Tab>
    </TabsContent>,
  ],
};
