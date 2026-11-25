import React from "react";
import { describe, test, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchInput } from ".";

describe("matches snapshot", () => {
  test("displays without button", () => {
    const result = render(<SearchInput label="search" onSubmit={() => {}} />);
    expect(result.asFragment()).toMatchSnapshot();
  });

  test("displays with search button", () => {
    const result = render(<SearchInput label="search" onSubmit={() => {}} />);
    expect(result.asFragment()).toMatchSnapshot();
  });
});

// test("Enter calls onSumbit()", () => {
//   const onSubmit = jest.fn(() => {});
//   const result = render(<SearchInput label="search" onSubmit={onSubmit} />);
//   fireEvent.keyPress(screen.getByRole("search"), {
//     key: "Enter",
//     code: "Enter",
//     charCode: 13,
//   });

//   expect(onSubmit.mock.calls.length).toEqual(1);
// });

test("button calls onSumbit()", () => {
  const onSubmit = vi.fn(() => {});
  const result = render(<SearchInput label="label" onSubmit={onSubmit} />);
  fireEvent.click(screen.getByText("search"));

  expect(onSubmit.mock.calls.length).toEqual(1);
});

describe("inside a form", () => {
  test("Enter calls onSubmit and doesn't submit the form", async () => {
    const formSubmit = vi.fn((e: React.FormEvent) => e.preventDefault());
    const onSubmit = vi.fn();
    render(
      <form onSubmit={formSubmit}>
        <SearchInput label="Search" onSubmit={onSubmit} />
      </form>
    );

    await userEvent.type(screen.getByRole("searchbox"), "atoms{Enter}");

    expect(onSubmit).toHaveBeenCalledWith("atoms");
    expect(formSubmit).not.toHaveBeenCalled();
  });

  test("without onSubmit, Enter submits the form like any text input", async () => {
    const formSubmit = vi.fn((e: React.FormEvent) => e.preventDefault());
    render(
      <form onSubmit={formSubmit}>
        <SearchInput label="Search" />
      </form>
    );

    await userEvent.type(screen.getByRole("searchbox"), "atoms{Enter}");

    expect(formSubmit).toHaveBeenCalledTimes(1);
  });
});
