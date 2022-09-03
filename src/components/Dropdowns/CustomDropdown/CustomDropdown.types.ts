import { EventHandler, SharedInputProps } from "../../../types";

export interface CustomDropdownProps<T>
  extends Omit<SharedInputProps, "placeholder"> {
  readonly value: T | null;
  readonly onChange: EventHandler<T, React.MouseEvent<Element>>;
  readonly children: React.ReactElement | React.ReactElement[];
}

export interface CustomSelectContext<T> {
  currentValue: T | null;
  onClick: (value: T, event: React.MouseEvent<Element>) => void;
}
