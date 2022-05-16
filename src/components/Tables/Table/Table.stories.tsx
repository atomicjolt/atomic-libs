import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table, { Props } from ".";

export default {
  title: "Tables/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args: Props) => (
  <Table {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Assessments in the course",
};

// Additional stories go here
