import { Argument } from "classnames";
import { Key } from "./aria";
import { Placement } from "@react-aria/overlays";

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

export type LoadingProps = {
  /** When loading is true, the content will be replaced with a spinner.
   * When it is false, the content will be shown normally */
  isLoading?: boolean;
  /** aria accessiblity label to inform screen-readers that it is loading */
  loadingLabel?: string;
  /** Transitions the loading spinner to a checkmark */
  loadingComplete?: boolean;
};

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
  /** Total items
   * @default totalPages * pageSize
   */
  totalItems?: number;

  /** Possible page sizes to select from
   * @default [10, 25, 50, 100]
   * */
  possiblePageSizes?: number[];
}

export interface DropdownProps {
  /** The maximum height of the the dropdown.
   * @default height of the viewport */
  maxHeight?: number;

  dropdownPlacement?: Placement;
}
