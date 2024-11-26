import React, { useState } from "react";
import { Table } from "../../../packages/atomic-elements/src/components/Layout/Table";
import { CheckBox } from "../../../packages/atomic-elements/src/components/Inputs/Checkbox";
import { SortDescriptor } from "react-stately";
import { SearchDescriptor } from "@atomicjolt/atomic-elements";
import { Collection } from "@react-aria/collections";

function MyRow({ columns, children }) {
  return (
    <Table.Row>
      <Collection items={columns}>{children}</Collection>
    </Table.Row>
  );
}

export default function Aria() {
  const [sortDesc, setSortDesc] = useState<SortDescriptor>({
    column: "column-1",
    direction: "ascending",
  });

  const [searchDesc, setSearchDesc] = useState<SearchDescriptor>({
    column: null,
    search: "",
  });

  const columns = [
    {
      id: "column-1",
      title: "Column 1",
      isRowHeader: true,
    },
    {
      id: "column-2",
      title: "Column 2",
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
    // {
    //   id: "row-2",
    //   cells: {
    //     "column-1": "Test value",
    //     "column-2": "Test value",
    //     "column-3": "Test value",
    //   },
    // },
  ];

  return (
    <>
      <Table
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
      </Table>

      <br />
      <br />

      {/* <Table>
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column isRowHeader={column.isRowHeader}>
              {column.title}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={rows}>
          {(row) => (
            <MyRow columns={columns}>
              {(column) => <Table.Cell>{row.cells[column.id]}</Table.Cell>}
            </MyRow>
          )}
        </Table.Body>
      </Table> */}
    </>
  );
}
