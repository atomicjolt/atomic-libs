import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Table from ".";
import { Key, SearchDescriptor } from "../../../types";
import { getCssProps } from "@sb/cssprops";

const meta: Meta<typeof Table> = {
  title: "Layouts/Table",
  component: Table,
  tags: ["!autodocs"],
  parameters: {
    cssprops: getCssProps("Table"),
  },
  argTypes: {
    children: {
      control: false,
    },
    sortDescriptor: {
      description: "The current sort descriptor, if any",
    },
    variant: {
      description: "The visual variant of the table",
      options: ["default", "full-borders", "sheet"],
      control: "select",
    },
    onSortChange: {
      action: "sortChange",
      description: "Fires when the user changes the sort descriptor",
      table: {
        category: "Events",
      },
    },
    onSearchChange: {
      action: "onSearchChange",
      description: "Fires when the user changes search descriptor",
      table: {
        category: "Events",
      },
    },
    onColumnReorder: {
      action: "onColumnReorder",
      description: "Fires when the user changes the column order",
      table: {
        category: "Events",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  args: {
    children: [
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
      </Table.Header>,
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell isRowHeader>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell isRowHeader>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell isRowHeader>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell isRowHeader>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>,
    ],
  },
};

export const SheetVariant: Story = {
  args: {
    ...Primary.args,
    variant: "sheet",
  },
};

export const MultipleSelection: Story = {
  args: {
    ...Primary.args,
    selectionMode: "multiple",
  },
};

export const NestedColumns: Story = {
  args: {
    variant: "full-borders",
    children: [
      <Table.Header key="header">
        <Table.Column key="name" showDivider>
          Name
        </Table.Column>
        <Table.Column title="Details">
          <Table.Column key="type">Type</Table.Column>
          <Table.Column key="level">Level</Table.Column>
        </Table.Column>
      </Table.Header>,
      <Table.Body key="body">
        <Table.Row key="1">
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>,
    ],
  },
};

export const SingleSelection: Story = {
  args: {
    ...Primary.args,
    selectionMode: "single",
  },
};

export const SortableHeaders: Story = {
  args: {
    sortDescriptor: {
      column: "name",
      direction: "descending",
    },
    children: [
      <Table.Header key="header">
        <Table.Column key="name" allowsSorting>
          Name
        </Table.Column>
        <Table.Column key="type" allowsSorting>
          Type
        </Table.Column>
        <Table.Column key="level" allowsSorting>
          Level
        </Table.Column>
      </Table.Header>,
      <Table.Body key="body">
        <Table.Row key="1">
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>,
    ],
  },
};

export const WithColumnReordering: Story = {
  render: (args) => {
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
              {sortedColumns.map((column) => (
                <Table.Cell key={column.key}>{pokemon[column.key]}</Table.Cell>
              ))}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  },
};

export const WithColumnSearch: Story = {
  render: (props) => {
    const [searchDescriptor, setSearchDescriptor] = useState<SearchDescriptor>({
      column: null,
      search: "",
    });

    const pokemons: Record<string, string>[] = [
      {
        name: "Charizard",
        type: "Fire, Flying",
        level: "67",
      },
      {
        name: "Blastoise",
        type: "Water",
        level: "56",
      },
      {
        name: "Venusaur",
        type: "Grass, Poison",
        level: "83",
      },
      {
        name: "Pikachu",
        type: "Electric",
        level: "100",
      },
    ];

    const filteredPokemon = pokemons.filter((pokemon) => {
      if (!searchDescriptor.search || !searchDescriptor.column) return true;

      return pokemon[searchDescriptor.column]
        .toLowerCase()
        .includes(searchDescriptor.search.toLowerCase());
    });

    return (
      <div
        style={{
          padding: "16px",
        }}
      >
        <Table
          searchDescriptor={searchDescriptor}
          onSearchChange={setSearchDescriptor}
          {...props}
        >
          <Table.Header>
            <Table.Column key="name" allowsSearching>
              Name
            </Table.Column>
            <Table.Column key="type" allowsSearching width={200}>
              Type
            </Table.Column>
            <Table.Column key="level" width={100}>
              Level
            </Table.Column>
          </Table.Header>
          <Table.Body items={filteredPokemon}>
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
  },
  args: {
    variant: "full-borders",
    "aria-label": "Table with searching",
  },
};

export const WithNestedRows: Story = {
  render: (args) => {
    const pokemon = [
      {
        type: "Fire, Flying",
        pokemon: [
          {
            name: "Charizard",
            level: 67,
            specialMove: "Flamethrower",
          },
          {
            name: "Moltres",
            level: 60,
            specialMove: "Fire Spin",
          },
        ],
      },
      {
        type: "Water",
        pokemon: [
          {
            name: "Blastoise",
            level: 56,
            specialMove: "Hydro Pump",
          },
          {
            name: "Vaporeon",
            level: 65,
            specialMove: "Aqua Tail",
          },
        ],
      },
      {
        type: "Grass, Poison",
        pokemon: [
          {
            name: "Venusaur",
            level: 83,
            specialMove: "Solar Beam",
          },
          {
            name: "Victreebel",
            level: 70,
            specialMove: "Leaf Blade",
          },
        ],
      },
      {
        type: "Electric",
        pokemon: [
          {
            name: "Pikachu",
            level: 100,
            specialMove: "Thunderbolt",
          },
          {
            name: "Raichu",
            level: 90,
            specialMove: "Thunder Punch",
          },
        ],
      },
    ];

    return (
      <Table {...args}>
        <Table.Header>
          <Table.Column key="name">Name</Table.Column>
          <Table.Column key="specialMove">Special Move</Table.Column>
          <Table.Column key="level">Level</Table.Column>
        </Table.Header>
        <Table.Body items={pokemon}>
          {(pokemonGroup) => (
            <Table.Row key={pokemonGroup.type}>
              <Table.Cell colSpan={3}>{pokemonGroup.type}</Table.Cell>

              {pokemonGroup.pokemon.map((pokemon) => (
                <Table.Row key={pokemon.name}>
                  <Table.Cell isRowHeader>{pokemon.name}</Table.Cell>
                  <Table.Cell>{pokemon.specialMove}</Table.Cell>
                  <Table.Cell>{pokemon.level}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  },
  argTypes: {
    defaultExpandedKeys: {
      description: "The default expanded keys",
      control: false,
    },
    expandedKeys: {
      description: "The expanded keys",
      control: "multi-select",
      options: ["Fire, Flying", "Water", "Grass, Poison", "Electric"],
    },
    onExpandedChange: {
      action: "expandedChange",
      description: "Fires when the expanded keys change",
      table: {
        category: "Events",
      },
    },
  },
  args: {
    "aria-label": "Table with nested rows",
    isExpandable: true,
    defaultExpandedKeys: ["Fire, Flying", "Water"],
    onExpandedChange: fn(),
  },
};
