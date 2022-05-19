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
  children: [
    <Tab label="Tab One" key="key1">
      <div style={{ paddingTop: "3em" }}>
        <h2>First Tab</h2>
      </div>
    </Tab>,
    <Tab label="Tab Two" key="key2">
      <div style={{ paddingTop: "3em" }}>
        <h2>Second Tab</h2>
      </div>
    </Tab>,
  ],
};

// Additional stories go here
