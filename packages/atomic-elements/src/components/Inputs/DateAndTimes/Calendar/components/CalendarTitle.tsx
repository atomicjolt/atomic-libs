import { useContext } from "react";
import { RenderBaseProps } from "../../../../../types";
import { useRenderProps } from "@hooks";

import {
  CalendarStateContext,
  CalendarTitleContext,
} from "../Calendar.context";
import { CalendarHeaderTitle } from "../Calendar.styles";
import { CalendarRenderProps } from "../Calendar.types";

interface CalendarTitleRenderProps extends CalendarRenderProps {
  title: string;
}

interface CalendarTitleProps
  extends RenderBaseProps<CalendarTitleRenderProps> {}

export function CalendarTitle(props: CalendarTitleProps) {
  const state = useContext(CalendarStateContext)!;
  const { title } = useContext(CalendarTitleContext)!;

  const renderProps = useRenderProps({
    componentClassName: "aje-calendar__title",
    values: {
      focusedDate: state.focusedDate,
      isDisabled: state.isDisabled,
      isFocused: state.isFocused,
      title: title,
    },
    ...props,
  });

  return (
    <CalendarHeaderTitle {...renderProps}>
      {props.children ? renderProps.children : title}
    </CalendarHeaderTitle>
  );
}
