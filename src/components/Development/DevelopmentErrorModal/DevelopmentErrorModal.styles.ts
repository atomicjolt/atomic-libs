import styled from 'styled-components';

export const StackTrace = styled.div`
  font-family: monospace;
  white-space: nowrap;
  background-color: #222;
  color: var(--neutral300);
  padding: 16px;
  border-radius: 4px;
  max-width: 100%;
  max-height: 700px;
  overflow: auto;
  line-height: 3rem;
  margin-top: 8px;
`;

export const ErrorName = styled.span`
  color: var(--accent-clr);
`;

export const ErrorSymbol = styled.span`
  color: green;
`;

export const ErrorPath = styled.span`
  color: #edc72f;
`;


export const ErrorHelper = styled.p`
  color: var(--text-clr-inverted);
  line-height: 1.5;
  max-width: 900px;
`;

export const Link = styled.a`
  color: var(--accent-clr);
  text-decoration: none;
  cursor: pointer;
`;
