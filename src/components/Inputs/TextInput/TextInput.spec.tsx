import React from "react";
import { render } from "@testing-library/react";
import TextInput from ".";

it("matches snapshot", () => {
  const result = render(
    <TextInput
      label="Text Label"
      message="message"
      error="some error"
      placeholder="placeholder"
      value="content"
      onChange={(value: string) => {}}
    />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
