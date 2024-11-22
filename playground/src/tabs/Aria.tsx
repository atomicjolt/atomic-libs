import React from "react";
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

export default function Aria() {
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
      <Table>
        <Table.Header>
          <Table.Column isRowHeader>Column 1</Table.Column>
          <Table.Column>Column 2</Table.Column>
          <Table.Column>Column 3</Table.Column>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Test value</Table.Cell>
            <Table.Cell>Test value</Table.Cell>
            <Table.Cell>Test value</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Test value</Table.Cell>
            <Table.Cell>Test value</Table.Cell>
            <Table.Cell>Test value</Table.Cell>
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
            <Table.Row>
              {columns.map((column) => (
                <Table.Cell>{row.cells[column.id]}</Table.Cell>
              ))}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </>
  );
}
