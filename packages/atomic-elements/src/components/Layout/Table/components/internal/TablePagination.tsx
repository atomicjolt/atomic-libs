import { StyledTableBottom } from "../../Table.styles";
import { PageSizeSelect } from "@components/Pagination/PageSizeSelect";
import { Pagination } from "@components/Pagination/Pagination";
import { PaginationDescriptor } from "../../../../../types";
import { useRenderProps } from "@hooks";
import { Flex } from "@components/Layout/Flex/Flex";

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
    <StyledTableBottom {...renderProps}>
      <Flex
        justifyContent="flex-end"
        alignItems="center"
        style={{ height: "100%", paddingRight: "var(--table-padding-horz)" }}
      >
        <PageSizeSelect
          {...descriptor}
          totalItems={totalItems}
          onSelectPageSize={onChangeSize}
          size="auto"
          isDisabled={totalItems < pageSize}
          aria-label="Select page size"
        />
        <Pagination {...descriptor} onPageChange={onChangePage}>
          <Flex alignItems="center" gap={8}>
            <Pagination.FirstPage />
            <Pagination.PrevPage />
            <Pagination.NextPage />
            <Pagination.LastPage />
          </Flex>
        </Pagination>
      </Flex>
    </StyledTableBottom>
  );
}
