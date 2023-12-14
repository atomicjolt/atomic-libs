import React, { useEffect, useRef } from "react";
import cn from "classnames";
import { range } from "../utils";
import { Period, Time } from "../Date.types";
import {
  TimePickerButton,
  TimePickerSection,
  TimePickerWrapper,
} from "./TimePicker.styles";
import { convertTo12Hour, convertTo24Hour } from "./TimePicker.convert";
import { EventHandler } from "../../../../types";

export interface TimePickerProps {
  time?: Time | null;
  onChange: EventHandler<Time, React.MouseEvent>;
}

export default function TimePicker({ time, onChange }: TimePickerProps) {
  const hourRef = useRef<HTMLElement | null>(null);
  const minuteRef = useRef<HTMLElement | null>(null);

  time = time || { hours: 0, minutes: 0 };
  const { hours, minutes } = time;
  const [{ hours: displayHour, minutes: displayMinute }, period] =
    convertTo12Hour(time);

  useEffect(() => {
    if (hourRef.current) {
      hourRef.current.scrollIntoView({ block: "center" });
    }
    if (minuteRef.current) {
      minuteRef.current.scrollIntoView({ block: "center" });
    }
  }, []);

  return (
    <TimePickerWrapper className="aje-time-picker">
      <TimePickerSection className="aje-time-picker__hour">
        {range(1, 13).map((v) => {
          const isSelected = displayHour === v;

          return (
            <TimePickerButton
              className={cn("aje-time-picker__btn", {
                "is-selected": isSelected,
              })}
              ref={(el) => {
                if (isSelected) {
                  hourRef.current = el;
                }
              }}
              key={`hour-${v}`}
              disabled={isSelected}
              onClick={(e) =>
                onChange({ hours: convertTo24Hour(v, period), minutes }, e)
              }
            >
              {v}
            </TimePickerButton>
          );
        })}
      </TimePickerSection>
      <TimePickerSection className="aje-time-picker__minute">
        {range(0, 60).map((v) => (
          <TimePickerButton
            className={cn("aje-time-picker__btn", {
              "is-selected": displayMinute === v,
            })}
            ref={(el) => {
              if (displayMinute === v) {
                minuteRef.current = el;
              }
            }}
            disabled={displayMinute === v}
            key={`minute-${v}`}
            onClick={(e) => onChange({ hours: hours, minutes: v }, e)}
          >
            {v < 10 ? "0" : ""}
            {v}
          </TimePickerButton>
        ))}
      </TimePickerSection>
      <TimePickerSection className="aje-time-picker__period">
        <TimePickerButton
          className={cn("aje-time-picker__btn", {
            "is-selected": period === Period.AM,
          })}
          disabled={period === Period.AM}
          onClick={(e) => onChange({ hours: hours - 12, minutes }, e)}
        >
          AM
        </TimePickerButton>
        <TimePickerButton
          className={cn("aje-time-picker__btn", {
            "is-selected": period === Period.PM,
          })}
          disabled={period === Period.PM}
          onClick={(e) => onChange({ hours: hours + 12, minutes }, e)}
        >
          PM
        </TimePickerButton>
      </TimePickerSection>
    </TimePickerWrapper>
  );
}
