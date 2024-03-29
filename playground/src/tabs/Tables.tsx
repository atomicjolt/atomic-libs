import React, { useState } from "react";
import { IconButton, Table, TextInput } from "../elements";
import { SortDescriptor } from "react-stately";
import {
  ComboboxInput,
  ComboboxInputWrapper,
} from "../../../src/components/Dropdowns/Combobox/Combobox.styles";
import { Input, InputWrapper } from "../../../src/styles/input";

export default function Tables() {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  const [searchDescriptor, setSearchDescriptor] = useState({
    column: null,
    search: "",
  });

  const [columnOrder, setColumnOrder] = useState<React.Key[]>([
    "name",
    "type",
    "level",
  ]);

  const columns = [
    {
      key: "name",
      name: "Name",
      isSortable: true,
      allowsReordering: false,
    },
    {
      key: "type",
      name: "Type",
      isSortable: false,
      allowsReordering: true,
    },
    {
      key: "level",
      name: "Level",
      isSortable: true,
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

  // const sortedPokemons = pokemons.sort((a, b) => {
  //   if (sortDescriptor.column === undefined) return 0;

  //   if (sortDescriptor.direction === "ascending") {
  //     return a[sortDescriptor.column] > b[sortDescriptor.column] ? 1 : -1;
  //   } else {
  //     return a[sortDescriptor.column] < b[sortDescriptor.column] ? 1 : -1;
  //   }
  // });

  return (
    <div
      style={{
        padding: "16px",
      }}
    >
      <Table
        aria-label="Table with selection"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
        onColumnReorder={setColumnOrder}
        searchDescriptor={searchDescriptor}
        onSearchChange={setSearchDescriptor}
      >
        <Table.Header columns={sortedColumns}>
          {(column) => (
            <Table.Column
              key={column.key}
              allowsSorting={column.isSortable}
              // allowsReordering={column.allowsReordering}

              allowsSearching
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={pokemons}>
          {(pokemon) => (
            <Table.Row key={pokemon.name}>
              {sortedColumns.map((column, idx) => (
                <Table.Cell key={column.key} isRowHeader={idx === 0}>
                  {pokemon[column.key]}
                </Table.Cell>
              ))}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
