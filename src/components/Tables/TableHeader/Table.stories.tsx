import { ComponentMeta, ComponentStory } from "@storybook/react";
import TableHeader, { Props } from ".";

export default {
  title: "Tables/TableHeader",
  component: TableHeader,
} as ComponentMeta<typeof TableHeader>;

const Template: ComponentStory<typeof TableHeader> = (args: Props) => (
  <TableHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Header",
};

// Additional stories go here
