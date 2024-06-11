import React, { useState } from "react";
import { Key, SearchDescriptor, Table } from "../elements";

export default function Tables() {
  return (
    <div style={{ padding: "16px" }}>
      {/* <ReordableColumnsTable /> */}
      <NestedRowsTable />
    </div>
  );
}

function ReordableColumnsTable() {
  const [columnOrder, setColumnOrder] = useState<Key[]>([
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

  const pokemons: Record<string, string | number>[] = [
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
            {(column) => <Table.Cell>{pokemon[column]}</Table.Cell>}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}

function NestedRowsTable() {
  return (
    <Table allowsExpandableRows>
      <Table.Header>
        <Table.Column key="foo">Foo</Table.Column>
        <Table.Column key="bar">Bar</Table.Column>
        <Table.Column key="baz">Baz</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="row 1">
          <Table.Cell>Lvl 1 Foo 1</Table.Cell>
          <Table.Cell>Lvl 1 Bar 1</Table.Cell>
          <Table.Cell> Lvl 1 Baz 1</Table.Cell>
          <Table.Row key="child row 1 level 2">
            <Table.Cell>Lvl 2 Foo 1</Table.Cell>
            <Table.Cell>Lvl 2 Bar 1</Table.Cell>
            <Table.Cell>Lvl 2 Baz 1</Table.Cell>
            <Table.Row key="child row 1 level 3">
              <Table.Cell>Lvl 3 Foo 1</Table.Cell>
              <Table.Cell>Lvl 3 Bar 1</Table.Cell>
              <Table.Cell>Lvl 3 Baz 1</Table.Cell>
            </Table.Row>
            <Table.Row key="child row 1 level 3 2">
              <Table.Cell>Lvl 3 Foo 2</Table.Cell>
              <Table.Cell>Lvl 3 Bar 2</Table.Cell>
              <Table.Cell>Lvl 3 Baz 2</Table.Cell>
            </Table.Row>
          </Table.Row>
          <Table.Row key="child row 2 level 2">
            <Table.Cell>Lvl 2 Foo 2</Table.Cell>
            <Table.Cell>Lvl 2 Bar 2</Table.Cell>
            <Table.Cell>Lvl 2 Baz 2</Table.Cell>
          </Table.Row>
        </Table.Row>
        <Table.Row key="row 2">
          <Table.Cell>Lvl 1 Foo 2</Table.Cell>
          <Table.Cell>Lvl 1 Bar 2</Table.Cell>
          <Table.Cell>Lvl 1 Baz 2</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
