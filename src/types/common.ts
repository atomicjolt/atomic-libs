import { Argument } from "classnames";
import { Key } from "./aria";

export type Size = "small" | "medium" | "large";
export type ExtendedSize = Size | "auto" | "full";

export interface AriaLabelProps {
  readonly "aria-label"?: string;
  readonly "aria-labelledby"?: string;
  readonly "aria-describedby"?: string;
  readonly "aria-details"?: string;
}

export interface DomProps {
  /** Unique id for the component */
  readonly id?: string;
}

export interface PresentationProps {
  /** Add classes to the root element of the component.
   * Refer to this for possible values: https://github.com/JedWatson/classnames#readme*/
  readonly className?: Argument[] | Argument;

  /** Size of the component */
  readonly size?: ExtendedSize;

  /** Style of the component */
  // TODO: support this in the future
  // readonly style?: React.CSSProperties;
}

export interface BaseProps extends DomProps, PresentationProps {}

/* Props for a component that directly wraps an element */
export type ElementWrapperProps<WrappedElements> = BaseProps &
  Omit<WrappedElements, keyof BaseProps>;

export interface HasChildren {
  children: React.ReactNode;
}

export interface HasVariant<Variants> {
  variant?: SuggestStrings<Variants>;
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

export interface SearchDescriptor {
  /** Column that is currently being searched on */
  column: Key | null;
  /** Search string */
  search: string;
}

export interface PaginationDescriptor {
  /** Current page number */
  page: number;
  /** Number of items per page */
  pageSize: number;
  /** Total number of pages */
  totalPages: number;
}
