import { Node } from "react-stately";
import { TableState, TreeGridState } from "../../Table.types";
import { TableRow } from "./TableRow";
import { StyledTd } from "../../Table.styles";
import { PageSizeSelect } from "@/components/Pagination/PageSizeSelect";
import { Pagination } from "@/components/Pagination/Pagination";
import { Flex } from "@/components/Layout/Flex/Flex";

interface TablePaginationProps<T> {
  state: TableState<T> | TreeGridState<T>;
  item: Node<T>;
}

export function TablePagination<T>(props: TablePaginationProps<T>) {
  const { state, item } = props;
  const colCount = state.collection.columnCount;

  return (
    <TableRow state={state} item={item}>
      <StyledTd
        colSpan={colCount}
        style={{ padding: 0, paddingRight: "var(--table-padding-horz)" }}
      >
        <Flex justifyContent="flex-end">
          {item.props.pageSize && (
            <PageSizeSelect
              {...item.props}
              size="auto"
              onSelectPageSize={item.props.onPageSizeChange}
            />
          )}
          <Pagination {...item.props} onChange={item.props.onPageChange} />
        </Flex>
      </StyledTd>
    </TableRow>
  );
}
