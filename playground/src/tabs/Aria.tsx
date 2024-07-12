import React from "react";
import { Pagination } from "../elements";

export default function Aria() {
  const [page, setPage] = React.useState(2);

  return (
    <div>
      <Pagination totalPages={10} page={page} onChange={setPage}></Pagination>
    </div>
  );
}
