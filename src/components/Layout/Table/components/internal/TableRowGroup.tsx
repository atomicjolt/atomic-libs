import React from "react";
import { useTableRowGroup } from "react-aria";

interface TableRowGroupProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {
  type: React.ElementType;
}

export const TableRowGroup = React.forwardRef(function TableRowGroup(
  props: TableRowGroupProps,
  ref: React.Ref<HTMLTableSectionElement>
) {
  const { type: Element, children, ...rest } = props;
  const { rowGroupProps } = useTableRowGroup();

  return (
    <Element {...rowGroupProps} {...rest} ref={ref}>
      {children}
    </Element>
  );
});
