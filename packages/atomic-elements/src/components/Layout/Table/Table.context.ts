import { createContext } from 'react';
import { TableState } from './Table.types';

export const TableStateContext = createContext<TableState<any> | null>(null);
