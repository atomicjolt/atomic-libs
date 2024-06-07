import { HasChildren } from "@/types";
import React from "react";
import { useTableRowGroup } from "react-aria";

interface TableRowGroupProps extends HasChildren {
  type: React.ElementType;
}

export const TableRowGroup = React.forwardRef(function TableRowGroup(
  props: TableRowGroupProps,
  ref: React.Ref<HTMLTableSectionElement>
) {
  const { type: Element, children } = props;
  const { rowGroupProps } = useTableRowGroup();

  return (
    <Element {...rowGroupProps} ref={ref}>
      {children}
    </Element>
  );
});
