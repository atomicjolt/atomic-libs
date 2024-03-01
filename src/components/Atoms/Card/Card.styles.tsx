import styled from 'styled-components';
import mixins from '../../../styles/mixins';

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
`

export const CardWrapper  = styled.div`
  background-color: var(--card-bg-clr);
  border: var(--card-border);
  border-radius: var(--card-radius);
  padding: var(--card-padding);

  & > ${StyledCardPanel} {
    margin-bottom: var(--card-padding)
  }

  & > ${StyledCardPanel}:last-child {
    margin-bottom: 0px;
  }
`;

export const CardTitle = styled.h2`
  ${mixins.Bold}
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--card-text-clr);
  margin: 16px;
  font-size: 16px;
`


export const CardColumns = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--card-padding);

  /* * {
    flex: 1;
  } */
`
