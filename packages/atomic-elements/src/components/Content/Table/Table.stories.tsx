import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Table } from ".";
import { SortDescriptor } from "react-stately";
import { SearchDescriptor } from "../../../types";
import { table } from "@styles/theme/component";
import { Flex } from "../../Layout/Flex";
import { Button } from "@components/Buttons/Button";
import { MaterialIcon, Pagination, Text } from "@components/index";
import { MultiSelectionArgTypes, RenderPropsArgTypes } from "@sb/helpers";

// Row ids used by the stories, so the selection controls have real keys.
const rowKeys = ["charizard", "blastoise", "venusaur", "pikachu"];

const meta: Meta<typeof Table> = {
  title: "Content/Table",
  component: Table,
  subcomponents: {
    "Table.Column": Table.Column,
    "Table.Body": Table.Body,
    "Table.Row": Table.Row,
    "Table.Bottom": Table.Bottom,
  },
  parameters: {
    cssprops: { table },
  },
  argTypes: {
    // Row nesting isn't implemented yet (setting it throws).
    allowsExpandableRows: { table: { disable: true } },
    ...RenderPropsArgTypes,
    ...MultiSelectionArgTypes,
    defaultSelectedKeys: {
      ...MultiSelectionArgTypes.defaultSelectedKeys,
      options: rowKeys,
    },
    selectedKeys: {
      ...MultiSelectionArgTypes.selectedKeys,
      options: rowKeys,
    },
    disabledKeys: {
      ...MultiSelectionArgTypes.disabledKeys,
      options: rowKeys,
    },
    disallowEmptySelection: {
      control: "boolean",
      description:
        "Whether the selection can be emptied once a row is selected.",
      table: { category: "Selection" },
    },
    isSticky: {
      control: "boolean",
    },
    // Accepted by the type, but Table doesn't use it.
    hasBottom: {
      description: "Whether the table has a bottom content",
      control: "boolean",
    },
    children: {
      control: false,
    },
    sortDescriptor: {
      description: "The current sort descriptor, if any",
    },
    onCellAction: {
      description: "Fires when the user interacts with a cell",
      table: {
        category: "Events",
      },
    },
    onRowAction: {
      description: "Fires when the user interacts with a row",
      table: {
        category: "Events",
      },
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
    striped: {
      description: "Whether the table should have striped rows",
      control: "select",
      options: ["even", "odd"],
    },
    sortVisibility: {
      control: "select",
      options: ["always", "selected"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  args: {
    "aria-label": "Pokemon",
    onCellAction: fn(),
    onRowAction: fn(),
    onSortChange: fn(),
    onSearchChange: fn(),
    children: [
      <Table.Header key="header">
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
      </Table.Header>,
      <Table.Body key="body">
        <Table.Row id="charizard">
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
        </Table.Row>
        <Table.Row id="blastoise">
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
        </Table.Row>
        <Table.Row id="venusaur">
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row id="pikachu">
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>,
    ],
  },
};

export const NestedColumns: Story = {
  args: {
    "aria-label": "Pokemon stats",
    children: [
      <Table.Header key="header">
        <Table.Column title="Basic Info" showDivider>
          <Table.Column id="name" isRowHeader>
            Name
          </Table.Column>
          <Table.Column id="type" showDivider>
            Type
          </Table.Column>
        </Table.Column>
        <Table.Column title="Stats">
          <Table.Column id="hp" showDivider>
            HP
          </Table.Column>
          <Table.Column id="attack" showDivider>
            Attack
          </Table.Column>
          <Table.Column id="defense">Defense</Table.Column>
        </Table.Column>
      </Table.Header>,
      <Table.Body key="body">
        <Table.Row key="1">
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>78</Table.Cell>
          <Table.Cell>84</Table.Cell>
          <Table.Cell>78</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>79</Table.Cell>
          <Table.Cell>83</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>80</Table.Cell>
          <Table.Cell>82</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>35</Table.Cell>
          <Table.Cell>55</Table.Cell>
          <Table.Cell>40</Table.Cell>
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

export const SingleSelection: Story = {
  args: {
    ...Primary.args,
    selectionMode: "single",
  },
};

export const SortableHeaders: Story = {
  render: (args) => {
    const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
      column: "name",
      direction: "descending",
    });

    const pokemons: Record<string, string>[] = [
      { name: "Charizard", type: "Fire, Flying", level: "67" },
      { name: "Blastoise", type: "Water", level: "56" },
      { name: "Venusaur", type: "Grass, Poison", level: "83" },
      { name: "Pikachu", type: "Electric", level: "100" },
    ];

    const sortedPokemon = [...pokemons].sort((a, b) => {
      const column = sortDescriptor.column as string;
      const order = a[column].localeCompare(b[column], undefined, {
        numeric: true,
      });
      return sortDescriptor.direction === "descending" ? -order : order;
    });

    return (
      <Table
        {...args}
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <Table.Header>
          <Table.Column id="name" isRowHeader allowsSorting>
            Name
          </Table.Column>
          <Table.Column id="type" allowsSorting>
            Type
          </Table.Column>
          <Table.Column id="level" allowsSorting>
            Level
          </Table.Column>
        </Table.Header>
        <Table.Body items={sortedPokemon}>
          {(pokemon) => (
            <Table.Row id={pokemon.name}>
              <Table.Cell>{pokemon.name}</Table.Cell>
              <Table.Cell>{pokemon.type}</Table.Cell>
              <Table.Cell>{pokemon.level}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  },
  args: {
    "aria-label": "Sortable Pokemon",
  },
};

export const SearchableColumns: Story = {
  render: (props) => {
    const [searchDescriptor, setSearchDescriptor] = useState<SearchDescriptor>({
      column: "name",
      search: "Chariz",
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
      <Table
        searchDescriptor={searchDescriptor}
        onSearchChange={setSearchDescriptor}
        {...props}
      >
        <Table.Header>
          <Table.Column id="name" allowsSearching isRowHeader>
            Name
          </Table.Column>
          <Table.Column id="type" allowsSearching width={200}>
            Type
          </Table.Column>
          <Table.Column id="level" width={100}>
            Level
          </Table.Column>
        </Table.Header>
        <Table.Body items={filteredPokemon}>
          {(pokemon) => (
            <Table.Row id={pokemon.name}>
              <Table.Cell>{pokemon.name}</Table.Cell>
              <Table.Cell>{pokemon.type}</Table.Cell>
              <Table.Cell>{pokemon.level}</Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    );
  },
  args: {
    "aria-label": "Table with searching",
  },
};

export const CustomizeIcons: Story = {
  args: {
    "aria-label": "Pokemon",
    sortDescriptor: {
      column: "name",
      direction: "descending",
    },
    sortVisibility: "always",
    icons: {
      searchClose: "close",
      searchOpen: "search",
      sortAscending: "arrow_upward",
      sortDescending: "arrow_downward",
      sortNeutral: "sort",
    },
    children: [
      <Table.Header key="header">
        <Table.Column id="name" isRowHeader allowsSorting>
          Name
        </Table.Column>
        <Table.Column id="type" allowsSorting>
          Type
        </Table.Column>
        <Table.Column id="level" allowsSorting>
          Level
        </Table.Column>
      </Table.Header>,
      <Table.Body key="body">
        <Table.Row>
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>,
    ],
  },
};

export const LoadingState: Story = {
  args: {
    ...Primary.args,
    children: [
      <Table.Header key="header">
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
      </Table.Header>,
      <Table.Body key="body" isLoading loadingRows={8} />,
    ],
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
    "aria-label": "Empty table",
    children: [
      <Table.Header key="header">
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
      </Table.Header>,
      <Table.Body
        key="body"
        renderEmpty={
          <Flex $justify="center">There are no rows available!</Flex>
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
        <Flex $align="center" $height="100%" $pl="var(--table-padding-horz)">
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

export const WithPagination: Story = {
  ...Primary,
  render: (args) => (
    <>
      <Table {...args} />
      <Table.Bottom isSticky={args.isSticky}>
        <Flex
          $align="center"
          $justify="end"
          $height="100%"
          $pr="var(--table-padding-horz)"
        >
          <Pagination>
            <Flex $align="center">
              <Pagination.FirstPage />
              <Pagination.PrevPage />
              <Pagination.CurrentPage />
              <Pagination.NextPage />
              <Pagination.LastPage />
            </Flex>
          </Pagination>
        </Flex>
      </Table.Bottom>
    </>
  ),
  args: {
    ...Primary.args,
    hasBottom: true,
  },
};

export const StickyRowHeader: Story = {
  ...Primary,
  decorators: [
    (Story) => (
      <div style={{ width: "800px", overflow: "auto" }}>
        <Story />
      </div>
    ),
  ],
  args: {
    ...Primary.args,
    children: [
      <Table.Header key="header">
        <Table.Column isRowHeader showDivider width={100}>
          Name
        </Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
        <Table.Column>HP</Table.Column>
        <Table.Column>Attack</Table.Column>
        <Table.Column>Defense</Table.Column>
      </Table.Header>,
      <Table.Body key="body">
        <Table.Row key="1">
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
          <Table.Cell>78</Table.Cell>
          <Table.Cell>84</Table.Cell>
          <Table.Cell>78</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
          <Table.Cell>79</Table.Cell>
          <Table.Cell>83</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
          <Table.Cell>80</Table.Cell>
          <Table.Cell>82</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
          <Table.Cell>35</Table.Cell>
          <Table.Cell>55</Table.Cell>
          <Table.Cell>40</Table.Cell>
        </Table.Row>
      </Table.Body>,
    ],
    isSticky: true,
    style: {
      width: "1000px",
    },
  },
};

export const WithStripedRows: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    striped: "odd",
  },
};

export const WithRightAlignedColumns: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    children: [
      <Table.Header key="header">
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column align="right">Type</Table.Column>
        <Table.Column align="right">Level</Table.Column>
      </Table.Header>,
      <Table.Body key="body">
        <Table.Row>
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>,
    ],
  },
};

export const UpperCaseColumnHeaders: Story = {
  ...Primary,
  args: {
    ...Primary.args,
    children: [
      <Table.Header key="header">
        <Table.Column isRowHeader>
          <Text $transform="uppercase">Name</Text>
        </Table.Column>
        <Table.Column>
          <Text $transform="uppercase">Type</Text>
        </Table.Column>
        <Table.Column>
          <Text $transform="uppercase">Level</Text>
        </Table.Column>
      </Table.Header>,
      <Table.Body key="body">
        <Table.Row>
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>,
    ],
  },
};
