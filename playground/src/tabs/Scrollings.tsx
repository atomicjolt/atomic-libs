import React from "react";
import { Popover, PopoverWrapper } from "../elements";

export default function Scrollings() {
  return (
    <div className="scrolling-container">
      <div className="scrolling">
        <div className="scrolling-content">
          <PopoverWrapper>
            <p style={{ fontSize: "20px", backgroundColor: "peru" }}>
              Here's the Content
            </p>
            <Popover position="left" show={true}>
              <div
                style={{
                  backgroundColor: "lightblue",
                  fontSize: "20px",
                  padding: "10px",
                }}
              >
                Hi
              </div>
            </Popover>
          </PopoverWrapper>
        </div>
      </div>
    </div>
  );
}
