import React, { useState } from "react";
import { Table } from "../../../packages/atomic-elements/src/components/Layout/Table";
import { CheckBox } from "../../../packages/atomic-elements/src/components/Inputs/Checkbox";
import { SortDescriptor } from "react-stately";
import { Button, SearchDescriptor } from "@atomicjolt/atomic-elements";
import { Collection } from "@react-aria/collections";

export default function Aria() {
  const [sortDesc, setSortDesc] = useState<SortDescriptor>({
    column: "column-1",
    direction: "ascending",
  });

  const [searchDesc, setSearchDesc] = useState<SearchDescriptor>({
    column: "column-1",
    search: "",
  });

  const [selectEnabled, setSelectEnabled] = useState(true);

  const columns = [
    {
      id: "column-1",
      title: "Column 1",
      isRowHeader: true,
      allowsSorting: true,
      allowsSearching: true,
    },
    {
      id: "column-2",
      title: "Column 2",
      allowsSorting: true,
      allowsSearching: true,
    },
    {
      id: "column-3",
      title: "Column 3",
    },
  ];

  const rows = [
    {
      id: "row-1",
      cells: {
        "column-1": "Test value",
        "column-2": "Test value",
        "column-3": "Test value",
      },
    },
    {
      id: "row-2",
      cells: {
        "column-1": "Test value",
        "column-2": "Test value",
        "column-3": "Test value",
      },
    },
  ];

  console.log(searchDesc);

  return (
    <>
      {/* <Table >
        <Table.Header>
          <Table.Column id="name" isRowHeader>
            Name
          </Table.Column>
          <Table.Column id="specialMove">Special Move</Table.Column>
          <Table.Column id="level">Level</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Charmander</Table.Cell>
            <Table.Cell>Ember</Table.Cell>
            <Table.Cell>15</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table> */}

      {/* <Table
        onSortChange={setSortDesc}
        sortDescriptor={sortDesc}
        onSearchChange={setSearchDesc}
        searchDescriptor={searchDesc}
        selectionMode="multiple"
        defaultSelectedKeys={["row-1"]}
      >
        <Table.Header>
          <Table.Column width="1%">
            <CheckBox slot="selection" />
          </Table.Column>
          <Table.Column isRowHeader allowsSorting allowsSearching>
            Name
          </Table.Column>
          <Table.Column allowsSorting allowsSearching>
            Type
          </Table.Column>
          <Table.Column>Level</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row id="row-1">
            <Table.Cell>
              <CheckBox slot="selection" />
            </Table.Cell>
            <Table.Cell>Pikachu</Table.Cell>
            <Table.Cell>Electric</Table.Cell>
            <Table.Cell>25</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <CheckBox slot="selection" />
            </Table.Cell>
            <Table.Cell>Charmander</Table.Cell>
            <Table.Cell>Fire</Table.Cell>
            <Table.Cell>15</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <CheckBox slot="selection" />
            </Table.Cell>
            <Table.Cell>Bulbasaur</Table.Cell>
            <Table.Cell>Grass/Poison</Table.Cell>
            <Table.Cell>20</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table> */}

      <br />
      <br />

      <Button onPress={() => setSelectEnabled(!selectEnabled)}>
        Toggle selection ({selectEnabled ? "enabled" : "disabled"})
      </Button>

      <Table
        selectionMode={selectEnabled ? "multiple" : "none"}
        sortDescriptor={sortDesc}
        onSortChange={setSortDesc}
        searchDescriptor={searchDesc}
        onSearchChange={setSearchDesc}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              isRowHeader={column.isRowHeader}
              allowsSorting={column.allowsSorting}
              textValue={column.title}
              allowsSearching={column.allowsSearching}
            >
              {column.title}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={rows}>
          {(row) => (
            <Table.Row columns={columns}>
              {(column) => <Table.Cell>{row.cells[column.id]}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </>
  );
}
