import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tabs, { Tab, Props } from ".";
import Doc from "./Tabs.doc.mdx";

export default {
  title: "Tabs/Tabs",
  component: Tabs,
  subcomponents: {
    Tab,
  },
  parameters: {
    docs: {
      page: Doc,
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args: Props) => (
  <Tabs {...args} />
);

export const TabsUncontrolled = Template.bind({});
TabsUncontrolled.args = {
  tabs: { tab1: { label: "Tab One", notification: "error" }, tab2: "Tab Two" },
  children: [
    <Tab name="tab1" key="key1">
      <div>
        <h2>First Tab</h2>
      </div>
    </Tab>,
    <Tab name="tab2" key="key2">
      <div>
        <h2>Second Tab</h2>
      </div>
    </Tab>,
  ],
};

TabsUncontrolled.argTypes = {
  currentTab: {
    control: false,
  },
};

export const TabsControlled = Template.bind({});
TabsControlled.args = {
  tabs: { tab1: { label: "Tab One", notification: "error" }, tab2: "Tab Two" },
  currentTab: "tab1",
  children: [
    <Tab name="tab1" key="key1">
      <div>
        <h2>First Tab</h2>
      </div>
    </Tab>,
    <Tab name="tab2" key="key2">
      <div>
        <h2>Second Tab</h2>
      </div>
    </Tab>,
  ],
};

TabsControlled.argTypes = {
  currentTab: {
    control: "select",
    options: ["tab1", "tab2"],
  },
};
