import { render } from "@testing-library/react";
import CustomSelect from ".";

it("matches snapshot", () => {
  const result = render(
    <CustomSelect
      label="Custom dropdown label"
      selected="opt1"
      onSelect={() => {}}
      options={[
        {
          label: "Option 1",
          value: "opt1",
        },
        {
          label: "Option 2",
          value: "opt2",
        },
      ]}
    />
  );

  expect(result.asFragment()).toMatchSnapshot();
});
