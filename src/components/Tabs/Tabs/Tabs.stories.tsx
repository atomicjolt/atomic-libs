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
    info: {
      control: 'text'
    }
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


export const Cards: Story = {
  args: {
    ...Primary.args,
    variant: "card"
  }
}

export const Toggle: Story = {
  args: {
    ...Primary.args,
    variant: 'toggle',
  }
}


export const NestedTabs: Story = {
  args: {
    variant: 'card',
    children: [
      <Item key="tab1" title="Users">
        <Tabs variant="toggle" info={<span>Licensed Users: <strong>1000/1000</strong></span>}>
          <Item key="total" title="Total">
            <h1>Total Users</h1>
          </Item>
          <Item key="active" title="Active">
            <h1>Active Users</h1>
          </Item>
        </Tabs>
      </Item>,
      <Item key="tab2" title="Courses">
        <Tabs variant="toggle" info={<span>Total Courses: <strong>123/1231</strong></span>}>
          <Item key="total" title="Total">
            <h1>Total Courses</h1>
          </Item>
          <Item key="active" title="Active">
            <h1>Active Courses</h1>
          </Item>
        </Tabs>
      </Item>,
      <Item key="tab3" title="Assignments">
        <Tabs variant="toggle" info={<span>Total Assignments: <strong>123414</strong></span>}>
          <Item key="total" title="Total">
            <h1>Total Courses</h1>
          </Item>
          <Item key="active" title="Active">
            <h1>Active Assignments</h1>
          </Item>
        </Tabs>
      </Item>,
    ]
  }
}
