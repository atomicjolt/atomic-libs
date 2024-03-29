import React, { useState } from "react";
import { Table } from "../elements";
import { SortDescriptor } from "react-stately";
import { SearchDescriptor } from "../../../src/components/Tables/Table/Table.types";

export default function Tables() {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
  });

  const [searchDescriptor, setSearchDescriptor] = useState<SearchDescriptor>({
    column: null,
    search: "",
  });

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

  const filteredPokemons = pokemons.filter((pokemon) => {
    if (!searchDescriptor.search || !searchDescriptor.column) return true;

    return pokemon[searchDescriptor.column]
      .toLowerCase()
      .includes(searchDescriptor.search.toLowerCase());
  });

  const sortedPokemons = filteredPokemons.sort((a, b) => {
    if (sortDescriptor.column === undefined) return 0;

    if (sortDescriptor.direction === "ascending") {
      return a[sortDescriptor.column] > b[sortDescriptor.column] ? 1 : -1;
    } else {
      return a[sortDescriptor.column] < b[sortDescriptor.column] ? 1 : -1;
    }
  });

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
        searchDescriptor={searchDescriptor}
        onSearchChange={setSearchDescriptor}
      >
        <Table.Header>
          <Table.Column key="name" allowsSorting allowsSearching>
            Name
          </Table.Column>
          <Table.Column key="type" allowsSorting>
            Type
          </Table.Column>
          <Table.Column key="level" allowsSorting>
            Level
          </Table.Column>
        </Table.Header>
        <Table.Body items={sortedPokemons}>
          {(pokemon) => (
            <Table.Row key={pokemon.name}>
              <Table.Cell>{pokemon.name}</Table.Cell>
              <Table.Cell>{pokemon.type}</Table.Cell>
              <Table.Cell>{pokemon.level}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
