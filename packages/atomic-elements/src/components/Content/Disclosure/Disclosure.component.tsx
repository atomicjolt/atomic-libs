import React, { forwardRef, useContext, useRef } from "react";
import { useDisclosure } from "@react-aria/disclosure";
import { useId } from "@react-aria/utils";
import {
  useDisclosureGroupState,
  useDisclosureState,
  DisclosureGroupProps as StatelyDisclosureGroupProps,
  DisclosureProps as StatelyDisclosureProps,
} from "react-stately";
import { MaterialIcons, RenderBaseProps } from "../../../types";
import { useContextProps } from "@hooks/useContextProps";
import {
  DisclosureContext,
  DisclosureGroupStateContext,
  DisclosurePanelContext,
  DisclosureStateContext,
} from "./Disclosure.context";
import {
  DisclosurePanelWrapper,
  DisclosureWrapper,
  DisclosureButton,
} from "./Disclosure.styles";
import { useRenderProps } from "@hooks";
import { Provider } from "@components/Internal/Provider";
import { ButtonContext } from "@components/Buttons/Button/Button.context";
import { ButtonProps } from "@components/Buttons/Button";
import { MaterialIcon } from "@components/Icons/MaterialIcon";
import { DEFAULT_SLOT } from "@hooks/useSlottedContext";

interface DisclosureRenderProps {
  isExpanded: boolean;
  isDisabled: boolean;
}

export interface DisclosureProps
  extends StatelyDisclosureProps,
    RenderBaseProps<DisclosureRenderProps> {
  id?: string;
  isDisabled?: boolean;
}

type ForwardedDisclosure = {
  (props: DisclosureProps): React.ReactNode;
  displayName: string;
  Panel: typeof DisclosurePanel;
  Trigger: typeof DisclosureTrigger;
};

/** A disclosure is a collapisble section of content. It is composed of a trigger
 * and a panel. The trigger is a button that controls the visibility of the panel.
 */
export const Disclosure = forwardRef<HTMLDivElement, DisclosureProps>(
  function Disclosure(props, ref) {
    [props, ref] = useContextProps(DisclosureContext, props, ref);
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

    const isDisabled = (props.isDisabled || groupState?.isDisabled) ?? false;

    const { buttonProps, panelProps } = useDisclosure(props, state, panelRef);

    const renderProps = useRenderProps({
      componentClassName: "aje-disclosure",
      ...props,
      values: { isExpanded: state.isExpanded, isDisabled },
      selectors: {
        "data-expanded": state.isExpanded,
        "data-disabled": isDisabled,
      },
    });

    return (
      <DisclosureWrapper {...renderProps} ref={ref}>
        <Provider
          values={[
            [DisclosureGroupStateContext.Provider, {}],
            [DisclosureStateContext.Provider, state],
            [
              ButtonContext.Provider,
              {
                slots: {
                  [DEFAULT_SLOT]: {},
                  trigger: {
                    ...buttonProps,
                    isDisabled,
                    ref: triggerRef,
                  },
                },
              },
            ],
            [
              DisclosurePanelContext.Provider,
              {
                ref: panelRef,
                ...panelProps,
              },
            ],
          ]}
        >
          {renderProps.children}
        </Provider>
      </DisclosureWrapper>
    );
  }
) as unknown as ForwardedDisclosure;

export interface DisclosurePanelProps extends ButtonProps {}

const DisclosurePanel = forwardRef<HTMLDivElement, DisclosurePanelProps>(
  function DisclosurePanel(props, ref) {
    [props, ref] = useContextProps(DisclosurePanelContext, props, ref);

    const { className, style, children, slot, ...rest } = props;

    const renderProps = useRenderProps({
      componentClassName: "aje-disclosure-panel",
      ...props,
    });

    return (
      <DisclosurePanelWrapper {...rest} {...renderProps} ref={ref}>
        {renderProps.children}
      </DisclosurePanelWrapper>
    );
  }
);

DisclosurePanel.displayName = "Disclosure.Panel";
Disclosure.Panel = DisclosurePanel;

interface DisclosureTriggerIcons {
  expanded: MaterialIcons;
  collapsed: MaterialIcons;
}

const DefaultDisclosureTriggerIcons: DisclosureTriggerIcons = {
  expanded: "expand_less",
  collapsed: "expand_more",
};

interface DisclosureTriggerProps extends Omit<ButtonProps, "children"> {
  children?: React.ReactNode;
  icons?: Partial<DisclosureTriggerIcons>;
}

const DisclosureTrigger = forwardRef<HTMLButtonElement, DisclosureTriggerProps>(
  function DisclosureTrigger(props, ref) {
    const state = useContext(DisclosureStateContext)!;
    const icons = { ...DefaultDisclosureTriggerIcons, ...props.icons };

    return (
      <DisclosureButton
        slot="trigger"
        variant="disclosure-trigger"
        ref={ref}
        {...props}
      >
        <MaterialIcon
          icon={state.isExpanded ? icons.expanded : icons.collapsed}
        />
        {props.children}
      </DisclosureButton>
    );
  }
);

DisclosureTrigger.displayName = "Disclosure.Trigger";
Disclosure.Trigger = DisclosureTrigger;

export interface DisclosureGroupProps extends StatelyDisclosureGroupProps {
  children: React.ReactNode;
}

/** DisclosureGroup wraps several Disclosures so that their behavior can be
 * controlled together. This is often used to create an accordion.
 */
export function DisclosureGroup(props: DisclosureGroupProps) {
  const state = useDisclosureGroupState(props);

  return (
    <DisclosureGroupStateContext.Provider value={state}>
      {props.children}
    </DisclosureGroupStateContext.Provider>
  );
}
