import { BaseCollection, CollectionNode } from "@react-aria/collections";
import {
  TableCollection as ITableCollection,
  buildHeaderRows,
} from "@react-stately/table";
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
      // Recurse using the real node so structural traversal (getChildren)
      // is never affected by what we do below.
      for (let child of this.getChildren(node.key)) {
        visit(child);
      }

      if (node.type !== "column") {
        return;
      }

      // buildHeaderRows mutates colSpan/level/nextKey/prevKey directly on
      // the node objects it's given to build its header-row linkage. Since
      // these are the SAME persistent objects our own keyMap uses for real
      // structural traversal (getChildren), passing them in directly lets
      // buildHeaderRows' rendering-order links leak into and corrupt the
      // real parent/child structure on the next commit - which compounds
      // and hangs the table once columns are nested. Give buildHeaderRows
      // disposable clones instead so it can mutate freely.
      let columnNode = (
        node as unknown as CollectionNode<T>
      ).clone() as unknown as GridNode<T>;
      columnKeyMap.set(columnNode.key, columnNode);

      if (!columnNode.hasChildNodes) {
        columnNode.index = this.columns.length;
        this.columns.push(columnNode);

        if (columnNode.props.isRowHeader) {
          this.rowHeaderColumnKeys.add(columnNode.key);
        }
      }
    };

    for (let node of this.getChildren(this.head.key)) {
      visit(node);
    }

    this.headerRows = buildHeaderRows(columnKeyMap, this.columns);
    this.columnsDirty = false;
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

    return super.getKeyAfter(key);
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
