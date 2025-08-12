import React, { useRef } from "react";
import { AriaSearchFieldProps, useSearchField } from "@react-aria/searchfield";
import { useSearchFieldState } from "react-stately";
import { AriaProps } from "../../../types";
import { FieldProps } from "../Field";
import { StyledField } from "../Field.styles";
import { Provider } from "../../Internal/Provider";
import { useRenderProps } from "@hooks";
import { filterDOMProps } from "@react-aria/utils";
import {
  FieldErrorContext,
  FieldInputContext,
  FieldLabelContext,
  FieldMessageContext,
} from "../contexts";
import { ButtonContext } from "@components/Buttons/Button";
import { useTranslations } from "@hooks/useTranslations";
import { DEFAULT_SLOT } from "@hooks/useSlottedContext";
import { useContextProps } from "@hooks/useContextProps";
import { SearchFieldContext } from "./SearchField.context";

export interface SearchFieldProps
  extends FieldProps,
    Omit<AriaProps<AriaSearchFieldProps>, "placeholder"> {}

/** SearchField component - provides the foundation for search functionality */
export const SearchField = React.forwardRef<HTMLDivElement, SearchFieldProps>(
  function SearchField(props, ref) {
    [props, ref] = useContextProps(SearchFieldContext, props, ref);
    const { isDisabled, isRequired, isReadOnly, name } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const state = useSearchFieldState(props);
    const {
      inputProps,
      labelProps,
      descriptionProps,
      errorMessageProps,
      isInvalid,
    } = useSearchField(
      {
        ...props,
        label: true,
      },
      state,
      inputRef
    );

    const t = useTranslations();

    const renderProps = useRenderProps({
      ...props,
      componentClassName: "aje-field__search",
      values: { isInvalid, isDisabled, isReadOnly, isRequired },
      selectors: {
        "data-invalid": isInvalid,
        "data-disabled": isDisabled,
        "data-readonly": isReadOnly,
        "data-required": isRequired,
      },
    });

    const inputCtx = {
      ...inputProps,
      disabled: isDisabled,
      readOnly: isReadOnly,
      name,
      ref: inputRef,
    };

    return (
      <StyledField ref={ref} {...renderProps} {...filterDOMProps(props)}>
        <Provider
          values={[
            [FieldLabelContext.Provider, labelProps],
            [FieldInputContext.Provider, inputCtx],
            [FieldMessageContext.Provider, descriptionProps],
            [FieldErrorContext.Provider, { ...errorMessageProps, isInvalid }],
            [
              ButtonContext.Provider,
              {
                slots: {
                  [DEFAULT_SLOT]: {},
                  submit: {
                    onPress: () => props.onSubmit?.(state.value),
                    "aria-label": t("search"),
                  },
                },
              },
            ],
          ]}
        >
          {renderProps.children}
        </Provider>
      </StyledField>
    );
  }
);
