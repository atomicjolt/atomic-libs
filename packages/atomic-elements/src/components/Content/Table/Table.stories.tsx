import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Table } from ".";
import { SearchDescriptor } from "../../../types";
import { getCssProps } from "@sb/cssprops";
import { Flex } from "../../Layout/Flex";
import { Button } from "@components/Buttons/Button";
import { MaterialIcon, Pagination } from "@components/index";
import { RenderPropsArgTypes } from "@sb/helpers";

const meta: Meta<typeof Table> = {
  title: "Content/Table",
  component: Table,
  parameters: {
    cssprops: getCssProps("Table"),
  },
  argTypes: {
    ...RenderPropsArgTypes,
    isSticky: {
      description: "Whether the bottom content should be sticky",
      control: "boolean",
    },
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
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  args: {
    onCellAction: fn(),
    onRowAction: fn(),
    onSortChange: fn(),
    onSearchChange: fn(),
    children: [
      <Table.Header>
        <Table.Column isRowHeader>Name</Table.Column>
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

// export const NestedColumns: Story = {
//   args: {
//     variant: "full-borders",
//     children: [
//       <Table.Header key="header">
//         <Table.Column key="name" showDivider>
//           Name
//         </Table.Column>
//         <Table.Column title="Details">
//           <Table.Column key="type">Type</Table.Column>
//           <Table.Column key="level">Level</Table.Column>
//         </Table.Column>
//       </Table.Header>,
//       <Table.Body key="body">
//         <Table.Row key="1">
//           <Table.Cell>Charizard</Table.Cell>
//           <Table.Cell>Fire, Flying</Table.Cell>
//           <Table.Cell>67</Table.Cell>
//         </Table.Row>
//         <Table.Row key="2">
//           <Table.Cell>Blastoise</Table.Cell>
//           <Table.Cell>Water</Table.Cell>
//           <Table.Cell>56</Table.Cell>
//         </Table.Row>
//         <Table.Row key="3">
//           <Table.Cell>Venusaur</Table.Cell>
//           <Table.Cell>Grass, Poison</Table.Cell>
//           <Table.Cell>83</Table.Cell>
//         </Table.Row>
//         <Table.Row key="4">
//           <Table.Cell>Pikachu</Table.Cell>
//           <Table.Cell>Electric</Table.Cell>
//           <Table.Cell>100</Table.Cell>
//         </Table.Row>
//       </Table.Body>,
//     ],
//   },
// };

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

export const SearchableColumns: Story = {
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
      </div>
    );
  },
  args: {
    "aria-label": "Table with searching",
  },
};

// export const WithNestedRows: Story = {
//   render: (args) => {
//     return (
//       <Table {...args}>
//         <Table.Header>
//           <Table.Column key="name">Name</Table.Column>
//           <Table.Column key="specialMove">Special Move</Table.Column>
//           <Table.Column key="level">Level</Table.Column>
//         </Table.Header>
//         <Table.Body>
//           <Table.Row key="Fire, Flying">
//             <Table.Cell>Fire, Flying </Table.Cell>
//             <Table.Cell />
//             <Table.Cell />
//             <Table.Row>
//               <Table.Cell>Charizard</Table.Cell>
//               <Table.Cell>Flamethrower</Table.Cell>
//               <Table.Cell>67</Table.Cell>
//             </Table.Row>

//             <Table.Row>
//               <Table.Cell>Moltres</Table.Cell>
//               <Table.Cell>Fire Spin</Table.Cell>
//               <Table.Cell>60</Table.Cell>
//             </Table.Row>
//           </Table.Row>
//           <Table.Row key="Water">
//             <Table.Cell>Water</Table.Cell>
//             <Table.Cell />
//             <Table.Cell />

//             <Table.Row>
//               <Table.Cell>Blastoise</Table.Cell>
//               <Table.Cell>Hydro Pump</Table.Cell>
//               <Table.Cell>56</Table.Cell>
//             </Table.Row>

//             <Table.Row>
//               <Table.Cell>Vaporeon</Table.Cell>
//               <Table.Cell>Aqua Tail</Table.Cell>
//               <Table.Cell>65</Table.Cell>
//             </Table.Row>
//           </Table.Row>
//           <Table.Row key="Grass, Poison">
//             <Table.Cell>Grass, Poison</Table.Cell>
//             <Table.Cell />
//             <Table.Cell />

//             <Table.Row>
//               <Table.Cell>Venusaur</Table.Cell>
//               <Table.Cell>Solar Beam</Table.Cell>
//               <Table.Cell>83</Table.Cell>
//             </Table.Row>

//             <Table.Row>
//               <Table.Cell>Victreebel</Table.Cell>
//               <Table.Cell>Leaf Blade</Table.Cell>
//               <Table.Cell>70</Table.Cell>
//             </Table.Row>
//           </Table.Row>

//           <Table.Row key="Electric">
//             <Table.Cell>Electric</Table.Cell>
//             <Table.Cell />
//             <Table.Cell />

//             <Table.Row>
//               <Table.Cell>Pikachu</Table.Cell>
//               <Table.Cell>Thunderbolt</Table.Cell>
//               <Table.Cell>100</Table.Cell>
//             </Table.Row>

//             <Table.Row>
//               <Table.Cell>Raichu</Table.Cell>
//               <Table.Cell>Thunder Punch</Table.Cell>
//               <Table.Cell>90</Table.Cell>
//             </Table.Row>
//           </Table.Row>
//         </Table.Body>
//       </Table>
//     );
//   },
//   argTypes: {
//     defaultExpandedKeys: {
//       description: "The default expanded keys",
//       control: false,
//     },
//     expandedKeys: {
//       description: "The expanded keys",
//       control: "multi-select",
//       options: ["Fire, Flying", "Water", "Grass, Poison", "Electric"],
//     },
//     onExpandedChange: {
//       action: "expandedChange",
//       description: "Fires when the expanded keys change",
//       table: {
//         category: "Events",
//       },
//     },
//   },
//   args: {
//     "aria-label": "Table with nested rows",
//     allowsExpandableRows: true,
//     defaultExpandedKeys: ["Fire, Flying", "Water"],
//     onExpandedChange: fn(),
//   },
// };

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
      <Table.Header>
        <Table.Column isRowHeader showDivider width={100}>
          Name
        </Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
        <Table.Column>HP</Table.Column>
        <Table.Column>Attack</Table.Column>
        <Table.Column>Defense</Table.Column>
      </Table.Header>,
      <Table.Body>
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
