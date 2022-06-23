import { render } from "@testing-library/react";
import TestComp from ".";

it("matches snapshot", () => {
  const result = render(
    <TestComp />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
