import { render } from "@testing-library/react";
import LoadingStatus from ".";

it("matches snapshot", () => {
  const result = render(
    <LoadingStatus />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
