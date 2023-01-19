import React from "react";
import { Button, Popover, PopoverWrapper } from "../elements";

export default function Scrollings() {
  return (
    <div className="scrolling-container">
      <div className="scrolling">
        <div className="scrolling-content">
          {/* <PopoverWrapper>
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
          </PopoverWrapper> */}

          <ToolTip tip="hi">
            <Button>hi</Button>
          </ToolTip>
        </div>
      </div>
    </div>
  );
}

interface ToolTipProps {
  children: React.ReactNode;
  tip: React.ReactNode;
}

function ToolTip(props: ToolTipProps) {
  const { children, tip } = props;

  return (
    <PopoverWrapper className="aje-tip">
      {children}
      <Popover position="top">{tip}</Popover>
    </PopoverWrapper>
  );
}
