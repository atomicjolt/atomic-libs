import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Table from ".";

const meta: Meta<typeof Table> = {
  title: "Layouts/Table",
  component: Table,
  argTypes: {
    children: {
      control: false,
    },
    onSortChange: {
      action: "sortChange",
      description: "Fires when the user changes the sort descriptor",
      table: {
        category: "Events",
      },
    },
    sortDescriptor: {
      description: "The current sort descriptor, if any",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  args: {
    children: [
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
      </Table.Header>,
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>,
    ],
  },
};

export const MultipleSelection: Story = {
  args: {
    ...Primary.args,
    selectionMode: "multiple",
  },
};

export const SingleSelection: Story = {
  args: {
    ...Primary.args,
    selectionMode: "single",
  },
};

export const SortableHeaders: Story = {
  args: {
    sortDescriptor: {
      column: "name",
      direction: "descending",
    },
    children: [
      <Table.Header>
        <Table.Column key="name" allowsSorting>
          Name
        </Table.Column>
        <Table.Column key="type" allowsSorting>
          Type
        </Table.Column>
        <Table.Column key="level" allowsSorting>
          Level
        </Table.Column>
      </Table.Header>,
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>,
    ],
  },
};

export const WithColumnReordering: Story = {
  render: (args) => {
    const [columnOrder, setColumnOrder] = useState<React.Key[]>([
      "name",
      "type",
      "level",
    ]);

    const columns = [
      {
        key: "name",
        name: "Name",
        allowsReordering: true,
      },
      {
        key: "type",
        name: "Type",
        allowsReordering: true,
      },
      {
        key: "level",
        name: "Level",
        allowsReordering: true,
      },
    ];

    const sortedColumns = columnOrder.map((key) =>
      columns.find((c) => c.key === key)
    ) as typeof columns;

    const pokemons = [
      {
        name: "Charizard",
        type: "Fire, Flying",
        level: 67,
      },
      {
        name: "Blastoise",
        type: "Water",
        level: 56,
      },
      {
        name: "Venusaur",
        type: "Grass, Poison",
        level: 83,
      },
      {
        name: "Pikachu",
        type: "Electric",
        level: 100,
      },
    ];

    return (
      <Table
        aria-label="Table with orderable columns"
        onColumnReorder={setColumnOrder}
      >
        <Table.Header columns={sortedColumns}>
          {(column) => (
            <Table.Column
              key={column.key}
              allowsReordering={column.allowsReordering}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={pokemons}>
          {(pokemon) => (
            <Table.Row key={pokemon.name}>
              {sortedColumns.map((column) => (
                <Table.Cell key={column.key}>{pokemon[column.key]}</Table.Cell>
              ))}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  },
};
