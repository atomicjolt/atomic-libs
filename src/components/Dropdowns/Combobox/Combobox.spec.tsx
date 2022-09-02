import React from "react";
import { render } from "@testing-library/react";
import Combobox from ".";

it("matches snapshot", () => {
  const result = render(
    <Combobox
      label="Text Label"
      message="message"
      error="some error"
      value="content"
      onChange={(value) => {}}
      options={["Option 1", "Option 2", "Option 3"]}
    />
  );
  expect(result.asFragment()).toMatchSnapshot();
});
