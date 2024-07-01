import { useControlledState } from "@react-stately/utils";
import { AriaLabelProps, ExtendedSize, RenderBaseProps } from "../../../types";
import { useRenderProps } from "@/hooks/useRenderProps";
import { Flex } from "@/components/Layout/Flex/Flex";
import { IconButton } from "@/components/Buttons/IconButton";
import { ButtonVariants } from "../..//Buttons/Buttons.types";

type PaginationParts = "first" | "prev" | "next" | "last";

interface PaginationRenderProps {
  page: number;
  totalPages?: number;
}

export interface PaginationProps
  extends RenderBaseProps<PaginationRenderProps>,
    AriaLabelProps {
  /** The current page number (controlled) */
  page?: number;
  /** The default page number (uncontrolled)
   * @default 1
   */
  defaultPage?: number;
  /** The total number of pages
   */
  totalPages: number;
  /** Callback when the page changes */
  onChange?: (page: number) => void;
  /** The size of the pagination buttons */
  size?: ExtendedSize;
  /** The parts of the pagination to hide */
  hide?: Iterable<PaginationParts>;
  /** Variants for the pagination buttons */
  variant?: ButtonVariants;
}

// TODO: needs localization

/** Pagination component. Handles rendering buttons
 * for navigating through pages.
 */
export function Pagination(props: PaginationProps) {
  const {
    defaultPage = 1,
    totalPages,
    size,
    hide: hideProp = [],
    variant = "ghost",
  } = props;

  const [page, setPage] = useControlledState(
    props.page,
    defaultPage,
    props.onChange
  );

  const hide = new Set(hideProp);

  const renderProps = useRenderProps({
    componentClassName: "aje-pagination",
    values: { page, totalPages },
    ...props,
  });

  return (
    <Flex alignItems="center" gap={8} {...renderProps}>
      {!hide.has("first") && (
        <IconButton
          variant={variant}
          aria-label="First Page"
          icon="first_page"
          isDisabled={page === 1}
          onPress={() => setPage(1)}
          size={size}
        />
      )}
      {!hide.has("prev") && (
        <IconButton
          variant={variant}
          aria-label="Previous Page"
          icon="chevron_left"
          isDisabled={page === 1}
          onPress={() => setPage(page - 1)}
          size={size}
        />
      )}
      {renderProps.children}
      {!hide.has("next") && (
        <IconButton
          variant={variant}
          aria-label="Next Page"
          icon="chevron_right"
          isDisabled={page === totalPages}
          onPress={() => setPage(page + 1)}
          size={size}
        />
      )}
      {!hide.has("last") && (
        <IconButton
          variant={variant}
          aria-label="Last Page"
          icon="last_page"
          isDisabled={page === totalPages}
          onPress={() => setPage(totalPages)}
          size={size}
        />
      )}
    </Flex>
  );
}
