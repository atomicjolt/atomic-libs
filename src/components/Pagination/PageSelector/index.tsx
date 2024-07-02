import { useId } from "react";
import { useControlledState } from "@react-stately/utils";
import { Button } from "@/components/Buttons/Button";
import { IconButton } from "@/components/Buttons/IconButton";
import { Flex } from "@/components/Layout/Flex/Flex";
import { PageProps } from "../Pagination.types";
import { usePageSelector } from "./usePageSelector";

export interface PageSelectorProps extends PageProps {
  boundaryCount?: number;
  siblingCount?: number;
}

export function PageSelector(props: PageSelectorProps) {
  const { totalPages, boundaryCount = 1, siblingCount = 1 } = props;
  const [page, setPage] = useControlledState(
    props.page,
    props.defaultPage || 1,
    props.onChange
  );

  const id = useId();

  const pages = usePageSelector(page, totalPages, boundaryCount, siblingCount);

  return (
    <Flex gap={2} className="aje-page-selector">
      {pages.map((pageNumber, index) => {
        if (pageNumber === "ellipsis") {
          return (
            <IconButton
              key={`${id}-page-ellipsis-${index}`}
              aria-label="More pages"
              variant="ghost"
              icon="more_horiz"
              isDisabled
            />
          );
        }

        return (
          <Button
            key={`${id}-page-${pageNumber}`}
            aria-label={`Go to page ${pageNumber}`}
            variant={pageNumber === page ? "border" : "ghost"}
            onPress={() => setPage(pageNumber)}
            data-selected={pageNumber === page}
          >
            {pageNumber}
          </Button>
        );
      })}
    </Flex>
  );
}
