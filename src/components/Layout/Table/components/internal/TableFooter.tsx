import { TableRowGroup } from "./TableRowGroup";
import { StyledRow, StyledTableFooter, StyledTd } from "../../Table.styles";
import {
  PaginationDescriptor,
  TableState,
  TreeGridState,
} from "../../Table.types";
import { Flex } from "@/components/Layout/Flex/Flex";
import { Pagination } from "@/components/Pagination/Pagination";
import { PageSizeSelect } from "@/components/Pagination/PageSizeSelect";

interface TableFooterProps<T> {
  state: TableState<T> | TreeGridState<T>;
  paginationDescriptor: PaginationDescriptor;
  onPaginationChange?: (descriptor: PaginationDescriptor) => void;
}

export function TableFooter<T>(props: TableFooterProps<T>) {
  const { state, paginationDescriptor, onPaginationChange } = props;
  const {
    page,
    totalPages,
    pageSize,
    totalItems = totalPages * pageSize,
  } = paginationDescriptor;

  const columnCount = state.collection.columnCount;

  return (
    <TableRowGroup type={StyledTableFooter}>
      <StyledRow>
        <StyledTd
          colSpan={columnCount}
          style={{ padding: "0px", paddingRight: "var(--table-padding-horz)" }}
        >
          <Flex justifyContent="flex-end">
            <PageSizeSelect
              page={page}
              pageSize={pageSize}
              totalItems={totalItems}
              onSelectPageSize={(pageSize) => {
                onPaginationChange?.({
                  ...paginationDescriptor,
                  page: 1,
                  pageSize,
                });
              }}
            />
            <Pagination
              page={page}
              totalPages={totalPages}
              onChange={(page) => {
                onPaginationChange?.({ ...paginationDescriptor, page });
              }}
            />
          </Flex>
        </StyledTd>
      </StyledRow>
    </TableRowGroup>
  );
}
