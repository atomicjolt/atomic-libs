import { render } from "@testing-library/react";
import CustomDropdown from ".";
import CustomSelect from ".";

it("matches snapshot", () => {
  const result = render(
    <CustomDropdown label="Custom dropdown label">
      <CustomDropdown.Item
        onClick={() => {
          console.log("Option 1 clicked");
        }}
      >
        Option 1
      </CustomDropdown.Item>
      ,
      <CustomDropdown.Item
        onClick={() => {
          console.log("Option 2 clicked");
        }}
      >
        Option 2
      </CustomDropdown.Item>
    </CustomDropdown>
  );

  expect(result.asFragment()).toMatchSnapshot();
});
