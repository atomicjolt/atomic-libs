import styled, { keyframes } from "styled-components";
import mixins from "../../../styles/mixins";
import { FieldWrapper } from "../../Internal/FieldWrapper";

const squishy = keyframes`
  0% {
    transform: translateX(0) scale(1, 1);
  }
  50% {
    transform: translateX(calc(var(--toggle-travel) / 2)) scale(1.25, 0.8);
  }
  100% {
    transform: translateX(var(--toggle-travel)) scale(1, 1);
  }
`;

const squishyBack = keyframes`
  0% {
    transform: translateX(var(--toggle-travel)) scale(1, 1);
  }
  50% {
    transform: translateX(calc(var(--toggle-travel) / 2)) scale(1.25, 0.8);
  }
  100% {
    transform: translateX(0) scale(1, 1);
  }
`;

const squishyIcon = keyframes`
  0% {
    content: "\\e5cd";
  }
  50% {
    content: "\\e15b";
  }
  100% {
    content: "\\e5ca";
  }
`;

const squishyIconBack = keyframes`
  0% {
    content: "\e5ca";
  }
  50% {
    content: "\\e15b";
  }
  100% {
    content: "\\e5cd";
  }
`;

export const ToggleSwitchContainer = styled.div`
  ${mixins.FocusVisible(2)}
  position: relative;
  width: calc(var(--toggle-size) * 1.666);
  height: var(--toggle-size);
  border-radius: calc(var(--toggle-size) / 2);
  background-color: var(--toggle-unchecked);
  transition: background-color 200ms linear;
  overflow: hidden;
`;

export const ToggleSwitchLabel = styled.span`
  ${mixins.Bold}
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  position: relative;
  font-size: 1.3rem;
  line-height: 1.5;
  color: var(--text-clr);

  &.is-checked ${ToggleSwitchContainer} {
    background-color: var(--toggle-checked);

    i {
      transform: translateX(var(--toggle-travel)) scale(1, 1);
      border-color: var(--toggle-checked);

      &::before {
        color: var(--toggle-checked);
        translate: translateX(var(--toggle-travel)) scale(1, 1);
        content: "\\e5ca";
      }
    }
  }

  &.check-animation ${ToggleSwitchContainer} {
    background-color: var(--toggle-checked);
    i {
      animation: ${squishy} 200ms linear forwards;
      border-color: var(--toggle-checked);

      &::before {
        animation: ${squishyIcon} 200ms linear forwards;
        color: var(--toggle-checked);
      }
    }
  }

  &.uncheck-animation ${ToggleSwitchContainer} {
    background-color: var(--toggle-unchecked);
    i {
      animation: ${squishyBack} 200ms linear forwards;
      border-color: var(--toggle-unchecked);

      &::before {
        animation: ${squishyIconBack} 200ms linear forwards;
        color: var(--text-clr-alt);
      }
    }
  }
`;

export const ToggleSwitchWrapper = styled.label`
  &[data-invalid] ${ToggleSwitchContainer} {
    background-color: var(--toggle-error);

    i {
      border-color: var(--toggle-error);

      &::before {
        color: var(--toggle-error);
      }
    }
  }

  &[data-disabled] {
    cursor: auto;
    opacity: 0.5;
  }
`;

export const ToggleSwitchIcon = styled.i`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--toggle-size);
  height: var(--toggle-size);
  border-radius: 50%;
  box-sizing: border-box;
  background-color: var(--neutral50);
  border: 3px solid var(--toggle-unchecked);
  transform-origin: left center;
  transition: border-color 200ms linear;
  display: flex;
  margin: auto;

  &::before {
    content: "\\e5cd";
    align-self: center;
    margin: auto;
    font-size: 1.4rem;
    font-family: "Material Icons";
    font-style: normal;
    line-height: 1;
    color: var(--text-clr-alt);
    z-index: 2;
  }
`;
