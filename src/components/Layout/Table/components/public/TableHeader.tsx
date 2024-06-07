/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

// Modified from: https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/table/src/TableHeader.ts

import { CollectionBuilderContext } from "@react-stately/table";
import { PartialNode } from "@react-stately/collections";
import React, { JSX, ReactElement } from "react";
import { TableHeaderProps } from "@react-types/table";
import { TableCollectionBuilderContext } from "../../Table.types";

function TableHeader<T>(props: TableHeaderProps<T>): ReactElement {
  return <></>;
}

TableHeader.getCollectionNode = function* getCollectionNode<T>(
  props: TableHeaderProps<T>,
  context: TableCollectionBuilderContext<T>
): Generator<PartialNode<T>, void, any> {
  const { children, columns } = props;

  // Clear columns so they aren't double added in strict mode.
  context.columns = [];

  if (typeof children === "function") {
    if (!columns) {
      throw new Error(
        "props.children was a function but props.columns is missing"
      );
    }

    if (context.showExpandButtons) {
      yield {
        type: "column",
        props: {
          isExpanderCell: true,
        },
      };
    }

    for (let column of columns) {
      yield {
        type: "column",
        value: column,
        renderer: children,
      };
    }
  } else {
    let columns: PartialNode<T>[] = [];

    if (context.showExpandButtons) {
      columns.push({
        type: "column",
        key: "test",
        props: {
          isExpanderCell: true,
        },
      });
    }

    React.Children.forEach(children, (column) => {
      columns.push({
        type: "column",
        element: column,
      });
    });

    yield* columns;
  }
};

TableHeader.displayName = "Table.Header";

/**
 * A TableHeader is a container for the Column elements in a Table. Columns can be statically defined
 * as children, or generated dynamically using a function based on the data passed to the `columns` prop.
 */
// We don't want getCollectionNode to show up in the type definition
const _TableHeader = TableHeader as <T>(
  props: TableHeaderProps<T>
) => JSX.Element;
export { _TableHeader as TableHeader };
