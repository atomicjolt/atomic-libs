import { Children, isValidElement, useContext, useRef } from "react";
import { filterDOMProps, mergeProps, useObjectRef } from "@react-aria/utils";
import { GridNode } from "@react-types/grid";
import { Collection, createBranchComponent, createLeafComponent } from "@react-aria/collections";
import { ColumnProps } from "@react-stately/table";
import { SortDirection } from "react-stately";

import { useFocusRing } from "@hooks/useFocusRing";
import { useRenderProps } from "@hooks/useRenderProps";
import { MaterialIcon } from "@components/Icons/MaterialIcon";

import { ColumnContent, SearchComboInput, StyledTh } from "../Table.styles";
import { useExtendedTableColumnHeader } from "../hooks/useExtendedTableColumnHeader";
import { TableOptionsContext, TableStateContext } from "../Table.context";
import { MaterialIcons, RenderBaseProps } from "../../../../types";
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

  /** The label to show in the header cell when this column groups nested
   * `Table.Column`s. Not used for leaf columns, which use `children` instead. */
  title?: React.ReactNode;
}

function TableColumnRender<T extends object>(
  props: TableColumnProps<T>,
  forwardedRef: React.ForwardedRef<HTMLTableCellElement>,
  column: GridNode<T>
) {
  const state = useContext(TableStateContext)!;
  const ref = useObjectRef(forwardedRef);

  // Placeholder cells don't have props
  column.props = column.props || {};

  const isGroup = column.hasChildNodes;

  const {
    allowsSearching = false,
    allowsSorting = false,
    colSpan,
    title,
  } = props;

  const columns = state.collection.columns;
  const isLastCol =
    !isGroup &&
    columns.length > 0 &&
    columns[columns.length - 1].key === column.key;

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
      allowsSearching: !isGroup && allowsSearching,
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
    children: isGroup ? title : props.children,
    values: {
      allowsSorting: !isGroup && allowsSorting,
      isSorting: state.sortDescriptor?.column === column.key,
      allowsSearching: !isGroup && allowsSearching,
      isSearching,
      sortDirection: state.sortDescriptor?.direction,
    },
    selectors: {
      "data-divider": showDivider,
      "data-sortable": !isGroup && allowsSorting,
      "data-has-children": isGroup,
      "data-searchable": !isGroup && allowsSearching,
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
      <StyledTh
        colSpan={isGroup ? column.colSpan ?? undefined : colSpan}
        scope={isGroup ? "colgroup" : "col"}
        ref={ref}
        {...headerProps}
      >
        {isGroup ? (
          <ColumnContent $justify="center">{renderProps.children}</ColumnContent>
        ) : (
          renderProps.children
        )}
      </StyledTh>
    </Provider>
  );
}

export const TableColumn = createLeafComponent("column", TableColumnRender);

/** Registers a column that groups nested `Table.Column`s under a shared,
 * column-spanning header cell. Uses `createBranchComponent` (rather than
 * `createLeafComponent`, like the leaf `TableColumn`) so its `Table.Column`
 * children are actually walked into the collection tree. */
const TableColumnGroup = createBranchComponent<
  object,
  TableColumnProps<object>,
  HTMLTableCellElement
>("column", TableColumnRender, (props) => (
  <Collection>{props.children as React.ReactNode}</Collection>
));

interface TableColumnWrapperProps<T extends object>
  extends TableColumnProps<T> {
  /** The alignment of the column content */
  align?: "left" | "right" | "center";
}

function isNestedColumnElement(
  child: React.ReactNode
): child is React.ReactElement {
  return isValidElement(child) && child.type === TableColumnWrapper;
}

export function TableColumnWrapper<T extends object>(
  props: TableColumnWrapperProps<T>
) {
  const { align } = props;

  const { icons, sortVisibility } = useContext(TableOptionsContext)!;

  const isGroup =
    typeof props.children !== "function" &&
    Children.toArray(props.children).some(isNestedColumnElement);

  if (isGroup) {
    // Nested Table.Columns must pass through untouched so TableColumnGroup's
    // <Collection> can walk them into the collection tree.
    return <TableColumnGroup {...(props as TableColumnProps<object>)} />;
  }

  return (
    <TableColumn {...props} data-sort-visibility={sortVisibility}>
      {(renderProps) => {
        const {
          allowsSearching,
          allowsSorting,
          isSearching,
          isSorting,
          sortDirection,
        } = renderProps;

        const arrowIcon =
          sortDirection === "ascending"
            ? icons.sortAscending
            : icons.sortDescending;

        const children =
          typeof props.children === "function"
            ? props.children(renderProps)
            : props.children;

        return (
          <ColumnContent $justify={align}>
            {children}
            {allowsSorting && isSorting && <MaterialIcon icon={arrowIcon} />}
            {allowsSorting && !isSorting && (
              <MaterialIcon icon={icons.sortNeutral} className="swap-icon" />
            )}
            {allowsSearching && (
              <>
                <SearchComboInput aria-expanded={isSearching} padding="both">
                  <Input slot="search" />
                  <IconButton
                    icon={icons.searchClose}
                    variant="content"
                    size="small"
                    slot="search-close"
                  />
                </SearchComboInput>

                {!isSearching && (
                  <IconButton
                    icon={icons.searchOpen}
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
