import styled, { keyframes } from "styled-components";
import mixins from "../../../styles/mixins";

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

export const ToggleSwitchWrapper = styled.label`
  //Disabled states
  input[type="checkbox"]:disabled ~ .aje-toggle-switch__label {
    cursor: auto;
    opacity: 0.5;
  }

  :is(input):focus-visible ~ .aje-toggle-switch__label::after {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: calc(var(--toggle-size) * 1.666);
    height: var(--toggle-size);
    border-radius: calc(var(--toggle-size) / 2);
    background-color: transparent;
    outline: var(--outline);
    outline-offset: 2px;
  }

  :is(input):focus:not(:focus-visible) {
    outline: none;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  margin: 0;
  height: 0.01rem;
  width: 0.01rem;
  position: absolute;
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

  &.is-checked div {
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

  &.check-animation div {
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

  &.uncheck-animation div {
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

export const ToggleSwitchContainer = styled.div`
  position: relative;
  width: calc(var(--toggle-size) * 1.666);
  height: var(--toggle-size);
  border-radius: calc(var(--toggle-size) / 2);
  background-color: var(--toggle-unchecked);
  transition: background-color 200ms linear;
  overflow: hidden;
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
