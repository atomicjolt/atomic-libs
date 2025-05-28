import React, { useState } from "react";
import { Button, SortDescriptor, Table } from "../elements";

export default function Tables() {
  return (
    <div style={{ padding: "16px" }}>
      <RegularTable />
      {/* <TableLoader /> */}
    </div>
  );
}

function RegularTable() {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "foo",
    direction: "ascending",
  });

  return (
    <Table
      aria-label="Table"
      striped="even"
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
    >
      <Table.Header>
        <Table.Column
          id="foo"
          showDivider
          allowsSorting
          sortVisibility="always"
          allowsSearching
        >
          Foo
        </Table.Column>
        <Table.Column
          id="bar"
          align="right"
          showDivider
          allowsSorting
          sortVisibility="always"
        >
          Bar
        </Table.Column>
        <Table.Column id="baz" align="right">
          Baz
        </Table.Column>
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
        <Table.Row id="row 3">
          <Table.Cell>Lvl 1 Foo 3</Table.Cell>
          <Table.Cell>Lvl 1 Bar 3</Table.Cell>
          <Table.Cell>Lvl 1 Baz 3</Table.Cell>
        </Table.Row>
        <Table.Row id="row 4">
          <Table.Cell>Lvl 1 Foo 4</Table.Cell>
          <Table.Cell>Lvl 1 Bar 4</Table.Cell>
          <Table.Cell>Lvl 1 Baz 4</Table.Cell>
        </Table.Row>
        <Table.Row id="row 5">
          <Table.Cell>Lvl 1 Foo 5</Table.Cell>
          <Table.Cell>Lvl 1 Bar 5</Table.Cell>
          <Table.Cell>Lvl 1 Baz 5</Table.Cell>
        </Table.Row>
        <Table.Row id="row 6">
          <Table.Cell>Lvl 1 Foo 6</Table.Cell>
          <Table.Cell>Lvl 1 Bar 6</Table.Cell>
          <Table.Cell>Lvl 1 Baz 6</Table.Cell>
        </Table.Row>
        <Table.Row id="row 7">
          <Table.Cell>Lvl 1 Foo 7</Table.Cell>
          <Table.Cell>Lvl 1 Bar 7</Table.Cell>
          <Table.Cell>Lvl 1 Baz 7</Table.Cell>
        </Table.Row>
        <Table.Row id="row 8">
          <Table.Cell>Lvl 1 Foo 8</Table.Cell>
          <Table.Cell>Lvl 1 Bar 8</Table.Cell>
          <Table.Cell>Lvl 1 Baz 8</Table.Cell>
        </Table.Row>
        <Table.Row id="row 9">
          <Table.Cell>Lvl 1 Foo 9</Table.Cell>
          <Table.Cell>Lvl 1 Bar 9</Table.Cell>
          <Table.Cell>Lvl 1 Baz 9</Table.Cell>
        </Table.Row>
        <Table.Row id="row 10">
          <Table.Cell>Lvl 1 Foo 10</Table.Cell>
          <Table.Cell>Lvl 1 Bar 10</Table.Cell>
          <Table.Cell>Lvl 1 Baz 10</Table.Cell>
        </Table.Row>
        <Table.Row id="row 11">
          <Table.Cell>Lvl 1 Foo 11</Table.Cell>
          <Table.Cell>Lvl 1 Bar 11</Table.Cell>
          <Table.Cell>Lvl 1 Baz 11</Table.Cell>
        </Table.Row>
        <Table.Row id="row 12">
          <Table.Cell>Lvl 1 Foo 12</Table.Cell>
          <Table.Cell>Lvl 1 Bar 12</Table.Cell>
          <Table.Cell>Lvl 1 Baz 12</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}

function TableLoader() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Button onPress={() => setLoading(!loading)}>Toggle loading</Button>
      <br />
      <br />
      <Table aria-label="Table with loader">
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
        <Table.Body isLoading={loading}>
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
