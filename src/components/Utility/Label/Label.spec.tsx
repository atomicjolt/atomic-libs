import { render } from "@testing-library/react";
import Label from ".";

it("matches snapshot", () => {
  const result = render(
    <Label />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
