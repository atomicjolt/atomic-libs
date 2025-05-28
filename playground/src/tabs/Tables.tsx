import React, { useState } from "react";
import { Button, Key, PaginationDescriptor, Table, Text } from "../elements";

export default function Tables() {
  return (
    <div style={{ padding: "16px" }}>
      <RegularTable />
      {/* <TableLoader /> */}
    </div>
  );
}

function RegularTable() {
  return (
    <Table aria-label="Table">
      <Table.Header>
        <Table.Column id="foo" showDivider>
          Foo
        </Table.Column>
        <Table.Column id="bar" align="right">
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
