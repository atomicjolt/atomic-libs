import { TableBottom } from "../../Table.styles";
import { PageSizeSelect } from "@components/Pagination/PageSizeSelect";
import { Pagination } from "@components/Pagination/Pagination";
import { PaginationDescriptor } from "../../../../../types";
import { useRenderProps } from "@hooks";

interface TablePaginationProps<T> {
  descriptor: PaginationDescriptor;
  onChange?: (descriptor: PaginationDescriptor) => void;
  isSticky?: boolean;
}

export function TablePagination<T>(props: TablePaginationProps<T>) {
  const { descriptor, onChange, isSticky } = props;
  const { totalPages, pageSize } = descriptor;

  const onChangePage = (newPage: number) => {
    onChange?.({
      ...descriptor,
      page: newPage,
      totalPages,
      pageSize,
    });
  };

  const onChangeSize = (newPageSize: number) => {
    onChange?.({
      ...descriptor,
      totalPages: (totalPages * pageSize) / newPageSize,
      pageSize: newPageSize,
      page: 1,
    });
  };

  const renderProps = useRenderProps({
    componentClassName: "aje-table__bottom",
    selectors: {
      "data-sticky": isSticky,
    },
  });

  const totalItems = descriptor.totalItems ?? totalPages * pageSize;

  return (
    <TableBottom {...renderProps}>
      <PageSizeSelect
        {...descriptor}
        totalItems={totalItems}
        onSelectPageSize={onChangeSize}
        size="auto"
        isDisabled={totalItems < pageSize}
        aria-label="Select page size"
      />
      <Pagination {...descriptor} onChange={onChangePage} />
    </TableBottom>
  );
}
