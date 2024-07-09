import React from "react";
import { AriaLabelProps } from "../../../../../types";
import { PartialNode } from "@react-stately/collections";
import { TableBodyProps } from "./TableBody";

export interface TableFooterProps<T>
  extends AriaLabelProps,
    TableBodyProps<T> {}

export function TableFooter<T>(props: TableFooterProps<T>) {
  return <></>;
}

// https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/table/src/TableBody.ts

TableFooter.getCollectionNode = function* getCollectionNode<T>(
  props: TableFooterProps<T>
): Generator<PartialNode<T>> {
  const { children, items } = props;
  yield {
    type: "footer",
    hasChildNodes: true,
    props,
    *childNodes() {
      if (typeof children === "function") {
        if (!items)
          throw new Error(
            "props.children was a function but props.items is missing"
          );

        for (const item of items) {
          yield {
            type: "item",
            value: item,
            renderer: children,
          };
        }
      } else {
        const items: PartialNode<T>[] = [];
        React.Children.forEach(children, (item) => {
          items.push({
            type: "item",
            element: item,
          });
        });

        yield* items;
      }
    },
  };
};
