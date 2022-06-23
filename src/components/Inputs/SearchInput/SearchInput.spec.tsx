import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchInput from ".";

describe("matches snapshot", () => {
  it("displays without button", () => {
    const result = render(<SearchInput label="search" onSubmit={() => {}} />);
    expect(result.asFragment()).toMatchSnapshot();
  });

  it("displays with search button", () => {
    const result = render(
      <SearchInput label="search" onSubmit={() => {}} submitButton />
    );
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
  const onSubmit = jest.fn(() => {});
  const result = render(
    <SearchInput label="label" onSubmit={onSubmit} submitButton />
  );
  fireEvent.click(screen.getByText("search"));

  expect(onSubmit.mock.calls.length).toEqual(1);
});
