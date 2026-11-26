import { describe, expect, test } from "vitest";
import { screen, within } from "@testing-library/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { Form } from "../Form";
import { renderForm } from "../../testing/renderForm";

describe("Form.DateInput", () => {
  test("submits the typed date as a CalendarDate", async () => {
    const { user, submitAndGetValues } = renderForm(
      <Form.DateInput name="due" label="Due date" />
    );

    const group = screen.getByRole("group", { name: "Due date" });
    const [month] = within(group).getAllByRole("spinbutton");
    await user.click(month);
    await user.keyboard("03152024");

    const values = await submitAndGetValues();
    expect(values.due).toBeInstanceOf(CalendarDate);
    expect(values.due.toString()).toBe("2024-03-15");
  });

  test("uses the default value", async () => {
    const { submitAndGetValues } = renderForm(
      <Form.DateInput name="due" label="Due date" />,
      { due: parseDate("2023-01-15") }
    );

    const values = await submitAndGetValues();
    expect(values.due.compare(parseDate("2023-01-15"))).toBe(0);
  });

  test("shows the required error", async () => {
    const { submit, onSubmit } = renderForm(
      <Form.DateInput name="due" label="Due date" isRequired="Pick a date" />
    );

    await submit();

    expect(await screen.findByText("Pick a date")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
