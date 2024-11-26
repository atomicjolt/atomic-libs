import { useContext } from "react";
import { useRenderProps } from "@hooks/useRenderProps";
import { StyledThead } from "../Table.styles";
import { TableRowGroup } from "./TableRowGroup";
import { TableHeaderRow } from "./TableHeaderRow";
import {
  Node,
  TableHeaderProps as StatelyTableHeaderProps,
} from "react-stately";
import { Collection, createBranchComponent } from "@react-aria/collections";
import { TableStateContext } from "../Table.context";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";
import { CheckBoxContext } from "@components/Inputs/Checkbox";
import { useTableSelectAllCheckbox } from "@react-aria/table";
import { DEFAULT_SLOT } from "@hooks/useSlottedContext";

export interface TableHeaderProps<T> extends StatelyTableHeaderProps<T> {}

export const TableHeader = createBranchComponent(
  "tableheader",
  function TableHeader<T extends object>(
    props: TableHeaderProps<T>,
    ref: React.ForwardedRef<HTMLTableSectionElement>,
    header: Node<T>
  ) {
    const state = useContext(TableStateContext)!;
    const { checkboxProps } = useTableSelectAllCheckbox(state);

    const { CollectionBranchRenderer } = useCollectionRenderer();

    const renderProps = useRenderProps({
      componentClassName: "aje-table__header",
    });

    return (
      <CheckBoxContext.Provider
        value={{
          slots: {
            [DEFAULT_SLOT]: {},
            selection: checkboxProps,
          },
        }}
      >
        <TableRowGroup type={StyledThead} {...renderProps} ref={ref}>
          <TableHeaderRow item={header} state={state}>
            <CollectionBranchRenderer
              collection={state.collection!}
              parent={header}
            />
          </TableHeaderRow>
        </TableRowGroup>
      </CheckBoxContext.Provider>
    );
  },
  (props) => <Collection items={props.columns}>{props.children}</Collection>
);
