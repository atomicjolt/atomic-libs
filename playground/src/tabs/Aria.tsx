import React from "react";
import { Flex, Pagination } from "../elements";

export default function Aria() {
  const [page, setPage] = React.useState(2);

  return (
    <div>
      <h1>With total pages</h1>

      <Pagination totalPages={10} page={page} onChange={setPage}>
        <Flex gap={8}>
          <Pagination.FirstPage />
          <Pagination.PrevPage />
          <Pagination.PageList>
            {(page, state) => (
              <Pagination.Page
                page={page}
                variant={page === state.page ? "primary" : "ghost"}
              >
                {page}
              </Pagination.Page>
            )}
          </Pagination.PageList>
          <Pagination.NextPage />
          <Pagination.LastPage />
        </Flex>
      </Pagination>

      <h1>Without total pages</h1>

      <Pagination page={page} onChange={setPage}>
        <Flex gap={8}>
          <Pagination.FirstPage />
          <Pagination.PrevPage />
          <Pagination.PageList totalPages={10}>
            {(page, state) => (
              <Pagination.Page
                page={page}
                variant={page === state.page ? "primary" : "ghost"}
              >
                {page}
              </Pagination.Page>
            )}
          </Pagination.PageList>
          <Pagination.NextPage />
          <Pagination.LastPage />
        </Flex>
      </Pagination>
    </div>
  );
}
