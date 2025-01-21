import { createContext } from 'react';
import { TableOptions, TableState, TreeGridState } from './Table.types';

export const TableStateContext = createContext<TableState<any> | TreeGridState<any> | null>(null);

export const TableOptionsContext = createContext<TableOptions | null>(null);
