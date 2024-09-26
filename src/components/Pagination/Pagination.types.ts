export interface PageState {
  /** The current page number (controlled) */
  page: number;
  /** Callback when the page changes */
  onPageChange: (page: number) => void;
  /** The total number of pages. Optionally provide
   * for Pagination.PageList and Pagination.LastPage */
  totalPages?: number;

  /** The size of each page */
  pageSize: number;

  onPageSizeChange: (pageSize: number) => void;
}

export interface PageProps extends Partial<PageState> {
  /** The default page number (uncontrolled)
   * @default 1
   */
  defaultPage?: number;

  /** The default page size (uncontrolled)
   * @default 10
   */
  defaultPageSize?: number;
}

export interface PageSizeProps {
  /** The current page size */
  pageSize: number;
  /** The total number of items */
  totalItems: number;
  /** The possible page sizes.
   * Any value within here that is greater than `totalItems` will be filtered out
   * @default [10, 25, 50, 100]
   * */
  possiblePageSizes?: number[];
}
