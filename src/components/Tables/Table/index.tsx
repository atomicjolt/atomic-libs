import React from "react";
import "../../general.scss";
import "./styles.scss";
import TableHeader from "../TableHeader";

export interface Props {
  /** Must include a title to label the table. */
  title: string;
  /** Adds sticky first column when a horizontal scrollbar is present. Reccommended to use with vertical borders on. */
  sticky?: boolean;
  /** Adds vertical borders between columns. */
  verticalBorders?: boolean;
  /** Must include if using sortable headers, adds accessible instructions to the table title. */
  sortable?: boolean;
}

/** Table Component */
export default function Table({
  title,
  sticky = false,
  verticalBorders = false,
  sortable = false,
}: Props) {
  const stickyClass = sticky ? " is-sticky" : "";
  const verticalBordersClass = verticalBorders ? " has-vertical-borders" : "";

  /* Add functionality to remove sort order from other headers if you click on other ones. */

  return (
    <div className="aj-table-overflow">
      <table className={`aj-table${stickyClass}${verticalBordersClass}`}>
        <caption className="aj-hidden">
          {title}
          {sortable ? (
            <span>, column headers with buttons are sortable.</span>
          ) : null}
        </caption>
        <thead>
          <tr>
            <TableHeader label="Monday" sortable sortDefault="ascending" />
            <TableHeader label="Tuesday" sortable width="300px" />
            <TableHeader label="Wednesday" sortable />
            <TableHeader label="Thursday" sortable />
            <TableHeader label="Friday" />
            <TableHeader label="Saturday" />
            <TableHeader label="Sunday" sortable />
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Other</th>
            <td>Other</td>
            <td>Other</td>
            <td>Other</td>
            <td>Other</td>
            <td>Other</td>
            <td>Other</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
