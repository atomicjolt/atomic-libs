import {
  useTableState as useStatelyTableState,
  TableStateProps as StatelyTableStateProps,
  TableCollection,
  TableHeaderProps,
} from "@react-stately/table";
import { GridNode } from "@react-types/grid";
import { TableCollection as ITableCollection } from "@react-types/table";
import { TableState } from "../Table.types";
import {
  TableStateExtensionsProps,
  useTableStateExtensions,
} from "./useTableStateExtensions";
import { Node, useCollection } from "react-stately";
import { useCallback, useMemo } from "react";
import { TableBodyProps } from "../components/public/TableBody";
import { TableFooterProps } from "../components/public/TableFooter";

interface GridCollectionOptions {
  showSelectionCheckboxes?: boolean;
  showDragButtons?: boolean;
}

class MyTableCollection<T> extends TableCollection<T> {
  footer: GridNode<T> | null = null;
  footerRows: GridNode<T>[] = [];

  constructor(
    nodes: Iterable<GridNode<T>>,
    prev?: ITableCollection<T>,
    opts?: GridCollectionOptions
  ) {
    super(nodes, prev, opts);

    for (let node of nodes) {
      if (node.type === "footer") {
        this.footer = node;

        if (node.hasChildNodes) {
          this.footerRows = Array.from(node.childNodes);
        }
      }
    }
  }
}

export interface TableStateProps<T extends object>
  extends Omit<StatelyTableStateProps<T>, "children">,
    TableStateExtensionsProps {
  children?: [
    React.ReactElement<TableHeaderProps<T>>,
    React.ReactElement<TableBodyProps<T>>,
    React.ReactElement<TableFooterProps<T>>?, // Footer is optional
  ];
}

export function useTableState<T extends object>(
  props: TableStateProps<T>
): TableState<T> {
  const state = useStatelyTableState(props);
  const stateExtensions = useTableStateExtensions(props, state);

  const {
    selectionMode = "none",
    showSelectionCheckboxes,
    showDragButtons,
  } = props;

  const context = useMemo(
    () => ({
      showSelectionCheckboxes:
        showSelectionCheckboxes && selectionMode !== "none",
      showDragButtons: showDragButtons,
      selectionMode,
      columns: [],
    }),
    [props.children, showSelectionCheckboxes, selectionMode, showDragButtons]
  );

  const collection = useCollection(
    props,
    useCallback(
      (nodes: Iterable<Node<T>>) =>
        new MyTableCollection<T>(nodes, state.collection, context),
      [context]
    ),
    context
  );

  return {
    ...state,
    ...stateExtensions,
    collection,
  };
}
