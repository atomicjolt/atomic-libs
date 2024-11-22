import { createContext } from 'react';
import { TableState, TreeGridState } from './Table.types';

export const TableStateContext = createContext<TableState<any> | TreeGridState<any> | null>(null);
