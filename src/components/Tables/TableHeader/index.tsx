import React, { useState } from 'react'
import '../../general.scss'
import './styles.scss'

export interface Props {
  /** Must include a label for the header. */
  label: string;
  /** Is the column sortable. */
  sortable?: boolean;
  /** Define a default sort for the column */
  sortDefault?: 'ascending' | 'descending' | undefined;
  /** For when a column needs width adjustments */
  width?: string;
}

type sortDirection = 'ascending' | 'descending' | undefined; 

/** Table Header Component */
export default function TableHeader({ 
    label,
    sortable = false,
    sortDefault,
    width,
  }: Props) {

  const [colActive, setColActive] = useState(sortDefault);

  const sortColumn = () => {
    if (colActive === "descending") {
      setColActive("ascending")
    } else if (colActive === "ascending") {
      setColActive(undefined);
    } else {
      setColActive("descending");
    }
  }

  const styleWidth = {
    width: width,
  }

  return (
    <>
      {sortable ?
        <th className="is-sortable" scope="col" aria-sort={colActive as sortDirection} style={styleWidth}>
          <button onClick={sortColumn}>{label}</button>
        </th>
        : <th scope="col" style={styleWidth}>{label}</th>
      }
    </>
  )
}
