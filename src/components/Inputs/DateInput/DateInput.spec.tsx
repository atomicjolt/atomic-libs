import { render } from "@testing-library/react";
import DateInput from ".";

it("matches snapshot", () => {
  const result = render(
    <DateInput
      label="Text Label"
      message="message"
      error="some error"
      value="2022-02-18"
      onChange={(value) => {}}
    />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
