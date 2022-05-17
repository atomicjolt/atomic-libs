import { render } from "@testing-library/react";
import TextInput from ".";

it("matches snapshot", () => {
  const result = render(
    <TextInput
      id="input1"
      label="Text Label"
      message="message"
      error="some error"
      placeholder="placeholder"
      value="content"
    />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
