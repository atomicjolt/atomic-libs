import styled from "styled-components";
import mixins from "../../../styles/mixins";

export const StyledCardPanel = styled.div`
  background-color: var(--card-panel-bg-clr);
  color: var(--card-panel-text-clr);
  border-radius: var(--card-radius);
  padding: var(--card-panel-padding);
  font-size: 1.6rem;

  &.is-small {
    flex: 0 0 25%;
  }

  &.is-medium {
    flex: 0 0 50%;
  }

  &.is-large {
    flex: 0 0 75%;
  }

  &.is-full {
    flex: 1;
  }

  &.is-auto {
    flex: 0 0 auto;
  }
`;

export const CardWrapper = styled.div`
  background-color: var(--card-bg-clr);
  border: var(--card-border);
  border-radius: var(--card-radius);
  padding: var(--card-padding);

  --divider-margin-secondary: calc(var(--card-panel-padding) * -1);

  & > ${StyledCardPanel} {
    margin-bottom: var(--card-padding);
  }
  & > ${StyledCardPanel}:last-child {
    margin-bottom: 0px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px;
`;

export const CardTitle = styled.span`
  ${mixins.Bold}
  flex: 1;
  display: flex;
  align-items: center;
  color: var(--card-text-clr);
  font-size: 16px;
`;

export const CardColumns = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--card-padding);
`;
