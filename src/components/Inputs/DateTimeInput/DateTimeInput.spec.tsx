import { render } from "@testing-library/react";
import DateTimeInput from ".";

it("matches snapshot", () => {
  const result = render(
    <DateTimeInput
      label="Text Label"
      message="message"
      error="some error"
      value={new Date("2022-02-18")}
      onChange={(value) => {}}
    />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
