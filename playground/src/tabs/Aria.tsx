import React from "react";
import { useDisclosure, AriaDisclosureProps } from "@react-aria/disclosure";
import { useId } from "@react-aria/utils";
import {
  useDisclosureGroupState,
  useDisclosureState,
  DisclosureGroupProps as StatelyDisclosureGroupProps,
  DisclosureGroupState,
  DisclosureState,
  DisclosureProps as StatelyDisclosureProps,
} from "react-stately";
import {
  Button,
  Divider,
  Key,
  MaterialIcon,
} from "@atomicjolt/atomic-elements";
import styled from "styled-components";

const DisclosureGroupStateContext =
  React.createContext<DisclosureGroupState | null>(null);

interface DisclosureGroupProps extends StatelyDisclosureGroupProps {
  children: React.ReactNode;
}

function DisclosureGroup(props: DisclosureGroupProps) {
  const state = useDisclosureGroupState(props);

  return (
    <DisclosureGroupStateContext.Provider value={state}>
      {props.children}
    </DisclosureGroupStateContext.Provider>
  );
}

interface DisclosureProps extends StatelyDisclosureProps {
  children: React.ReactNode;
  id?: string;
  isDisabled?: boolean;
}

const DisclosureButton = styled(Button)`
  justify-content: flex-start;
  min-height: 48px;
  border: none;
  padding: 12px;
  padding-left: 16px;
  isolation: isolate;

  --btn-text-clr: var(--text-clr-alt);
  --btn-bg-clr: var(--neutral200);
  --btn-hover-text-clr: var(--text-clr);
  --btn-hover-bg-clr: var(--neutral300);
  --btn-border: var(--border);
  --btn-pressed-transform: "";
`;

const DisclosurePanel = styled.div``;

function Disclosure(props: DisclosureProps) {
  const id = useId(props.id);
  const groupState = React.useContext(DisclosureGroupStateContext);

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

  const panelRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const isDisabled = props.isDisabled || groupState?.isDisabled;

  const { buttonProps, panelProps } = useDisclosure(props, state, panelRef);
  // let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <div>
      <DisclosureButton
        ref={triggerRef}
        {...buttonProps}
        size="full"
        variant="secondary"
        isDisabled={isDisabled}
        // {...focusProps}
      >
        <MaterialIcon icon={state.isExpanded ? "unfold_less" : "unfold_more"} />
        {state.isExpanded ? "Hide" : "Show"}
      </DisclosureButton>
      <DisclosurePanel ref={panelRef} {...panelProps}>
        {props.children}
      </DisclosurePanel>
    </div>
  );
}

export default function Aria() {
  return (
    <>
      <DisclosureGroup defaultExpandedKeys={["d1"]}>
        <Disclosure id="d1">
          <p style={{ fontSize: "25px" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            aliquid consequuntur expedita ratione sed ab fugiat laudantium.
            Porro expedita, voluptate aspernatur consequatur inventore corporis
            odio voluptatem quod, corrupti, iste tempora.
          </p>
        </Disclosure>
        <Disclosure id="d2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nemo
            expedita officia quod, nihil molestiae voluptate vel laudantium
            facilis culpa debitis labore obcaecati temporibus ut repellendus, ab
            similique harum accusantium.
          </p>
        </Disclosure>
      </DisclosureGroup>

      <Disclosure>
        <div>Content</div>
      </Disclosure>
    </>
  );
}
