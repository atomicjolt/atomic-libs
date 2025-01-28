import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { Banner } from "./Banner.component";

describe("Banner", () => {
  describe("Snapshots", () => {
    it("should match snapshot", () => {
      const res = render(<Banner />);
      expect(res).toMatchSnapshot();
    });

    it("should match snapshot with variant", () => {
      const res = render(<Banner variant="success" />);
      expect(res).toMatchSnapshot();
    });
  });

  describe("Banner.Content", () => {
    it("should match snapshot", () => {
      const res = render(<Banner.Content>Content</Banner.Content>);
      expect(res).toMatchSnapshot();
    });
  });

  describe("Banner.IconButton", () => {
    it("should match snapshot", () => {
      const res = render(<Banner.IconButton icon="more_vert" />);
      expect(res).toMatchSnapshot();
    });
  });

  describe("Banner.Button", () => {
    it("should match snapshot", () => {
      const res = render(<Banner.Button>Button</Banner.Button>);
      expect(res).toMatchSnapshot();
    });
  });
});
