import React from "react";
import cn from "classnames";
import { Months } from "../utils";
import {
  MonthPickerButton,
  MonthPickerContainer,
  StyledMonthPicker,
} from "./MonthPicker.styles";

interface Props {
  readonly onSelect: (month: number) => void;
  readonly month: number;
}

export default function MonthPicker({ onSelect, month: selectedMonth }: Props) {
  return (
    <StyledMonthPicker className="aje-month-picker">
      <MonthPickerContainer className="aje-month-picker__container">
        {Months.map((month, i) => (
          <MonthPickerButton
            className={cn("aje-month-picker__month", {
              "is-selected": i === selectedMonth,
            })}
            key={month}
            onClick={() => onSelect(i)}
          >
            {month}
          </MonthPickerButton>
        ))}
      </MonthPickerContainer>
    </StyledMonthPicker>
  );
}
