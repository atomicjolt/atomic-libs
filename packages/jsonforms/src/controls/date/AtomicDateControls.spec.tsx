import { describe, expect, it } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { controlFor, renderForm } from "../../testing/renderForm";
import { renderCell } from "../../testing/renderCell";

const schema = {
  type: "object",
  properties: {
    due: { type: "string", format: "date", title: "Due" },
    at: { type: "string", format: "time", title: "At" },
    when: { type: "string", format: "date-time", title: "When" },
  },
} as const;

describe("AtomicDateControl", () => {
  it("shows a stored date", () => {
    renderForm(schema, { uischema: controlFor("due"), data: { due: "2026-11-25" } });

    expect(screen.getByRole("spinbutton", { name: /month/i })).toHaveTextContent("11");
    expect(screen.getByRole("spinbutton", { name: /day/i })).toHaveTextContent("25");
    expect(screen.getByRole("spinbutton", { name: /year/i })).toHaveTextContent("2026");
  });

  it("stores a typed date as YYYY-MM-DD", async () => {
    const form = renderForm(schema, { uischema: controlFor("due") });

    await userEvent.click(screen.getByRole("spinbutton", { name: /month/i }));
    await userEvent.keyboard("03142027");

    await waitFor(() => expect(form.latestData()).toEqual({ due: "2027-03-14" }));
  });

  it("renders as a cell", () => {
    renderCell(schema, "due", { data: { due: "2026-01-02" } });
    expect(screen.getByRole("spinbutton", { name: /day/i })).toHaveTextContent("2");
  });
});

describe("AtomicTimeControl", () => {
  it("stores a typed time as HH:mm:ss", async () => {
    const form = renderForm(schema, { uischema: controlFor("at") });

    await userEvent.click(screen.getByRole("spinbutton", { name: /hour/i }));
    await userEvent.keyboard("0930");
    await userEvent.keyboard("P");

    await waitFor(() => expect(form.latestData()).toEqual({ at: "21:30:00" }));
  });
});

describe("AtomicDateTimeControl", () => {
  it("shows a stored instant in local time, to the minute", () => {
    renderForm(schema, { uischema: controlFor("when"), data: { when: "2026-11-25T21:30:00.000Z" } });

    expect(screen.getByRole("spinbutton", { name: /year/i })).toHaveTextContent("2026");
    expect(screen.getByRole("spinbutton", { name: /minute/i })).toHaveTextContent("30");
    expect(screen.queryByRole("spinbutton", { name: /second/i })).not.toBeInTheDocument();
  });
});

