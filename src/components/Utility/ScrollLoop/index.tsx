import React, { useRef, useLayoutEffect, useState } from "react";
// import "./styles.scss";

export interface Props {
  children: React.ReactNode;
  surroundingBackup?: number;
}

// https://codepen.io/Twixes/details/rNeGNrz
export default function ScrollLoop({ surroundingBackup = 4, children }: Props) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);

  const backupHeight = height * surroundingBackup;

  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
      if (scrollRef.current) {
        scrollRef.current.scrollTop = backupHeight;
      }
    }
  });

  const handleScroll = () => {
    if (scrollRef.current) {
      const scroll = scrollRef.current.scrollTop;
      if (scroll < backupHeight || scroll >= backupHeight + height) {
        scrollRef.current.scrollTop = backupHeight + (scroll % height);
      }
    }
  };

  return (
    <div className="aje-scroll-loop__wrapper">
      <div
        className="aje-scroll-loop"
        ref={scrollRef}
        style={{
          height,
          overflowY: "scroll",
        }}
        onScroll={handleScroll}
      >
        {Array(surroundingBackup)
          .fill(0)
          .map((_v, i) => (
            <div key={`top-padding-${i}`}>{children}</div>
          ))}
        <div ref={contentRef}>{children}</div>
        {Array(surroundingBackup)
          .fill(0)
          .map((_v, i) => (
            <div key={`bottom-padding-${i}`}>{children}</div>
          ))}
      </div>
    </div>
  );
}
