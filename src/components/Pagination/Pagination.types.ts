export interface PageProps {
  /** The current page number (controlled) */
  page?: number;
  /** The default page number (uncontrolled)
   * @default 1
   */
  defaultPage?: number;
  /** The total number of pages
   */
  totalPages: number;
}

export interface PageSizeProps {
  /** The current page size */
  pageSize: number;
  /** The total number of items */
  totalItems?: number;
  /** The possible page sizes.
   * Any value within here that is greater than `totalItems` will be filtered out
   * @default [10, 25, 50, 100]
   * */
  possiblePageSizes?: number[];
}
