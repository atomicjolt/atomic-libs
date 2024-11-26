import React, { useState } from "react";
import {
  BaseCollection,
  Collection,
  CollectionBuilder,
  createBranchComponent,
  createLeafComponent,
} from "@react-aria/collections";
import {
  useTableState as useStatelyTableState,
  TableStateProps as StatelyTableStateProps,
  TableCollection,
} from "@react-stately/table";
import { useCollectionRenderer } from "../../../packages/atomic-elements/src/hooks/useCollectionRenderer";
import { Table } from "../../../packages/atomic-elements/src/components/Layout/Table";
import { SortDescriptor } from "react-stately";
import { SearchDescriptor } from "@atomicjolt/atomic-elements";

// function Table(props) {
//   return (
//     <CollectionBuilder content={<Collection {...props} />}>
//       {(collection: BaseCollection<any>) => (
//         <InternalTable {...props} collection={collection} />
//       )}
//     </CollectionBuilder>
//   );
// }

// const TableHeader = createBranchComponent(
//   "tableheader",
//   (props, ref, header) => {
//     const state = React.useContext(TableStateContext);

//     if (!state) return props.children;

//     const { CollectionBranchRenderer } = useCollectionRenderer();
//     return (
//       <thead>
//         <tr>
//           <CollectionBranchRenderer
//             collection={state.collection!}
//             parent={header}
//           />
//         </tr>
//       </thead>
//     );
//   }
// );

// const TableBody = createBranchComponent("tablebody", (props, ref, body) => {
//   const state = React.useContext(TableStateContext);

//   if (!state) return props.children;

//   const { CollectionBranchRenderer } = useCollectionRenderer();
//   return (
//     <tbody>
//       <CollectionBranchRenderer collection={state.collection} parent={body} />
//     </tbody>
//   );
// });

// const TableColumn = createBranchComponent("column", (props) => {
//   return <td>{props.children}</td>;
// });

// const TableRow = createBranchComponent("row", (props, ref, row) => {
//   const state = React.useContext(TableStateContext);

//   if (!state) return props.children;

//   const { CollectionBranchRenderer } = useCollectionRenderer();
//   return (
//     <tr>
//       <CollectionBranchRenderer collection={state.collection} parent={row} />
//     </tr>
//   );
// });

// const TableCell = createLeafComponent("cell", (props) => {
//   return <td>{props.children}</td>;
// });

// const TableStateContext =
//   React.createContext<StatelyTableStateProps<any> | null>(null);

// function InternalTable(props) {
//   console.log(props.collection);
//   const { CollectionRenderer } = useCollectionRenderer();

//   const state = useStatelyTableState({
//     ...props,
//     children: undefined,
//   });

//   return (
//     <TableStateContext.Provider value={state}>
//       <table>
//         <CollectionRenderer collection={props.collection} />
//       </table>
//     </TableStateContext.Provider>
//   );
// }

function MyRow(props) {
  return (
    <Table.Row>
      <Table.Cell>{props.name}</Table.Cell>
      <Table.Cell>{props.age}</Table.Cell>
      <Table.Cell>Test value</Table.Cell>
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
    {
      id: "row-2",
      cells: {
        "column-1": "Test value",
        "column-2": "Test value",
        "column-3": "Test value",
      },
    },
  ];

  return (
    <>
      <Table
        onSortChange={setSortDesc}
        sortDescriptor={sortDesc}
        onSearchChange={setSearchDesc}
        searchDescriptor={searchDesc}
        selectionMode="multiple"
        selectionBehavior="toggle"
      >
        <Table.Header>
          <Table.Column isRowHeader allowsSorting allowsSearching>
            Name
          </Table.Column>
          <Table.Column allowsSorting allowsSearching>
            Type
          </Table.Column>
          <Table.Column>Level</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Pikachu</Table.Cell>
            <Table.Cell>Electric</Table.Cell>
            <Table.Cell>25</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Charmander</Table.Cell>
            <Table.Cell>Fire</Table.Cell>
            <Table.Cell>15</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bulbasaur</Table.Cell>
            <Table.Cell>Grass/Poison</Table.Cell>
            <Table.Cell>20</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <br />
      <br />

      <Table>
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column isRowHeader={column.isRowHeader}>
              {column.title}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={rows}>
          {(row) => (
            <MyRow name={row.cells["column-1"]} age={row.cells["column-2"]} />
          )}
        </Table.Body>
      </Table>
    </>
  );
}
