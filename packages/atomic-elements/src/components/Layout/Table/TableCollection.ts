import { TableCollection as StatelyTableCollection } from "@react-stately/table";
import { GridNode } from "@react-types/grid";
import { TableCollection as ITableCollection } from "@react-types/table";

interface GridCollectionOptions {
  showSelectionCheckboxes?: boolean;
  showDragButtons?: boolean;
}

// Extends the table collection to add support for a footer node.
export class ElementsTableCollection<T> extends StatelyTableCollection<T> {
  footer: GridNode<T> | null = null;

  constructor(
    nodes: Iterable<GridNode<T>>,
    prev?: ITableCollection<T>,
    opts?: GridCollectionOptions
  ) {
    super(nodes, prev, opts);

    for (let node of nodes) {
      if (node.type === "footer") {
        this.footer = node;
      }
    }
  }
}
