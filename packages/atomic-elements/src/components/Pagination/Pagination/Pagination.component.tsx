import { filterDOMProps } from "@react-aria/utils";
import React, { useContext, useRef, type JSX } from "react";
import { useControlledState } from "@react-stately/utils";
import { AriaLabelProps, ExtendedSize, RenderBaseProps } from "../../../types";
import { useRenderProps } from "@hooks/useRenderProps";
import { IconButton } from "@components/Buttons/IconButton";
import { ButtonVariants, ButtonProps } from "@components/Buttons/Button";
import { PageProps, PageState } from "../Pagination.types";
import { ButtonContext } from "@components/Buttons/Button/Button.context";
import {
  PaginationStateContext,
  PaginationContext,
} from "./Pagination.context";
import { Button } from "@components/Buttons/Button";
import { IconButtonProps } from "../../Buttons/IconButton";
import { CustomSelectProps } from "../../Dropdowns/CustomSelect";
import { CustomSelect } from "@components/Dropdowns/CustomSelect";
import { useContextProps } from "@hooks/useContextProps";

interface PaginationRenderProps {
  page: number;
  pageSize: number;
}

export interface PaginationProps
  extends PageProps,
    RenderBaseProps<PaginationRenderProps>,
    AriaLabelProps {
  /** The size of the pagination buttons */
  size?: ExtendedSize;
  /** Variants for the pagination buttons
   * @default "ghost"
   */
  variant?: ButtonVariants;
}

// TODO: needs localization

/** Pagination component. Handles rendering buttons
 * for navigating through pages.
 */
export function Pagination(props: PaginationProps) {
  let ref = useRef<HTMLDivElement>(null);
  [props, ref] = useContextProps(PaginationContext, props, ref);

  const {
    totalPages,
    defaultPage = 1,
    defaultPageSize = 10,
    size,
    variant = "ghost",
  } = props;

  const [page, setPage] = useControlledState(
    props.page,
    defaultPage,
    props.onPageChange
  );

  const [pageSize, setPageSize] = useControlledState(
    props.pageSize,
    defaultPageSize,
    props.onPageSizeChange
  );

  const renderProps = useRenderProps({
    componentClassName: "aje-pagination",
    values: { page, pageSize },
    ...props,
  });

  return (
    <div
      {...renderProps}
      {...filterDOMProps(props, { labelable: true })}
      role="navigation"
    >
      <ButtonContext.Provider value={{ variant, size }}>
        <PaginationStateContext.Provider
          value={{
            page,
            onPageChange: setPage,
            totalPages,
            pageSize,
            onPageSizeChange: setPageSize,
          }}
        >
          {renderProps.children}
        </PaginationStateContext.Provider>
      </ButtonContext.Provider>
    </div>
  );
}

/** IconButton that goes to the first page. Disabled on the first page. */
Pagination.FirstPage = function PaginationFirstPage(
  props: Partial<IconButtonProps>
) {
  const { icon = "first_page", onPress, ...rest } = props;
  const { page, onPageChange: onChange } = useContext(PaginationStateContext);

  return (
    <IconButton
      aria-label="First Page"
      isDisabled={page === 1}
      onPress={(e) => {
        onChange(1);
        onPress?.(e);
      }}
      icon={icon}
      {...rest}
    />
  );
};

/** IconButton that goes to the previous page. Disabled on the first page. */
Pagination.PrevPage = function PaginationPrevPage(
  props: Partial<IconButtonProps>
) {
  const { icon = "chevron_left", onPress, ...rest } = props;
  const { page, onPageChange: onChange } = useContext(PaginationStateContext);

  return (
    <IconButton
      aria-label="Previous Page"
      isDisabled={page === 1}
      onPress={(e) => {
        onChange(page - 1);
        onPress?.(e);
      }}
      icon={icon}
      {...rest}
    />
  );
};

/** IconButton that goes to the next page. Disabled on the last page
 * (when `totalPages` is known). */
Pagination.NextPage = function PaginationNextPage(
  props: Partial<IconButtonProps>
) {
  const { icon = "chevron_right", onPress, ...rest } = props;
  const {
    page,
    totalPages,
    onPageChange: onChange,
  } = useContext(PaginationStateContext);

  return (
    <IconButton
      aria-label="Next Page"
      isDisabled={page === totalPages}
      onPress={(e) => {
        onChange(page + 1);
        onPress?.(e);
      }}
      icon={icon}
      {...rest}
    />
  );
};

/** IconButton that goes to the last page. Needs `totalPages`. Disabled on
 * the last page. */
Pagination.LastPage = function PaginationLastPage(
  props: Partial<IconButtonProps>
) {
  const { icon = "last_page", onPress, ...rest } = props;
  const {
    page,
    totalPages,
    onPageChange: onChange,
  } = useContext(PaginationStateContext);

  return (
    <IconButton
      aria-label="Last Page"
      isDisabled={page === totalPages}
      onPress={(e) => {
        totalPages && onChange(totalPages);
        onPress?.(e);
      }}
      icon={icon}
      {...rest}
    />
  );
};

type PaginationPageProps = ButtonProps & {
  /** The page number */
  page: number;
};

/** Button that goes to the given `page`. */
Pagination.Page = function PaginationPage(props: PaginationPageProps) {
  const { page, onPress, ...rest } = props;
  const { onPageChange: onChange } = useContext(PaginationStateContext);

  return (
    <Button
      onPress={(e) => {
        onChange(page);
        onPress?.(e);
      }}
      {...rest}
    />
  );
};

interface PaginationPagesProps {
  children: (page: number, state: PageState) => JSX.Element;
  totalPages?: number;
}

/** Renders its render-function child once for each page, from 1 to
 * `totalPages`. Renders nothing if `totalPages` isn't known. */
Pagination.PageList = function PaginationPages(props: PaginationPagesProps) {
  const state = useContext(PaginationStateContext);
  const { children, totalPages = state.totalPages } = props;

  if (!totalPages) {
    console.warn("Pagination.Pages: totalPages is not defined");
    return null;
  }

  return (
    <>
      {Array.from({ length: totalPages }, (_, i) => (
        <React.Fragment key={i}>{children(i + 1, state)}</React.Fragment>
      ))}
    </>
  );
};

interface PaginationCurrentPageProps {
  children?: (page: number, state: PageState) => JSX.Element;
}

/** Shows the current page number in a Button, or calls its render-function
 * child with the current page and the pagination state. */
Pagination.CurrentPage = function PaginationCurrentPage(
  props: PaginationCurrentPageProps
) {
  const { children } = props;
  const state = useContext(PaginationStateContext);

  if (children) {
    return children(state.page, state);
  }

  return <Button>{state.page}</Button>;
};

/** CustomSelect for the page size. Its options' ids are the page sizes;
 * the selected one is kept in sync with the pagination state. */
Pagination.PageSize = function PaginationPageSize<T extends object>(
  props: CustomSelectProps<T>
) {
  const { pageSize, onPageSizeChange } = useContext(PaginationStateContext);

  return (
    <CustomSelect
      {...props}
      selectedKey={pageSize}
      onSelectionChange={(key) =>
        onPageSizeChange(
          typeof key === "string" ? parseInt(key as string, 10) : key
        )
      }
    />
  );
};
