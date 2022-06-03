import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tabs, { Tab, Props } from ".";
import Doc from "./Doc.mdx";

export default {
  title: "Tabs/Tabs",
  component: Tabs,
  parameters: {
    docs: {
      page: Doc,
    },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args: Props) => (
  <Tabs {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tabs: { tab1: { label: "Tab One", notification: "error" }, tab2: "Tab Two" },
  children: [
    <Tab name="tab1" key="key1">
      <div style={{ paddingTop: "3em" }}>
        <h2>First Tab</h2>
      </div>
    </Tab>,
    <Tab name="tab2" key="key2">
      <div style={{ paddingTop: "3em" }}>
        <h2>Second Tab</h2>
      </div>
    </Tab>,
  ],
};

// Additional stories go here
