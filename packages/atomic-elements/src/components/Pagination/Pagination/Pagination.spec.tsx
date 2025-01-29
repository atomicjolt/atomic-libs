import { render, fireEvent, screen } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Pagination } from "./Pagination.component";

describe("Pagination", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<Pagination totalPages={5} />);
      expect(res).toMatchSnapshot();
    });
  });

  describe("Functionality", () => {
    it("should render correct number of pages", () => {
      render(
        <Pagination totalPages={5}>
          <Pagination.PageList>
            {(page) => (
              <Pagination.Page key={page} page={page}>
                {page}
              </Pagination.Page>
            )}
          </Pagination.PageList>
        </Pagination>
      );
      for (let i = 1; i <= 5; i++) {
        expect(screen.getByText(i.toString())).toBeInTheDocument();
      }
    });

    it("should navigate to the first page", () => {
      render(
        <Pagination totalPages={5} defaultPage={3}>
          <Pagination.FirstPage />
        </Pagination>
      );
      const firstPageButton = screen.getByLabelText("First Page");
      fireEvent.click(firstPageButton);
      expect(firstPageButton).toBeDisabled();
    });

    it("should navigate to the previous page", () => {
      render(
        <Pagination totalPages={5} defaultPage={3}>
          <Pagination.PrevPage />
        </Pagination>
      );
      const prevPageButton = screen.getByLabelText("Previous Page");
      fireEvent.click(prevPageButton);
      expect(prevPageButton).not.toBeDisabled();
    });

    it("should navigate to the next page", () => {
      render(
        <Pagination totalPages={5} defaultPage={3}>
          <Pagination.NextPage />
        </Pagination>
      );
      const nextPageButton = screen.getByLabelText("Next Page");
      fireEvent.click(nextPageButton);
      expect(nextPageButton).not.toBeDisabled();
    });

    it("should navigate to the last page", () => {
      render(
        <Pagination totalPages={5} defaultPage={3}>
          <Pagination.LastPage />
        </Pagination>
      );
      const lastPageButton = screen.getByLabelText("Last Page");
      fireEvent.click(lastPageButton);
      expect(lastPageButton).toBeDisabled();
    });
  });
});
