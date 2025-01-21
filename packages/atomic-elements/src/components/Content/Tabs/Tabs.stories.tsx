import { Meta, StoryObj } from "@storybook/react";
import { getCssProps } from "@sb/cssprops";
import { fn } from "@storybook/test";
import { RenderPropsArgTypes } from "@sb/helpers";
import { Tabs } from ".";

const meta: Meta<typeof Tabs> = {
  title: "Content/Tabs",
  component: Tabs,
  parameters: {
    cssprops: getCssProps("Tab"),
  },
  argTypes: {
    ...RenderPropsArgTypes,
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
      options: ["None", "Tab 1", "Tab 2"],
      mapping: {
        None: [],
        "Tab 1": ["tab1"],
        "Tab 2": ["tab2"],
        "All Tabs": ["tab1", "tab2", "tab3"],
      },
      description: "An array of keys to disable.",
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
        <h1>Tab One Content</h1>
      </Tabs.Panel>,
      <Tabs.Panel id="tab2" key="tab2">
        <h1>Tab Two Content</h1>
      </Tabs.Panel>,
      <Tabs.Panel id="tab3" key="tab3">
        <h1>Tab Three Content</h1>
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

// TODO: figure out why tab nesting isn't working
// export const NestedTabs: Story = {
//   args: {
//     variant: "card",
//     children: [
//       <Tabs.List key="nested-tab-list">
//         <Tabs.Tab id="tab1">Users</Tabs.Tab>
//         <Tabs.Tab id="tab2">Courses</Tabs.Tab>
//         <Tabs.Tab id="tab3">Assignments</Tabs.Tab>
//       </Tabs.List>,
//       <Tabs.Panel id="tab1" key="tab1">
//         <Tabs
//           variant="toggle"
//           info={
//             <span>
//               Licensed Users: <strong>1000/1000</strong>
//             </span>
//           }
//         >
//           <Tabs.List key="users-tab-list">
//             <Tabs.Tab id="total">Total</Tabs.Tab>
//             <Tabs.Tab id="active">Active</Tabs.Tab>
//           </Tabs.List>
//           <Tabs.Panel id="total" key="total">
//             <h1>Total Users</h1>
//           </Tabs.Panel>
//           <Tabs.Panel id="active" key="active">
//             <h1>Active Users</h1>
//           </Tabs.Panel>
//         </Tabs>
//       </Tabs.Panel>,
//       <Tabs.Panel id="tab2" key="tab2">
//         <Tabs
//           variant="toggle"
//           info={
//             <span>
//               Total Courses: <strong>123/1231</strong>
//             </span>
//           }
//         >
//           <Tabs.List key="courses-tab-list">
//             <Tabs.Tab id="total">Total</Tabs.Tab>
//             <Tabs.Tab id="active">Active</Tabs.Tab>
//           </Tabs.List>
//           <Tabs.Panel id="total" key="total">
//             <h1>Total Courses</h1>
//           </Tabs.Panel>
//           <Tabs.Panel id="active" key="active">
//             <h1>Active Courses</h1>
//           </Tabs.Panel>
//         </Tabs>
//       </Tabs.Panel>,
//       <Tabs.Panel id="tab3" key="tab3">
//         <Tabs
//           variant="toggle"
//           info={
//             <span>
//               Total Assignments: <strong>123414</strong>
//             </span>
//           }
//         >
//           <Tabs.List key="assignments-tab-list">
//             <Tabs.Tab id="total">Total</Tabs.Tab>
//             <Tabs.Tab id="active">Active</Tabs.Tab>
//           </Tabs.List>
//           <Tabs.Panel id="total" key="total">
//             <h1>Total Assignments</h1>
//           </Tabs.Panel>
//           <Tabs.Panel id="active" key="active">
//             <h1>Active Assignments</h1>
//           </Tabs.Panel>
//         </Tabs>
//       </Tabs.Panel>,
//     ],
//   },
// };
