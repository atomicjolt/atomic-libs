import React, { useState } from "react";
import {
  Button,
  Key,
  PaginationDescriptor,
  Table,
} from "@atomicjolt/atomic-elements";

export default function Tables() {
  return (
    <div style={{ padding: "16px" }}>
      <PaginatedTable />
      {/* <ReordableColumnsTable /> */}
      {/* <NestedRowsTable /> */}
      {/* <TableLoader /> */}
    </div>
  );
}

function TableLoader() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Button onPress={() => setLoading(!loading)}>Toggle loading</Button>
      <br />
      <br />
      <Table
        aria-label="Table with loader"
        paginationDescriptor={{
          page: 1,
          totalPages: 100,
          pageSize: 10,
        }}
        isLoading={loading}
      >
        <Table.Header>
          <Table.Column key="foo" width={1000} showDivider>
            Foo
          </Table.Column>
          <Table.Column key="bar" showDivider>
            Bar
          </Table.Column>
          <Table.Column key="baz" showDivider>
            Baz
          </Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="row 1">
            <Table.Cell>Lvl 1 Foo 1</Table.Cell>
            <Table.Cell>Lvl 1 Bar 1</Table.Cell>
            <Table.Cell> Lvl 1 Baz 1</Table.Cell>
          </Table.Row>
          <Table.Row key="row 2">
            <Table.Cell>Lvl 1 Foo 2</Table.Cell>
            <Table.Cell>Lvl 1 Bar 2</Table.Cell>
            <Table.Cell>Lvl 1 Baz 2</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}

function PaginatedTable() {
  const [paginationDescriptor, setPaginationDescriptor] =
    useState<PaginationDescriptor>({
      page: 1,
      totalPages: 4,
      pageSize: 25,
      totalItems: 100,
    });

  return (
    <>
      <Table
        aria-label="Table with pagination"
        paginationDescriptor={paginationDescriptor}
        onPaginationChange={setPaginationDescriptor}
      >
        <Table.Header>
          <Table.Column id="foo" showDivider>
            Foo
          </Table.Column>
          <Table.Column id="bar">Bar</Table.Column>
          <Table.Column id="baz">Baz</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row id="row 1">
            <Table.Cell>Lvl 1 Foo 1</Table.Cell>
            <Table.Cell>Lvl 1 Bar 1</Table.Cell>
            <Table.Cell> Lvl 1 Baz 1</Table.Cell>
          </Table.Row>
          <Table.Row id="row 2">
            <Table.Cell>Lvl 1 Foo 2</Table.Cell>
            <Table.Cell>Lvl 1 Bar 2</Table.Cell>
            <Table.Cell>Lvl 1 Baz 2</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      {/* <Table aria-label="Table with custom pagination" hasBottom>
        <Table.Header>
          <Table.Column key="foo" showDivider>
            Foo
          </Table.Column>
          <Table.Column key="bar">Bar</Table.Column>
          <Table.Column key="baz">Baz</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="row 1">
            <Table.Cell>Lvl 1 Foo 1</Table.Cell>
            <Table.Cell>Lvl 1 Bar 1</Table.Cell>
            <Table.Cell> Lvl 1 Baz 1</Table.Cell>
          </Table.Row>
          <Table.Row key="row 2">
            <Table.Cell>Lvl 1 Foo 2</Table.Cell>
            <Table.Cell>Lvl 1 Bar 2</Table.Cell>
            <Table.Cell>Lvl 1 Baz 2</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell isRowHeader>Lvl 1 Foo 2</Table.Cell>
            <Table.Cell>Lvl 1 Bar 2</Table.Cell>
            <Table.Cell>Lvl 1 Baz 2</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
      <Table.Bottom>
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          style={{ height: "100%", paddingRight: "var(--table-padding-horz)" }}
        >
          <Pagination>
            <Flex justifyContent="flex-end" alignItems="center" gap={8}>
              <Pagination.PageSize size="auto" variant="ghost">
                <Item key={10}>10 rows</Item>
                <Item key={25}>25 row</Item>
                <Item key={50}>50 rows</Item>
                <Item key={100}>100 rows</Item>
              </Pagination.PageSize>
              <Pagination.FirstPage />
              <Pagination.PrevPage />
              <Pagination.NextPage />
            </Flex>
          </Pagination>
        </Flex>
      </Table.Bottom> */}
    </>
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
    <Table aria-label="Table with nested rows" allowsExpandableRows>
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
