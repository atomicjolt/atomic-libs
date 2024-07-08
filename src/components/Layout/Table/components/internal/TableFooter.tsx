import { TableRowGroup } from "./TableRowGroup";
import { StyledTableFooter } from "../../Table.styles";
import { TableState, TreeGridState } from "../../Table.types";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { useRenderProps } from "@hooks";

interface TableFooterProps<T> {
  state: TableState<T> | TreeGridState<T>;
}

export function TableFooter<T>(props: TableFooterProps<T>) {
  const { state } = props;

  const { collection } = state;

  const rows = [...collection.footer!.childNodes];

  const renderProps = useRenderProps({
    componentClassName: "aje-table__footer",
    ...collection.body.props,
  });

  return (
    <TableRowGroup type={StyledTableFooter} {...renderProps}>
      {rows.map((row) => {
        return (
          <TableRow item={row} state={state} key={row.key}>
            {[...collection.getChildren!(row.key)].map((cell) => {
              return <TableCell key={cell.key} cell={cell} state={state} />;
            })}
          </TableRow>
        );
      })}
    </TableRowGroup>
  );
}
