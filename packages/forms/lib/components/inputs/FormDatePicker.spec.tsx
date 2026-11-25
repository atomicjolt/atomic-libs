import { describe, expect, test } from "vitest";
import { screen, within } from "@testing-library/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import { Form } from "../Form";
import { renderForm } from "../../testing/renderForm";

describe("Form.DatePicker", () => {
  test("submits the typed date as a CalendarDate", async () => {
    const { user, submitAndGetValues } = renderForm(
      <Form.DatePicker name="birthday" label="Birthday" />
    );

    // DatePicker doesn't render a role="group" (it drops useDatePicker's
    // groupProps), so find the segments by their label instead.
    const [month] = screen.getAllByRole("spinbutton", { name: /Birthday/ });
    await user.click(month);
    await user.keyboard("07041999");

    const values = await submitAndGetValues();
    expect(values.birthday).toBeInstanceOf(CalendarDate);
    expect(values.birthday.toString()).toBe("1999-07-04");
  });

  test("submits a date picked from the calendar", async () => {
    const { user, submitAndGetValues } = renderForm(
      <Form.DatePicker name="birthday" label="Birthday" />,
      { birthday: parseDate("2024-02-10") }
    );

    await user.click(screen.getByRole("button", { name: /Calendar/ }));

    const grid = await screen.findByRole("grid", { name: "February 2024" });
    await user.click(
      within(grid).getByRole("button", { name: /February 20, 2024/ })
    );

    const values = await submitAndGetValues();
    expect(values.birthday.toString()).toBe("2024-02-20");
  });

  test("shows the required error", async () => {
    const { submit, onSubmit } = renderForm(
      <Form.DatePicker
        name="birthday"
        label="Birthday"
        isRequired="Birthday is required"
      />
    );

    await submit();

    expect(await screen.findByText("Birthday is required")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
