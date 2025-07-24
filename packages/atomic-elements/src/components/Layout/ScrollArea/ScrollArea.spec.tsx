import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { ScrollArea } from ".";

describe("ScrollArea", () => {
  describe("Snapshots", () => {
    it("should match snapshot with basic structure", () => {
      const res = render(
        <ScrollArea>
          <ScrollArea.Viewport style={{ height: "200px", width: "300px" }}>
            <div style={{ height: "400px", width: "600px" }}>
              <p>Content that overflows both directions</p>
            </div>
          </ScrollArea.Viewport>
        </ScrollArea>
      );
      expect(res).toMatchSnapshot();
    });

    it("should match snapshot with vertical scrollbar", () => {
      const res = render(
        <ScrollArea>
          <ScrollArea.Viewport style={{ height: "200px", width: "300px" }}>
            <div style={{ height: "400px", width: "200px" }}>
              <p>Content that overflows vertically</p>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Bar orientation="vertical" />
        </ScrollArea>
      );
      expect(res).toMatchSnapshot();
    });

    it("should match snapshot with horizontal scrollbar", () => {
      const res = render(
        <ScrollArea>
          <ScrollArea.Viewport style={{ height: "200px", width: "300px" }}>
            <div style={{ height: "100px", width: "600px" }}>
              <p>Content that overflows horizontally</p>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Bar orientation="horizontal" />
        </ScrollArea>
      );
      expect(res).toMatchSnapshot();
    });

    it("should match snapshot with both scrollbars", () => {
      const res = render(
        <ScrollArea>
          <ScrollArea.Viewport style={{ height: "200px", width: "300px" }}>
            <div style={{ height: "400px", width: "600px" }}>
              <p>Content that overflows in both directions</p>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Bar orientation="vertical" />
          <ScrollArea.Bar orientation="horizontal" />
        </ScrollArea>
      );
      expect(res).toMatchSnapshot();
    });

    it("should match snapshot with scrollbar props", () => {
      const res = render(
        <ScrollArea>
          <ScrollArea.Viewport style={{ height: "200px", width: "300px" }}>
            <div style={{ height: "400px", width: "600px" }}>
              <p>Content with scrollbar props</p>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Bar
            orientation="vertical"
            size="viewport"
            show="always"
            reserveSpace={true}
          />
        </ScrollArea>
      );
      expect(res).toMatchSnapshot();
    });

    it("should match snapshot with custom root props", () => {
      const res = render(
        <ScrollArea className="custom-scroll-area">
          <ScrollArea.Viewport>
            <div style={{ height: "400px", width: "600px" }}>
              <p>Content with custom root props</p>
            </div>
          </ScrollArea.Viewport>
        </ScrollArea>
      );
      expect(res).toMatchSnapshot();
    });
  });

  describe("Rendering", () => {
    it("should render ScrollArea", () => {
      const { container } = render(<ScrollArea />);
      expect(container.firstChild).toBeInTheDocument();
    });

    it("should render ScrollArea.Viewport", () => {
      const { getByText } = render(
        <ScrollArea>
          <ScrollArea.Viewport>
            <div>Test content</div>
          </ScrollArea.Viewport>
        </ScrollArea>
      );
      expect(getByText("Test content")).toBeInTheDocument();
    });

    it("should apply custom className to root", () => {
      const { container } = render(
        <ScrollArea className="custom-class">
          <ScrollArea.Viewport>
            <div>Content</div>
          </ScrollArea.Viewport>
        </ScrollArea>
      );

      expect(container.firstChild).toHaveClass("custom-class");
    });

    it("should apply custom styles to viewport", () => {
      const customStyle = { backgroundColor: "red", height: "300px" };
      const { container } = render(
        <ScrollArea>
          <ScrollArea.Viewport style={customStyle}>
            <div>Content</div>
          </ScrollArea.Viewport>
        </ScrollArea>
      );

      const viewport = container.querySelector(".aje-scrollarea__viewport");
      expect(viewport).toHaveStyle("height: 300px");
    });
  });

  describe("Scrollbar visibility", () => {
    it("should hide scrollbar when show='auto' and content does not overflow", () => {
      const { container } = render(
        <ScrollArea>
          <ScrollArea.Viewport style={{ height: "200px", width: "300px" }}>
            <div style={{ height: "100px", width: "200px" }}>Small content</div>
          </ScrollArea.Viewport>
          <ScrollArea.Bar orientation="vertical" show="auto" />
        </ScrollArea>
      );

      const scrollbarTrack = container.querySelector(
        '[data-orientation="vertical"]'
      );
      expect(scrollbarTrack).not.toBeInTheDocument();
    });

    it("should reserve space when reserveSpace=true even if not scrollable", () => {
      const { container } = render(
        <ScrollArea>
          <ScrollArea.Viewport style={{ height: "200px", width: "300px" }}>
            <div style={{ height: "100px", width: "200px" }}>Small content</div>
          </ScrollArea.Viewport>
          <ScrollArea.Bar orientation="vertical" show="auto" reserveSpace />
        </ScrollArea>
      );

      const scrollbar = container.querySelector(".aje-scrollarea__scrollbar");
      expect(scrollbar).toBeInTheDocument();
      expect(scrollbar).toHaveStyle("visibility: hidden");
    });
  });
});
