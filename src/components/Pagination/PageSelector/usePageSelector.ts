import { useMemo } from "react";

type PageItem = number | "ellipsis";

function range(start: number, end: number) {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}

export function usePageSelector(
  currentPage: number,
  totalPages: number,
  boundaryPages: number,
  siblingPages: number
): PageItem[] {
  return useMemo(() => {
    const startPages = range(1, Math.min(boundaryPages, totalPages));
    const endPages = range(
      Math.max(totalPages - boundaryPages + 1, boundaryPages + 1),
      totalPages
    );

    const siblingsStart = Math.max(
      Math.min(
        // Natural start
        currentPage - siblingPages,
        // Lower boundary when page is high
        totalPages - boundaryPages - siblingPages * 2 - 1
      ),
      // Greater than startPages
      boundaryPages + 2
    );

    const siblingsEnd = Math.min(
      Math.max(
        // Natural end
        currentPage + siblingPages,
        // Upper boundary when page is low
        boundaryPages + siblingPages * 2 + 2
      ),
      // Less than endPages
      totalPages - boundaryPages - 1
    );

    const pages: PageItem[] = [];

    pages.push(...startPages);

    if (siblingsStart > boundaryPages + 2) {
      pages.push("ellipsis");
    } else if (boundaryPages + 1 < totalPages - boundaryPages) {
      pages.push(boundaryPages + 1);
    }

    pages.push(...range(siblingsStart, siblingsEnd));

    if (siblingsEnd < totalPages - boundaryPages - 1) {
      pages.push("ellipsis");
    } else if (totalPages - boundaryPages > boundaryPages) {
      pages.push(totalPages - boundaryPages);
    }

    pages.push(...endPages);

    return pages;
  }, [currentPage, totalPages, boundaryPages, siblingPages]);
}
