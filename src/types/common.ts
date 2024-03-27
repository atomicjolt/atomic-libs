import { Argument } from "classnames";

export type Size = "small" | "medium" | "large";
export type ExtendedSize = Size | "auto" | "full";

export interface AriaLabelProps {
  readonly "aria-label"?: string;
  readonly "aria-labelledby"?: string;
  readonly "aria-describedby"?: string;
  readonly "aria-details"?: string;
}

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

export type CanHaveVariant<Variants> = Partial<HasVariant<Variants>>;

export type LoadingProps =
  | {
      /** When loading is true, the content will be replaced with a spinner.
       * When it is false, the content will be shown normally */
      isLoading?: false;
      /** aria accessiblity label to inform screen-readers that it is loading */
      loadingLabel?: never;
      /** Transitions the loading spinner to a checkmark */
      loadingComplete?: never;
    }
  | {
      isLoading: true;
      loadingLabel?: string;
      loadingComplete?: boolean;
    };

export type SortDirection = "ascending" | "descending" | undefined;

export type SuggestStrings<T> = T | (string & {});

export interface HasClassName {
  /** Add classes to the root element of the component.
   * Refer to this for possible values: https://github.com/JedWatson/classnames#readme*/
  className?: Argument[] | Argument;
}

export interface DirectionProps {
  $rtl?: boolean;
}
