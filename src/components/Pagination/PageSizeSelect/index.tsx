import { Item } from "@/components/Collection";
import { CustomSelect } from "@/components/Dropdowns/CustomSelect";
import { AriaLabelProps, RenderBaseProps } from "../../../types";

interface PageSizeSelectRenderProps {
  page: number;
  breakPoints: number[];
}

export interface PageSizeSelectProps
  extends Omit<RenderBaseProps<PageSizeSelectRenderProps>, "children">,
    AriaLabelProps {
  /** The current page number */
  page: number;
  /** The current page size */
  pageSize: number;
  /** The total number of items */
  totalItems?: number;
  /** The possible page sizes.
   * Any value within here that is greater than `totalItems` will be filtered out
   * @default [10, 25, 50, 100]
   * */
  possiblePageSizes?: number[];
  /** Callback when the page size changes */
  onSelectPageSize?: (pageSize: number) => void;

  variant?: "ghost" | "border";
}

/** Page size select component. Renders a select
 * dropdown for selecting the page size.
 */
export function PageSizeSelect(props: PageSizeSelectProps) {
  const {
    page,
    pageSize,
    possiblePageSizes: possiblePageSizesProp = [10, 25, 50, 100],
    totalItems = possiblePageSizesProp[possiblePageSizesProp.length - 1],
    onSelectPageSize,
    style,
    variant = "ghost",
    ...rest
  } = props;

  const possiblePageSizes = possiblePageSizesProp.filter(
    (size) => size <= totalItems
  );

  const options = possiblePageSizes.map((size) => {
    let start = (page - 1) * pageSize + 1;
    if (start > totalItems) {
      start = totalItems - pageSize;
    }

    let end = start + size - 1;
    if (end > totalItems) {
      end = totalItems;
    }

    if (pageSize === size) {
      return {
        size,
        start,
        end,
      };
    } else {
      return {
        size,
        start: 1,
        end: size,
      };
    }
  });

  return (
    <CustomSelect
      size="auto"
      variant={variant === "border" ? "default" : "ghost"}
      selectedKey={pageSize.toString()}
      onSelectionChange={(pageSize) =>
        onSelectPageSize?.(parseInt(pageSize as string))
      }
      items={options}
      {...rest}
    >
      {(item) => (
        <Item key={item.size}>
          {item.start}-{item.end} of {totalItems}
        </Item>
      )}
    </CustomSelect>
  );
}
