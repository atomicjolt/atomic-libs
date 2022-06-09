import React from "react";
import { SortDirection } from "../../../types";

interface TableContextData {
  sortPath?: string;
  sortDirection?: SortDirection;
  onSort: (path: string, direction: SortDirection) => void;
}

const TableContext = React.createContext<TableContextData>(
  {} as TableContextData
);

export default TableContext;
