import { Button } from "@components/Buttons/Button";
import styled from "styled-components";

export const DisclosureWrapper = styled.div``;

export const DisclosureButton = styled(Button)`
  justify-content: flex-start;
  min-height: 48px;
  border: none;
  padding: 12px;
  padding-left: 16px;
  isolation: isolate;

  &.aje-btn--disclosure-trigger {
    width: 100%;
    --btn-text-clr: var(--text-clr-alt);
    --btn-bg-clr: var(--neutral200);
    --btn-hover-text-clr: var(--text-clr);
    --btn-hover-bg-clr: var(--neutral300);
    --btn-border: var(--border);
    --btn-pressed-transform: "";
  }
`;

export const DisclosurePanelWrapper = styled.div``;
