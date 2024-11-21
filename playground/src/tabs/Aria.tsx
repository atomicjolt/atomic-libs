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

function Table(props) {
  return (
    <CollectionBuilder content={<Collection {...props} />}>
      {(collection: BaseCollection<any>) => (
        <InternalTable {...props} collection={collection} />
      )}
    </CollectionBuilder>
  );
}

const TableHeader = createBranchComponent(
  "tableheader",
  (props, ref, header) => {
    const state = React.useContext(TableStateContext);

    if (!state) return props.children;

    const { CollectionBranchRenderer } = useCollectionRenderer();
    return (
      <thead>
        <tr>
          <CollectionBranchRenderer
            collection={state.collection!}
            parent={header}
          />
        </tr>
      </thead>
    );
  }
);

const TableBody = createBranchComponent("tablebody", (props, ref, body) => {
  const state = React.useContext(TableStateContext);

  if (!state) return props.children;

  const { CollectionBranchRenderer } = useCollectionRenderer();
  return (
    <tbody>
      <CollectionBranchRenderer collection={state.collection} parent={body} />
    </tbody>
  );
});

const TableColumn = createBranchComponent("column", (props) => {
  return <td>{props.children}</td>;
});

const TableRow = createBranchComponent("row", (props, ref, row) => {
  const state = React.useContext(TableStateContext);

  if (!state) return props.children;

  const { CollectionBranchRenderer } = useCollectionRenderer();
  return (
    <tr>
      <CollectionBranchRenderer collection={state.collection} parent={row} />
    </tr>
  );
});

const TableCell = createLeafComponent("cell", (props) => {
  return <td>{props.children}</td>;
});

const TableStateContext =
  React.createContext<StatelyTableStateProps<any> | null>(null);

function InternalTable(props) {
  console.log(props.collection);
  const { CollectionRenderer } = useCollectionRenderer();

  const state = useStatelyTableState({
    ...props,
    children: undefined,
  });

  return (
    <TableStateContext.Provider value={state}>
      <table>
        <CollectionRenderer collection={props.collection} />
      </table>
    </TableStateContext.Provider>
  );
}

export default function Aria() {
  return (
    <Table>
      <TableHeader>
        <TableColumn>Column 1</TableColumn>
        <TableColumn>Column 2</TableColumn>
        <TableColumn>Column 3</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Test value</TableCell>
          <TableCell>Test value</TableCell>
          <TableCell>Test value</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Test value</TableCell>
          <TableCell>Test value</TableCell>
          <TableCell>Test value</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
