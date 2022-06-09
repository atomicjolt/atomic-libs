import { ComponentMeta, ComponentStory } from "@storybook/react";
import Table, { Props } from ".";

export default {
  title: "Tables/Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args: Props) => (
  <Table {...args}>
    <Table.Head>
      <Table.Header sortable defaultSortDirection="ascending" sortPath="monday">
        Monday
      </Table.Header>
      <Table.Header
        sortable
        defaultSortDirection="descending"
        sortPath="tuesday"
      >
        Tuesday
      </Table.Header>
      <Table.Header>Wednseday</Table.Header>
      <Table.Header>Thurday</Table.Header>
      <Table.Header>Friday</Table.Header>
    </Table.Head>

    <Table.Body>
      <Table.Row data={[1, 2, 3, 4, 5]} />
      <Table.Row>
        <Table.Cell>6</Table.Cell>
        <Table.Cell>7</Table.Cell>
        <Table.Cell>8</Table.Cell>
        <Table.Cell>9</Table.Cell>
        <Table.Cell>10</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export const Default = Template.bind({});
Default.args = {
  title: "Assessments in the course",
  sortable: true,
  sortPath: "monday",
  sortDirection: "ascending",
};

// Additional stories go here
