import React, { useContext } from "react";
import { useControlledState } from "@react-stately/utils";
import { AriaLabelProps, ExtendedSize, RenderBaseProps } from "../../../types";
import { useRenderProps } from "@hooks/useRenderProps";
import { IconButton } from "@components/Buttons/IconButton";
import { ButtonVariants } from "../..//Buttons/Buttons.types";
import { PageProps, PageState } from "../Pagination.types";
import { ButtonContext } from "@components/Buttons/Button/Button.context";
import { PaginationContext } from "./Pagination.context";
import { Button } from "@components/Buttons/Button";
import { ButtonProps } from "../../Buttons/Button";
import { IconButtonProps } from "../../Buttons/IconButton";
import { CustomSelectProps } from "../../Dropdowns/CustomSelect";
import { CustomSelect } from "@components/Dropdowns/CustomSelect";

interface PaginationRenderProps {
  page: number;
}

export interface PaginationProps
  extends PageProps,
    RenderBaseProps<PaginationRenderProps>,
    AriaLabelProps {
  /** The size of the pagination buttons */
  size?: ExtendedSize;
  /** Variants for the pagination buttons */
  variant?: ButtonVariants;
}

// TODO: needs localization

/** Pagination component. Handles rendering buttons
 * for navigating through pages.
 */
export function Pagination(props: PaginationProps) {
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
    values: { page },
    ...props,
  });

  return (
    <div {...renderProps}>
      <ButtonContext.Provider value={{ variant, size }}>
        <PaginationContext.Provider
          value={{
            page,
            onPageChange: setPage,
            totalPages,
            pageSize,
            onPageSizeChange: setPageSize,
          }}
        >
          {renderProps.children}
        </PaginationContext.Provider>
      </ButtonContext.Provider>
    </div>
  );
}

Pagination.FirstPage = function PaginationFirstPage(
  props: Partial<IconButtonProps>
) {
  const { icon = "first_page", ...rest } = props;
  const { page, onPageChange: onChange } = useContext(PaginationContext);

  return (
    <IconButton
      aria-label="First Page"
      isDisabled={page === 1}
      onPress={() => onChange(1)}
      icon={icon}
      {...rest}
    />
  );
};

Pagination.PrevPage = function PaginationPrevPage(
  props: Partial<IconButtonProps>
) {
  const { icon = "chevron_left", ...rest } = props;
  const { page, onPageChange: onChange } = useContext(PaginationContext);

  return (
    <IconButton
      aria-label="Previous Page"
      isDisabled={page === 1}
      onPress={() => onChange(page - 1)}
      icon={icon}
      {...rest}
    />
  );
};

Pagination.NextPage = function PaginationNextPage(
  props: Partial<IconButtonProps>
) {
  const { icon = "chevron_right", ...rest } = props;
  const {
    page,
    totalPages,
    onPageChange: onChange,
  } = useContext(PaginationContext);

  return (
    <IconButton
      aria-label="Next Page"
      isDisabled={page === totalPages}
      onPress={() => onChange(page + 1)}
      icon={icon}
      {...rest}
    />
  );
};

Pagination.LastPage = function PaginationLastPage(
  props: Partial<IconButtonProps>
) {
  const { icon = "last_page", ...rest } = props;
  const {
    page,
    totalPages,
    onPageChange: onChange,
  } = useContext(PaginationContext);

  return (
    <IconButton
      aria-label="Last Page"
      isDisabled={page === totalPages}
      onPress={() => totalPages && onChange(totalPages)}
      icon={icon}
      {...rest}
    />
  );
};

type PaginationPageProps = ButtonProps & {
  /** The page number */
  page: number;
};

Pagination.Page = function PaginationPage(props: PaginationPageProps) {
  const { page, ...rest } = props;
  const { onPageChange: onChange } = useContext(PaginationContext);

  return <Button onPress={() => onChange(page)} {...rest} />;
};

interface PaginationPagesProps {
  children: (page: number, state: PageState) => JSX.Element;
  totalPages?: number;
}

Pagination.PageList = function PaginationPages(props: PaginationPagesProps) {
  const state = useContext(PaginationContext);
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

Pagination.CurrentPage = function PaginationCurrentPage(
  props: PaginationCurrentPageProps
) {
  const { children } = props;
  const state = useContext(PaginationContext);

  if (children) {
    return children(state.page, state);
  }

  return <Button>{state.page}</Button>;
};

Pagination.PageSize = function PaginationPageSize<T extends object>(
  props: CustomSelectProps<T>
) {
  const { pageSize, onPageSizeChange } = useContext(PaginationContext);

  return (
    <CustomSelect
      {...props}
      selectedKey={pageSize.toString()}
      onSelectionChange={(key) => onPageSizeChange(parseInt(key as string))}
    />
  );
};
