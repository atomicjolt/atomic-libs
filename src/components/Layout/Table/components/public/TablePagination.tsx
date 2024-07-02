import { PartialNode } from "@react-stately/collections";
import { RowProps } from "./TableRow";
import {
  PageProps,
  PageSizeProps,
} from "../../../../Pagination/Pagination.types";
import { ButtonVariants } from "../../../../Buttons/Buttons.types";
import { AriaLabelProps } from "../../../../../types";

export interface TablePaginationProps<T>
  extends Omit<RowProps<T>, "children">,
    PageProps,
    PageSizeProps,
    AriaLabelProps {
  onPageChange?: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  variant?: ButtonVariants;
}

function TablePagination<T>(props: TablePaginationProps<T>) {
  return <></>;
}

TablePagination.getCollectionNode = function* getCollectionNode<T>(
  props: TablePaginationProps<T>,
  context: any
): Generator<PartialNode<T>> {
  let { textValue } = props;

  yield {
    type: "pagination",
    props: props,
    textValue,
    "aria-label": props["aria-label"],
    hasChildNodes: false,
    shouldInvalidate(newContext: any) {
      return (
        newContext.columns.length !== context.columns.length ||
        // @ts-expect-error
        newContext.columns.some((c, i) => c.key !== context.columns[i].key)
      );
    },
  };
};

/**
 */
let _TablePagination = TablePagination as <T>(
  props: TablePaginationProps<T>
) => JSX.Element;
export { _TablePagination as TablePagination };
