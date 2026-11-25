import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Loader } from "./Loader.component";
import { ThreeDotLoader } from "../ThreeDotLoader";
import { BouncingDots } from "../../Animations/BouncingDots";
import { Pagination } from "../../Pagination/Pagination";

describe("aria labels reach the DOM", () => {
  test("Loader exposes its label as a status", () => {
    render(<Loader aria-label="Loading results" />);
    expect(
      screen.getByRole("status", { name: "Loading results" })
    ).toBeTruthy();
  });

  test("ThreeDotLoader exposes its label as a status", () => {
    render(<ThreeDotLoader aria-label="Loading results" />);
    expect(
      screen.getByRole("status", { name: "Loading results" })
    ).toBeTruthy();
  });

  test("BouncingDots exposes its label as an image", () => {
    render(<BouncingDots aria-label="Loading" />);
    expect(screen.getByRole("img", { name: "Loading" })).toBeTruthy();
  });

  test("unlabelled BouncingDots stays decorative", () => {
    const { container } = render(<BouncingDots />);
    expect(container.firstElementChild!.getAttribute("role")).toBeNull();
  });

  test("Pagination is a labelled navigation landmark", () => {
    render(<Pagination aria-label="Results pages" totalPages={3} />);
    expect(
      screen.getByRole("navigation", { name: "Results pages" })
    ).toBeTruthy();
  });
});
