import React, { useState } from "react";
import { Table } from "../elements";
import { SortDescriptor } from "react-stately";

export default function Tables() {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "name",
    direction: "ascending",
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

  const sortedPokemons = pokemons.sort((a, b) => {
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
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <Table.Header>
          <Table.Column key="name" allowsSorting>
            Name
          </Table.Column>
          <Table.Column allowsSorting key="type">
            Type
          </Table.Column>
          <Table.Column allowsSorting key="level">
            Level
          </Table.Column>
        </Table.Header>
        <Table.Body items={sortedPokemons}>
          {(pokemon) => (
            <Table.Row key={pokemon.name}>
              <Table.Cell>{pokemon.name} </Table.Cell>
              <Table.Cell>{pokemon.type} </Table.Cell>
              <Table.Cell>{pokemon.level}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
}
