import React, { useRef, useEffect, useState } from "react";
import cn from "classnames";
import { range } from "../utils";
import {
  YearPickerButton,
  YearPickerContainer,
  YearPickerWrapper,
} from "./YearPicker.styles";

interface Props {
  onSelect: (year: number) => void;
  year: number;
}

export default function YearPicker({ year: selectedYear, onSelect }: Props) {
  const [start, setStart] = useState(selectedYear - 100);
  const [end, setEnd] = useState(selectedYear + 100);
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        block: "center",
      });
    }
  }, []);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const element = event.target as HTMLDivElement;
    // Approaching the top of the scroll box
    if (element.scrollTop < 50) {
      setStart(start - 50);
    }

    // Approaching the bottom of the scroll box
    if (element.scrollHeight - element.scrollTop - element.clientHeight < 50) {
      setEnd(end + 50);
    }
  };

  return (
    <YearPickerWrapper className="aje-year-picker" onScroll={handleScroll}>
      <YearPickerContainer className="aje-year-picker__container">
        {range(start, end).map((year) => (
          <YearPickerButton
            key={year}
            className={cn("aje-year-picker__year", {
              "is-selected": selectedYear === year,
            })}
            onClick={() => onSelect(year)}
            ref={(e) => {
              if (selectedYear === year) {
                ref.current = e;
              }
            }}
          >
            {Math.abs(year)}
          </YearPickerButton>
        ))}
      </YearPickerContainer>
    </YearPickerWrapper>
  );
}
