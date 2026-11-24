import { Meta, StoryObj } from "@storybook/react-vite";
import { tab } from "@styles/theme/component";
import { fn } from "storybook/test";
import { RenderPropsArgTypes } from "@sb/helpers";
import { Text } from "@components/Typography/Text";
import { Tabs } from ".";

const meta: Meta<typeof Tabs> = {
  title: "Content/Tabs",
  component: Tabs,
  parameters: {
    cssprops: { tab },
  },
  argTypes: {
    ...RenderPropsArgTypes,
    variant: {
      control: "select",
      options: ["default", "card", "toggle"],
      table: { defaultValue: { summary: '"default"' } },
    },
    selectedKey: {
      control: "select",
      options: ["tab1", "tab2", "tab3"],
      description: "The key of the selected tab in a controlled component.",
    },
    defaultSelectedKey: {
      control: "select",
      options: ["tab1", "tab2", "tab3"],
      description: "The key of the selected tab in an uncontrolled component.",
    },
    children: {
      control: false,
      description:
        "A `Tabs.List` followed by one `Tabs.Panel` per tab, matched by `id`.",
    },
    disabledKeys: {
      control: "select",
      options: ["None", "Tab 1", "Tab 2", "All Tabs"],
      mapping: {
        None: [],
        "Tab 1": ["tab1"],
        "Tab 2": ["tab2"],
        "All Tabs": ["tab1", "tab2", "tab3"],
      },
    },
    onSelectionChange: {
      table: {
        category: "Events",
      },
    },
    // @ts-expect-error - It's discovering these props from the internal
    // component for some reason, disabling them here so they don't show up
    tabsRef: {
      table: {
        disable: true,
      },
    },
    collection: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Primary: Story = {
  args: {
    onSelectionChange: fn(),
    children: [
      <Tabs.List key="tab-list">
        <Tabs.Tab id="tab1">Tab One</Tabs.Tab>
        <Tabs.Tab id="tab2">Tab Two</Tabs.Tab>
        <Tabs.Tab id="tab3">Tab Three</Tabs.Tab>
      </Tabs.List>,
      <Tabs.Panel id="tab1" key="tab1">
        <Text $size="3">Tab One Content</Text>
      </Tabs.Panel>,
      <Tabs.Panel id="tab2" key="tab2">
        <Text $size="3">Tab Two Content</Text>
      </Tabs.Panel>,
      <Tabs.Panel id="tab3" key="tab3">
        <Text $size="3">Tab Three Content</Text>
      </Tabs.Panel>,
    ],
  },
};

export const Cards: Story = {
  args: {
    ...Primary.args,
    variant: "card",
  },
};

export const Toggle: Story = {
  args: {
    ...Primary.args,
    variant: "toggle",
  },
};

export const DisabledTab: Story = {
  args: {
    ...Primary.args,
    disabledKeys: ["tab2"],
  },
};
