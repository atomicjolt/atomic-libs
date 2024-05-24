import React, { useState } from "react";
import { SearchDescriptor, Table } from "../elements";
import { SortDescriptor } from "react-stately";
import {
  Cell,
  Column,
  Provider,
  Row,
  TableBody,
  TableHeader,
  TableView,
  defaultTheme,
} from "@adobe/react-spectrum";

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
        variant="full-borders"
      >
        <Table.Header>
          <Table.Column
            key="name"
            allowsSorting
            allowsSearching
            allowsReordering
          >
            Name
          </Table.Column>
          <Table.Column>Another Column</Table.Column>
          <Table.Column title="Title" key="title">
            <Table.Column
              key="type"
              allowsSorting
              allowsReordering
              width={200}
              allowsSearching
            >
              Type
            </Table.Column>
            <Table.Column
              key="level"
              allowsSorting
              allowsReordering
              width={100}
            >
              Level
            </Table.Column>
          </Table.Column>
        </Table.Header>
        <Table.Body items={sortedPokemons}>
          {(pokemon) => (
            <Table.Row key={pokemon.name}>
              <Table.Cell colSpan={2}>{pokemon.name}</Table.Cell>
              {/* <Table.Cell></Table.Cell> */}
              <Table.Cell>{pokemon.type}</Table.Cell>
              <Table.Cell>{pokemon.level}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
      {/* <Provider theme={defaultTheme}>
        <TableView
          aria-label="Example table with static contents"
          selectionMode="multiple"
        >
          <TableHeader>
            <Column>Name</Column>
            <Column>Type</Column>
            <Column align="end">Date Modified</Column>
          </TableHeader>
          <TableBody>
            <Row>
              <Cell>Games</Cell>
              <Cell>File folder</Cell>
              <Cell>6/7/2020</Cell>
            </Row>
            <Row>
              <Cell>Program Files</Cell>
              <Cell>File folder</Cell>
              <Cell>4/7/2021</Cell>
            </Row>
            <Row>
              <Cell>bootmgr</Cell>
              <Cell>System file</Cell>
              <Cell>11/20/2010</Cell>
            </Row>
            <Row>
              <Cell>log.txt</Cell>
              <Cell>Text Document</Cell>
              <Cell>1/18/2016</Cell>
            </Row>
          </TableBody>
        </TableView>
      </Provider> */}
    </div>
  );
}
