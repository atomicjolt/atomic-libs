import { ComponentMeta, ComponentStory } from "@storybook/react";
import TestComp, { Props } from ".";
import Doc from "./TestComp.doc.mdx";

export default {
  title: "Utility/TestComp",
  component: TestComp,
  parameters: {
      docs: {
        page: Doc,
      },
    },
} as ComponentMeta<typeof TestComp>

const Template: ComponentStory<typeof TestComp> = (args: Props) => (
  <TestComp {...args} />
);

export const Default = Template.bind({});
Default.args = {}

// Additional stories go here