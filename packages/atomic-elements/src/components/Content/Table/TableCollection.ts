import { BaseCollection, CollectionNode } from "@react-aria/collections";
import { TableCollection as ITableCollection, buildHeaderRows } from "@react-stately/table";
import { GridNode } from "@react-types/grid";
import { Key, Node } from "react-stately";

// From https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/Table.tsx

export class TableCollection<T>
  extends BaseCollection<T>
  implements Omit<ITableCollection<T>, "_size" | "keyMap">
{
  headerRows: GridNode<T>[] = [];
  columns: GridNode<T>[] = [];
  rows: GridNode<T>[] = [];
  rowHeaderColumnKeys: Set<Key> = new Set();
  head: CollectionNode<T> = new CollectionNode("tableheader", -1);
  body: CollectionNode<T> = new CollectionNode("tablebody", -2);
  columnsDirty = true;

  addNode(node: CollectionNode<T>) {
    super.addNode(node);

    this.columnsDirty ||= node.type === "column";
    if (node.type === "tableheader") {
      this.head = node;
    }

    if (node.type === "tablebody") {
      this.body = node;
    }
  }

  commit(firstKey: Key, lastKey: Key, isSSR = false) {
    this.updateColumns(isSSR);
    super.commit(firstKey, lastKey, isSSR);
    this.rows = [...this.getChildren(this.body.key)];
  }

  private updateColumns(isSSR: boolean) {
    if (!this.columnsDirty) {
      return;
    }

    this.rowHeaderColumnKeys = new Set();
    this.columns = [];

    let columnKeyMap = new Map();
    let visit = (node: Node<T>) => {
      switch (node.type) {
        case "column":
          columnKeyMap.set(node.key, node);
          if (!node.hasChildNodes) {
            node.index = this.columns.length;
            this.columns.push(node);

            if (node.props.isRowHeader) {
              this.rowHeaderColumnKeys.add(node.key);
            }
          }
          break;
      }
      for (let child of this.getChildren(node.key)) {
        visit(child);
      }
    };

    for (let node of this.getChildren(this.head.key)) {
      visit(node);
    }

    this.headerRows = buildHeaderRows(columnKeyMap, this.columns);
    this.columnsDirty = false;

    // For accessibility react-aria-component enforces that there is a
    // row header for every table. We don't want to enforce this
    // if (
    //   this.rowHeaderColumnKeys.size === 0 &&
    //   this.columns.length > 0 &&
    //   !isSSR
    // ) {
    //   throw new Error(
    //     "A table must have at least one Column with the isRowHeader prop set to true"
    //   );
    // }
  }

  get columnCount() {
    return this.columns.length;
  }

  *[Symbol.iterator]() {
    // Wait until the collection is initialized.
    if (this.head.key === -1) {
      return;
    }
    yield this.head;
    yield this.body;
  }

  get size() {
    return this.rows.length;
  }

  getFirstKey() {
    return this.body.firstChildKey;
  }

  getLastKey() {
    return this.body.lastChildKey;
  }

  getKeyAfter(key: Key) {
    let node = this.getItem(key);
    if (node?.type === "column") {
      return node.nextKey ?? null;
    }

    return super.getKeyAfter(key) ;
  }

  getKeyBefore(key: Key) {
    let node = this.getItem(key);
    if (node?.type === "column") {
      return node.prevKey ?? null;
    }

    let k = super.getKeyBefore(key);
    if (k != null && this.getItem(k)?.type === "tablebody") {
      return null;
    }

    return k;
  }

  getChildren(key: Key): Iterable<Node<T>> {
    if (!this.getItem(key)) {
      for (let row of this.headerRows) {
        if (row.key === key) {
          return row.childNodes;
        }
      }
    }

    return super.getChildren(key);
  }

  clone() {
    let collection = super.clone();
    collection.headerRows = this.headerRows;
    collection.columns = this.columns;
    collection.rowHeaderColumnKeys = this.rowHeaderColumnKeys;
    collection.head = this.head;
    collection.body = this.body;
    return collection;
  }

  getTextValue(key: Key): string {
    let row = this.getItem(key);
    if (!row) {
      return "";
    }

    // If the row has a textValue, use that.
    if (row.textValue) {
      return row.textValue;
    }

    // Otherwise combine the text of each of the row header columns.
    let rowHeaderColumnKeys = this.rowHeaderColumnKeys;
    let text: string[] = [];
    for (let cell of this.getChildren(key)) {
      let column = this.columns[cell.index!];
      if (rowHeaderColumnKeys.has(column.key) && cell.textValue) {
        text.push(cell.textValue);
      }

      if (text.length === rowHeaderColumnKeys.size) {
        break;
      }
    }

    return text.join(" ");
  }
}
