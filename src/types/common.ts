import { Argument } from "classnames";

export type Size = "small" | "medium" | "large";
export type ExtendedSize = Size | "auto" | "full";

export interface BaseProps {
  /** Unique id for the component */
  readonly id?: string;

  /** Add classes to the root element of the component.
   * Refer to this for possible values: https://github.com/JedWatson/classnames#readme*/
  readonly className?: Argument[] | Argument;

  /** Size of the component */
  readonly size?: ExtendedSize;
}

export interface HasChildren {
  children: React.ReactNode;
}

export type VariantRecord<Variants extends string, ComponentProps> = Record<
  Variants,
  React.ComponentType<ComponentProps>
> & { default: React.ComponentType<ComponentProps> };

export interface HasVariant<Variants> {
  variant?: Variants;
}
