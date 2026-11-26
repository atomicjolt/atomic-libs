import { describe, expect, test } from "vitest";
import { screen } from "@testing-library/react";
import { Form } from "../Form";
import { renderForm } from "../../testing/renderForm";

function Interests(props: {
  isRequired?: string;
  selectionMode?: "single" | "multiple";
}) {
  return (
    <Form.ChipGroup
      name="interests"
      label="Interests"
      isRequired={props.isRequired}
      selectionMode={props.selectionMode}
    >
      <Form.Item id="news">News</Form.Item>
      <Form.Item id="sports">Sports</Form.Item>
      <Form.Item id="music">Music</Form.Item>
    </Form.ChipGroup>
  );
}

describe("Form.ChipGroup", () => {
  test("submits the selected chips as an array", async () => {
    const { user, submitAndGetValues } = renderForm(<Interests />);

    await user.click(screen.getByRole("row", { name: "News" }));
    await user.click(screen.getByRole("row", { name: "Music" }));

    expect(await submitAndGetValues()).toEqual({
      interests: ["news", "music"],
    });
  });

  test("single selection replaces the previous chip", async () => {
    const { user, submitAndGetValues } = renderForm(
      <Interests selectionMode="single" />
    );

    await user.click(screen.getByRole("row", { name: "News" }));
    await user.click(screen.getByRole("row", { name: "Sports" }));

    expect(await submitAndGetValues()).toEqual({ interests: ["sports"] });
  });

  test("uses the default value", async () => {
    const { submitAndGetValues } = renderForm(<Interests />, {
      interests: ["sports"],
    });

    expect(screen.getByRole("row", { name: "Sports" })).toHaveAttribute(
      "aria-selected",
      "true"
    );
    expect(await submitAndGetValues()).toEqual({ interests: ["sports"] });
  });

  test("shows the required error", async () => {
    const { submit, onSubmit } = renderForm(
      <Interests isRequired="Pick at least one" />
    );

    await submit();

    expect(await screen.findByText("Pick at least one")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
