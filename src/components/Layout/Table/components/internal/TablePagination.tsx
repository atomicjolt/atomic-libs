import { TableBottom } from "../../Table.styles";
import { PageSizeSelect } from "@components/Pagination/PageSizeSelect";
import { Pagination } from "@components/Pagination/Pagination";
import { PaginationDescriptor } from "../../../../../types";

interface TablePaginationProps<T> {
  descriptor: PaginationDescriptor;
  onChange?: (descriptor: PaginationDescriptor) => void;
}

export function TablePagination<T>(props: TablePaginationProps<T>) {
  const { descriptor, onChange } = props;
  const { totalPages, pageSize } = descriptor;

  const onChangePage = (newPage: number) => {
    onChange?.({
      page: newPage,
      totalPages,
      pageSize,
    });
  };

  const onChangeSize = (newPageSize: number) => {
    onChange?.({
      totalPages: (totalPages * pageSize) / newPageSize,
      pageSize: newPageSize,
      page: 1,
    });
  };

  return (
    <TableBottom className="aje-table__bottom" data-sticky>
      <PageSizeSelect
        {...descriptor}
        totalItems={totalPages * pageSize}
        onSelectPageSize={onChangeSize}
        size="auto"
      />
      <Pagination {...descriptor} onChange={onChangePage} />
    </TableBottom>
  );
}
