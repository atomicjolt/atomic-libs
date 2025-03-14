import React, { DOMAttributes, forwardRef, RefAttributes, useContext, type JSX } from "react";
import { useTagGroup } from "@react-aria/tag";
import { useListState } from "react-stately";
import {
  BaseCollection,
  Collection,
  CollectionBuilder,
} from "@react-aria/collections";
import {
  CollectionBase,
  FocusableElement,
  Key,
  MultipleSelection,
  SelectionBehavior,
} from "@react-types/shared";

import {
  FieldErrorContext,
  FieldLabelContext,
  FieldMessageContext,
  FieldProps,
} from "@components/Fields";
import { useRenderProps } from "@hooks";
import { useContextProps } from "@hooks/useContextProps";
import { Provider } from "@components/Internal/Provider";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";

import { ChipsWrapper, ChipGroupWrapper } from "./ChipGroupField.styles";
import {
  ChipGroupFieldContext,
  ChipGroupListContext,
  ChipGroupStateContext,
} from "./ChipGroupField.context";
import {
  AriaLabelProps,
  DomProps,
  ExtendedSize,
  FieldStatusProps,
  RenderStyleProps,
} from "../../../types";
import { ItemContext } from "@components/Collection";
import { ChipLeaf } from "@components/Chips/Chip";

export interface ChipGroupFieldProps
  extends MultipleSelection,
    RenderStyleProps<never>,
    DomProps,
    AriaLabelProps,
    Omit<FieldStatusProps, "isReadOnly"> {
  children: React.ReactNode;
  /** Handler called when a user deletes a chip */
  onRemove?: (removed: Set<Key>) => void;
  /** How multiple selection should behave in the collection. */
  selectionBehavior?: SelectionBehavior;
  /** Size of the chip group */
  size?: ExtendedSize;
}

interface ForwardedChipGroupField {
  (props: ChipGroupFieldProps & RefAttributes<HTMLDivElement>): JSX.Element;
  displayName: string;

  /** The list of chips within a ChipGroupField */
  List: typeof ChipGroupFieldList;
}

/** Building blocks for constructing a ChipGroup field. */
export const ChipGroupField = forwardRef(function ChipGroupField<
  T extends object
>(props: ChipGroupFieldProps, ref: React.ForwardedRef<HTMLDivElement>) {
  [props, ref] = useContextProps(ChipGroupFieldContext, props, ref);

  return (
    <CollectionBuilder content={props.children}>
      {(collection: BaseCollection<T>) => (
        <ChipGroupFieldInner
          {...props}
          collection={collection}
          chipGroupRef={ref}
        />
      )}
    </CollectionBuilder>
  );
}) as unknown as ForwardedChipGroupField;

ChipGroupField.displayName = "ChipFieldGroup";

interface ChipGroupFieldInnerProps<T extends object>
  extends ChipGroupFieldProps {
  collection: BaseCollection<T>;
  chipGroupRef: React.RefObject<HTMLDivElement | null>;
}

function ChipGroupFieldInner<T extends object>(
  props: ChipGroupFieldInnerProps<T>
) {
  const { isInvalid, isDisabled, isRequired, chipGroupRef } = props;

  const state = useListState({
    ...props,
    children: undefined,
  });

  const { gridProps, labelProps, descriptionProps, errorMessageProps } =
    useTagGroup({ ...props, label: true }, state, chipGroupRef);

  const renderProps = useRenderProps({
    componentClassName: "aje-chip-group",
    ...props,
    selectors: {
      "data-disabled": isDisabled,
      "data-invalid": isInvalid,
      "data-required": isRequired,
    },
  });

  return (
    <ChipGroupWrapper {...renderProps}>
      <Provider
        values={[
          [FieldLabelContext.Provider, labelProps],
          [FieldMessageContext.Provider, descriptionProps],
          [FieldErrorContext.Provider, { ...errorMessageProps, isInvalid }],
          [ChipGroupStateContext.Provider, state],
          [ChipGroupListContext.Provider, { ...gridProps, ref: chipGroupRef }],
          [ItemContext.Provider, { render: ChipLeaf }],
        ]}
      >
        {renderProps.children}
      </Provider>
    </ChipGroupWrapper>
  );
}

export interface ChipGroupFieldListProps<T>
  extends CollectionBase<T>,
    Omit<DOMAttributes<FocusableElement>, "children"> {
  beforeChildren?: React.ReactNode;
}

interface ForwardedChipGroupFieldList {
  <T>(
    props: ChipGroupFieldListProps<T> & RefAttributes<HTMLDivElement>
  ): JSX.Element;
  displayName: string;
}

const ChipGroupFieldList = forwardRef(function ChipGroupFieldList<
  T extends object
>(props: ChipGroupFieldListProps<T>, ref: React.ForwardedRef<HTMLDivElement>) {
  [props, ref] = useContextProps(ChipGroupListContext, props, ref);
  const state = useContext(ChipGroupStateContext);

  // We're building the collection in the ChipGroupField component
  if (!state) return <Collection {...props} />;

  // We're rendering a built collection
  return <ChipGroupFieldListInner {...props} ref={ref} />;
}) as ForwardedChipGroupFieldList;

ChipGroupFieldList.displayName = "ChipGroupField.List";
ChipGroupField.List = ChipGroupFieldList;

const ChipGroupFieldListInner = forwardRef(function ChipGroupFieldListInner(
  props: ChipGroupFieldListProps<any>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { items, children, beforeChildren, ...rest } = props;
  const state = useContext(ChipGroupStateContext)!;
  const { CollectionRenderer } = useCollectionRenderer();

  return (
    <ChipsWrapper {...rest} ref={ref}>
      {beforeChildren}
      <CollectionRenderer
        collection={state.collection as BaseCollection<object>}
      />
    </ChipsWrapper>
  );
});
