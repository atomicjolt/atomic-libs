import { forwardRef, HTMLAttributes, useContext, useRef } from "react";
import { useDisclosure } from "@react-aria/disclosure";
import { filterDOMProps, useId } from "@react-aria/utils";
import {
  useDisclosureGroupState,
  useDisclosureState,
  DisclosureGroupProps as StatelyDisclosureGroupProps,
  DisclosureProps as StatelyDisclosureProps,
} from "react-stately";
import { RenderBaseProps } from "../../../types";
import { useContextPropsV2 } from "@hooks/useContextProps";
import {
  DisclosureContext,
  DisclosureGroupStateContext,
  DisclosurePanelContext,
  DisclosureStateContext,
} from "./Disclosure.context";
import {
  StyledDisclosurePanel,
  StyledDisclosure,
  DisclosureButton,
} from "./Disclosure.styles";
import { useRenderProps } from "@hooks";
import { Provider } from "@components/Internal/Provider";
import { ButtonContext } from "@components/Buttons/Button/Button.context";
import { PressResponder } from "@react-aria/interactions";
import { ButtonProps } from "@components/Buttons/Button";

export interface DisclosureProps
  extends StatelyDisclosureProps,
    RenderBaseProps<never> {
  children: React.ReactNode;
  id?: string;
  isDisabled?: boolean;
}

export const Disclosure = forwardRef<HTMLDivElement, DisclosureProps>(
  function Disclosure(props, ref) {
    [props, ref] = useContextPropsV2(DisclosureContext, props, ref);
    const id = useId(props.id);
    const groupState = useContext(DisclosureGroupStateContext);

    const isExpanded = groupState
      ? groupState.expandedKeys.has(id)
      : props.isExpanded;

    const state = useDisclosureState({
      ...props,
      isExpanded,
      onExpandedChange: (isExpanded) => {
        if (groupState) {
          groupState.toggleKey(id);
        }

        props.onExpandedChange?.(isExpanded);
      },
    });

    const panelRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    const isDisabled = props.isDisabled || groupState?.isDisabled;

    const { buttonProps, panelProps } = useDisclosure(props, state, panelRef);

    const renderProps = useRenderProps({
      componentClassName: "aje-disclosure",
      ...props,
      selectors: {
        "data-expanded": isExpanded,
        "data-disabled": isDisabled,
      },
    });

    return (
      <StyledDisclosure {...renderProps} ref={ref}>
        <Provider
          values={[
            [DisclosureGroupStateContext.Provider, {}],
            [
              DisclosureStateContext.Provider,
              { ...state, isExpanded, isDisabled },
            ],
            [
              ButtonContext.Provider,
              {
                isDisabled,
              },
            ],
            [
              DisclosurePanelContext.Provider,
              {
                ref: panelRef,
                isExpanded,
                ...panelProps,
              },
            ],
          ]}
        >
          <PressResponder {...buttonProps} ref={triggerRef}>
            {renderProps.children}
          </PressResponder>
        </Provider>
      </StyledDisclosure>
    );
  }
);

export interface DisclosurePanelProps
  extends ButtonProps,
    Omit<HTMLAttributes<HTMLElement>, "children" | "className" | "style"> {
  isExpanded?: boolean;
}

export const DisclosurePanel = forwardRef<HTMLDivElement, DisclosurePanelProps>(
  function DisclosurePanel(props, ref) {
    [props, ref] = useContextPropsV2(DisclosurePanelContext, props, ref);

    return <StyledDisclosurePanel {...props} ref={ref} />;
  }
);

export const DisclosureTrigger = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(function DisclosureTrigger(props, ref) {
  return <DisclosureButton>{props.children}</DisclosureButton>;
});

export interface DisclosureGroupProps
  extends StatelyDisclosureGroupProps,
    RenderBaseProps<never> {
  children: React.ReactNode;
}

export function DisclosureGroup(props: DisclosureGroupProps) {
  const state = useDisclosureGroupState(props);

  return (
    <DisclosureGroupStateContext.Provider value={state}>
      {props.children}
    </DisclosureGroupStateContext.Provider>
  );
}
