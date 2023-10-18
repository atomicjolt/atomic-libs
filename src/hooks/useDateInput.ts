import { Ref, RefObject, useEffect, useRef, useState } from "react";
import { useBool, useClickOutside } from "./util";
import { DateLike } from "../components/Inputs/DateAndTimes/Date.types";
import { format, isMatch, isValid, parse } from "date-fns";
import { EventHandler } from "../types";

interface UseDateInputOptions {
  value: DateLike | null;
  dateFormat: string;
  onChange?: EventHandler<DateLike | null>;
}

interface UseDateInputReturn {
  containerRef: RefObject<HTMLDivElement>;
  calendar: {
    value: DateLike | null;
    isOpen: boolean;
    close: () => void;
    open: () => void;
    onSelect: EventHandler<DateLike | null>;
  };

  input: {
    value: string;
    editing: boolean;
    toggleEditing: () => void;
    onChange: EventHandler<string>;
  };
}

export function useDateInput(options: UseDateInputOptions): UseDateInputReturn {
  const { value, dateFormat, onChange } = options;

  const [calendarOpen, _toggleCalendar, openCalendar, closeCalendar] =
    useBool(false);

  const [editingInput, toggleEditingInput] = useBool(false);

  // The input's state is tracked seperatley so that the use
  // can edit the text even when the value is invalid.
  const [inputValue, setInputValue] = useState<string>(() =>
    value ? format(value, dateFormat) : ""
  );

  // We need to sync the value of the input with a value set externally
  // to the component, but only when we're not editing the input.
  // If we do it while the input is being edited, we get some kind of weird
  // behavior as the user is typing.
  useEffect(() => {
    if (editingInput) return;
    if (!isValid(value) && value !== null) return;

    setInputValue(value ? format(value, dateFormat) : "");
  }, [value, editingInput]);

  // Container that clicking outisde of will close the calendar.
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(containerRef, closeCalendar, { enabled: calendarOpen });

  // Keep the value in sync with the input prop, when they're valid
  // Also adds / to the input as the user types.
  const handleInputChange: EventHandler<string> = (v, e) => {
    if (!v.match(/[\d+\/]+/) && v !== "") return;

    const components = v.split("/");
    if (components[components.length - 1] === "") {
      components.pop();
    }
    const currentComponent = components[components.length - 1];

    if (components.length === 1 || components.length === 2) {
      if (currentComponent.length === 2) {
        components.push("");
      }
    } else if (components.length > 4) {
      return;
    }

    const dateString = components.join("/");

    setInputValue(dateString);

    if (isMatch(dateString, dateFormat)) {
      onChange && onChange(parse(dateString, dateFormat, new Date()), e);
    }
  };

  const handleCalendarSelect: EventHandler<DateLike | null> = (v, e) => {
    setInputValue(v ? format(v, dateFormat) : "");
    onChange && onChange(v, e);
  };

  return {
    containerRef,
    calendar: {
      value: value,
      isOpen: calendarOpen,
      close: closeCalendar,
      open: openCalendar,
      onSelect: handleCalendarSelect,
    },
    input: {
      value: inputValue,
      editing: editingInput,
      toggleEditing: toggleEditingInput,
      onChange: handleInputChange,
    },
  };
}
