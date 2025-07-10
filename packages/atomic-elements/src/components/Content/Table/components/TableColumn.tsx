import { useContext, useRef } from "react";
import { filterDOMProps, mergeProps, useObjectRef } from "@react-aria/utils";
import { GridNode } from "@react-types/grid";
import { createLeafComponent } from "@react-aria/collections";
import { ColumnProps } from "@react-stately/table";
import { SortDirection } from "react-stately";

import { useFocusRing } from "@hooks/useFocusRing";
import { useRenderProps } from "@hooks/useRenderProps";
import { MaterialIcon } from "@components/Icons/MaterialIcon";

import { ColumnContent, SearchComboInput, StyledTh } from "../Table.styles";
import { useExtendedTableColumnHeader } from "../hooks/useExtendedTableColumnHeader";
import { TableStateContext } from "../Table.context";
import { RenderBaseProps } from "../../../../types";
import { Input, InputContext } from "@components/Fields/Atoms/Input";
import { useTableSearchInput } from "../hooks/useTableSearchInput";
import { Provider } from "@components/Internal/Provider";
import { DEFAULT_SLOT } from "@hooks/useSlottedContext";
import { ButtonContext } from "@components/Buttons/Button/Button.context";
import { IconButton } from "@components/Buttons/IconButton";

interface TableColumnRenderProps {
  allowsSorting: boolean;
  isSorting: boolean;
  allowsSearching: boolean;
  isSearching: boolean;
  sortDirection?: SortDirection;
}

export interface TableColumnProps<T>
  extends Omit<ColumnProps<T>, "children">,
    RenderBaseProps<TableColumnRenderProps> {
  /** Whether the column can be searched on */
  allowsSearching?: boolean;

  /** Whether to show a divider between this column and the next */
  showDivider?: boolean;

  id?: string;

  /** The number of columns to span */
  colSpan?: number;
}

export const TableColumn = createLeafComponent("column", function TableColumn<
  T extends object
>(props: TableColumnProps<T>, forwardedRef: React.ForwardedRef<HTMLTableCellElement>, column: GridNode<T>) {
  const state = useContext(TableStateContext)!;
  const ref = useObjectRef(forwardedRef);

  // Placeholder cells don't have props
  column.props = column.props || {};

  const { allowsSearching = false, allowsSorting = false, colSpan } = props;

  const isLastCol =
    state.collection.columns[state.collection.columnCount - 1].key ===
    column.key;

  const showDivider = props.showDivider && !isLastCol;

  const inputRef = useRef(null);

  const {
    isSearching,
    searchInputProps,
    searchCloseButtonProps,
    searchOpenButtonProps,
  } = useTableSearchInput(
    {
      column,
      allowsSearching,
    },
    state,
    inputRef
  );

  const { columnHeaderProps } = useExtendedTableColumnHeader(
    { node: column, isSearching },
    state,
    ref,
    inputRef
  );

  const { focusProps } = useFocusRing();

  const renderProps = useRenderProps({
    componentClassName: "aje-table__column",
    ...props,
    values: {
      allowsSorting,
      isSorting: state.sortDescriptor?.column === column.key,
      allowsSearching,
      isSearching,
      sortDirection: state.sortDescriptor?.direction,
    },
    selectors: {
      "data-divider": showDivider,
      "data-sortable": allowsSorting,
      "data-has-children": column.hasChildNodes,
      "data-searchable": allowsSearching,
      "data-searching": isSearching,
    },
  });

  const headerProps = mergeProps(
    filterDOMProps(props as any),
    columnHeaderProps,
    focusProps,
    renderProps
  );

  return (
    <Provider
      values={[
        [
          InputContext.Provider,
          {
            slots: {
              [DEFAULT_SLOT]: {},
              search: {
                ...searchInputProps,
                ref: inputRef,
              },
            },
          },
        ],
        [
          ButtonContext.Provider,
          {
            slots: {
              [DEFAULT_SLOT]: {},
              "search-open": searchOpenButtonProps,
              "search-close": searchCloseButtonProps,
            },
          },
        ],
      ]}
    >
      <StyledTh colSpan={colSpan} ref={ref} {...headerProps}>
        {renderProps.children}
      </StyledTh>
    </Provider>
  );
});

export function TableColumnWrapper<T extends object>(
  props: TableColumnProps<T>
) {
  return (
    <TableColumn {...props}>
      {(renderProps) => {
        const {
          allowsSearching,
          allowsSorting,
          isSearching,
          isSorting,
          sortDirection,
        } = renderProps;

        const arrowIcon =
          sortDirection === "ascending" ? "arrow_drop_down" : "arrow_drop_up";

        const children =
          typeof props.children === "function"
            ? props.children(renderProps)
            : props.children;

        return (
          <ColumnContent>
            {children}
            {allowsSorting && isSorting && <MaterialIcon icon={arrowIcon} />}
            {allowsSorting && !isSorting && (
              <MaterialIcon icon="swap_vert" className="swap-icon" />
            )}
            {allowsSearching && (
              <>
                <SearchComboInput aria-expanded={isSearching} padding="both">
                  <Input slot="search" />
                  <IconButton
                    icon="close"
                    variant="content"
                    size="small"
                    slot="search-close"
                  />
                </SearchComboInput>

                {!isSearching && (
                  <IconButton
                    icon="search"
                    variant="content"
                    size="small"
                    slot="search-open"
                  />
                )}
              </>
            )}
          </ColumnContent>
        );
      }}
    </TableColumn>
  );
}
