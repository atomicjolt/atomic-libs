import { useCallback, useMemo } from "react";
import { Node, useCollection } from "react-stately";
import { ElementsTableCollection } from "../TableCollection";
import { TableChildren } from "../Table.types";
import { TableCollection } from "@react-stately/table";

interface TableCollectionOptions<T> {
  showSelectionCheckboxes?: boolean;
  showDragButtons?: boolean;
  selectionMode?: "single" | "multiple" | "none";
  children?: TableChildren<T>;
}

export function useTableCollection<T extends object>(
  options: TableCollectionOptions<T>,
  prevCollection: TableCollection<T>
) {
  const {
    showSelectionCheckboxes = false,
    showDragButtons = false,
    selectionMode = "none",
    children,
  } = options;

  const context = useMemo(
    () => ({
      showSelectionCheckboxes:
        showSelectionCheckboxes && selectionMode !== "none",
      showDragButtons: showDragButtons,
      selectionMode,
      columns: [],
    }),
    [children, showSelectionCheckboxes, selectionMode, showDragButtons]
  );

  const collection = useCollection(
    options,
    useCallback(
      (nodes: Iterable<Node<T>>) =>
        new ElementsTableCollection<T>(nodes, prevCollection, context),
      [context]
    ),
    context
  ) as ElementsTableCollection<T>;

  return collection;
}
