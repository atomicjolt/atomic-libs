import { Item } from "@components/Collection";
import { CustomSelect } from "@components/Dropdowns/CustomSelect";
import { AriaLabelProps, ExtendedSize, RenderBaseProps } from "../../../types";
import { PageSizeProps } from "../Pagination.types";

interface PageSizeSelectRenderProps {
  page: number;
  breakPoints: number[];
}

export interface PageSizeSelectProps
  extends Omit<RenderBaseProps<PageSizeSelectRenderProps>, "children">,
    AriaLabelProps,
    PageSizeProps {
  /** The current page number */
  page: number;
  /** Callback when the page size changes */
  onSelectPageSize?: (pageSize: number) => void;

  variant?: "ghost" | "border";
  size?: ExtendedSize;
}

/** Dropdown to select the size of pages. Used in combination with the Pagination component */
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
      variant={variant === "border" ? "default" : "ghost"}
      selectedKey={pageSize.toString()}
      onSelectionChange={(pageSize) =>
        onSelectPageSize?.(parseInt(pageSize as string))
      }
      items={options}
      {...rest}
    >
      {(item) => (
        <Item
          key={item.size}
          textValue={`${item.start}-${item.end} of ${totalItems}`}
        >
          {item.start}-{item.end} of {totalItems}
        </Item>
      )}
    </CustomSelect>
  );
}
