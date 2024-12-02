import { useContext } from 'react';
import { TableOptionsContext } from '../Table.context';
import { TableOptions } from '../Table.types';

export function useTableOptions(): TableOptions {
  const ctx = useContext(TableOptionsContext);

  if (!ctx) {
    throw new Error('useTableOptions must be used within a Table');
  }

  return ctx;
}
