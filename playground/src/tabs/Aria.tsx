import React, { useId } from "react";
import {
  Button,
  Flex,
  IconButton,
  Pagination,
  PageSelector,
} from "../elements";

export default function Aria() {
  const [page, setPage] = React.useState(2);

  return (
    <div>
      <Pagination totalPages={10} page={page} onChange={setPage}>
        {(props) => <PageSelector {...props} />}
      </Pagination>
    </div>
  );
}
