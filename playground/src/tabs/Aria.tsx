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
      <Table allowsExpandableRows>
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

          {/* <Table.Row id="Fire, Flying">
            <Table.Cell>Fire, Flying </Table.Cell>
            <Table.Cell />
            <Table.Cell />
            <Table.Row>
              <Table.Cell>Charizard</Table.Cell>
              <Table.Cell>Flamethrower</Table.Cell>
              <Table.Cell>67</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Moltres</Table.Cell>
              <Table.Cell>Fire Spin</Table.Cell>
              <Table.Cell>60</Table.Cell>
            </Table.Row>
          </Table.Row>
          <Table.Row id="Water">
            <Table.Cell>Water</Table.Cell>
            <Table.Cell />
            <Table.Cell />

            <Table.Row>
              <Table.Cell>Blastoise</Table.Cell>
              <Table.Cell>Hydro Pump</Table.Cell>
              <Table.Cell>56</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Vaporeon</Table.Cell>
              <Table.Cell>Aqua Tail</Table.Cell>
              <Table.Cell>65</Table.Cell>
            </Table.Row>
          </Table.Row>
          <Table.Row id="Grass, Poison">
            <Table.Cell>Grass, Poison</Table.Cell>
            <Table.Cell />
            <Table.Cell />

            <Table.Row>
              <Table.Cell>Venusaur</Table.Cell>
              <Table.Cell>Solar Beam</Table.Cell>
              <Table.Cell>83</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Victreebel</Table.Cell>
              <Table.Cell>Leaf Blade</Table.Cell>
              <Table.Cell>70</Table.Cell>
            </Table.Row>
          </Table.Row>

          <Table.Row key="Electric">
            <Table.Cell>Electric</Table.Cell>
            <Table.Cell />
            <Table.Cell />

            <Table.Row>
              <Table.Cell>Pikachu</Table.Cell>
              <Table.Cell>Thunderbolt</Table.Cell>
              <Table.Cell>100</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>Raichu</Table.Cell>
              <Table.Cell>Thunder Punch</Table.Cell>
              <Table.Cell>90</Table.Cell>
            </Table.Row>
          </Table.Row> */}
        </Table.Body>
      </Table>

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
