import React from "react";
import { describe, test, expect } from "vitest";
import { render, within } from "@testing-library/react";
import { Loading } from ".";
import { Select } from "../../Dropdowns/Select";
import { DateInput } from "../../Inputs/DateAndTimes/DateInput";
import { DatePicker } from "../../Inputs/DateAndTimes/DatePicker";
import { TimeInput } from "../../Inputs/DateAndTimes/TimeInput";
import { ChipGroup } from "../../Chips/ChipGroup";
import { Chip } from "../../Chips/Chip";

/** Each component, with its loading props applied when given. */
const components: [string, (loading?: object) => React.ReactElement][] = [
  [
    "Select",
    (loading) => (
      <Select label="Fruit" {...loading}>
        <option value="apple">Apple</option>
      </Select>
    ),
  ],
  ["DateInput", (loading) => <DateInput label="Date" {...loading} />],
  ["DatePicker", (loading) => <DatePicker label="Date" {...loading} />],
  ["TimeInput", (loading) => <TimeInput label="Time" {...loading} />],
  [
    "ChipGroup",
    (loading) => (
      <ChipGroup label="Topics" {...loading}>
        <Chip id="news">News</Chip>
      </ChipGroup>
    ),
  ],
];

describe.each(components)("%s loading state", (_, renderComponent) => {
  test("shows a labelled placeholder when isLoading", () => {
    const { container } = render(
      renderComponent({ isLoading: true, loadingLabel: "Loading field" })
    );
    within(container).getByRole("img", { name: "Loading field" });
  });

  test("keeps its label while loading", () => {
    const { container } = render(
      renderComponent({ isLoading: true, loadingLabel: "Loading field" })
    );
    expect(container.textContent).toMatch(/Fruit|Date|Time|Topics/);
  });

  test("picks up an ambient Loading provider", () => {
    const { container } = render(
      <Loading isLoading>{renderComponent()}</Loading>
    );
    expect(within(container).queryAllByRole("img").length).toBeGreaterThan(0);
  });

  test("renders normally when not loading", () => {
    const { container } = render(renderComponent({ isLoading: false }));
    expect(
      within(container).queryByRole("img", { name: "Loading field" })
    ).toBeNull();
  });
});
