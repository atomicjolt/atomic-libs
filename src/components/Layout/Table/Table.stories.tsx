import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Table } from ".";
import { Key, SearchDescriptor } from "../../../types";
import { getCssProps } from "@sb/cssprops";
import { Flex } from "../Flex/Flex";
import { Button } from "@components/Buttons/Button";
import { MaterialIcon } from "@components/index";

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
      description: "Fires when the user changes the sort descriptor",
      table: {
        category: "Events",
      },
    },
    onSearchChange: {
      description: "Fires when the user changes search descriptor",
      table: {
        category: "Events",
      },
    },
    onColumnReorder: {
      description: "Fires when the user changes the column order",
      table: {
        category: "Events",
      },
    },
    onPaginationChange: {
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
    onCellAction: fn(),
    onSortChange: fn(),
    onSearchChange: fn(),
    onColumnReorder: fn(),
    onPaginationChange: fn(),
    children: [
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
      </Table.Header>,
      <Table.Body>
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
    return (
      <Table {...args}>
        <Table.Header>
          <Table.Column key="name">Name</Table.Column>
          <Table.Column key="specialMove">Special Move</Table.Column>
          <Table.Column key="level">Level</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row key="Fire, Flying">
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
          <Table.Row key="Water">
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
          <Table.Row key="Grass, Poison">
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
          </Table.Row>
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
    allowsExpandableRows: true,
    defaultExpandedKeys: ["Fire, Flying", "Water"],
    onExpandedChange: fn(),
  },
};

export const PaginatedTable: Story = {
  args: {
    ...Primary.args,
    paginationDescriptor: {
      page: 1,
      pageSize: 10,
      totalPages: 10,
    },
  },
};

export const LoadingState: Story = {
  args: {
    ...Primary.args,
    isLoading: true,
    loadingRows: 8,
  },
};

export const TableSkeleton: StoryObj<typeof Table.Skeleton> = {
  render: (args) => <Table.Skeleton {...args} />,
  args: {
    rows: 10,
    columns: 3,
  },
};

export const RenderEmptyTable: Story = {
  ...Primary,
  args: {
    children: [
      <Table.Header key="header">
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
      </Table.Header>,
      // @ts-expect-error
      <Table.Body
        key="body"
        renderEmpty={
          <Flex justifyContent="center">There are no rows available!</Flex>
        }
      />,
    ],
  },
};

export const WithTableBottom: Story = {
  ...Primary,
  render: (args) => (
    <>
      <Table {...args} />
      <Table.Bottom isSticky={args.isSticky}>
        <Flex
          alignItems="center"
          style={{ height: "100%", paddingLeft: "var(--table-padding-horz)" }}
        >
          <Button variant="secondary">
            <MaterialIcon icon="add" />
            Add Pokemon
          </Button>
        </Flex>
      </Table.Bottom>
    </>
  ),
  args: {
    ...Primary.args,
    hasBottom: true,
  },
};
