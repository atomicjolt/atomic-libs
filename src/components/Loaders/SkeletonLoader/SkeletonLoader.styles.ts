import styled from 'styled-components';


export const Svg = styled.svg<{ $rtl: boolean }>`
  ${({$rtl}) => $rtl ? { transform: "scaleX(-1)" } : null}
`;

export const GradientEndPoint = styled.stop`
  stop-color: var(--skeleton-bg-clr);
  stop-opacity: var(--skeleton-bg-opacity);
`

export const GradientMidPoint = styled.stop`
  stop-color: var(--skeleton-fg-clr);
  stop-opacity: var(--skeleton-fg-opacity);
`
