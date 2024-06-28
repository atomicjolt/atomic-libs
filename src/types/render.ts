import { Argument } from "classnames";

type RenderProp<Type, RenderProps> = Type | ((props: RenderProps) => Type);

export type RenderClassName<T> = RenderProp<Argument | Argument[], T>;
export type RenderStyle<T> = RenderProp<React.CSSProperties, T>;
export type RenderChildren<T> = RenderProp<React.ReactNode, T>;

export interface RenderBaseProps<T extends object> {
  className?: RenderClassName<T>;
  style?: RenderStyle<T>;
  children?: RenderChildren<T>;
}
