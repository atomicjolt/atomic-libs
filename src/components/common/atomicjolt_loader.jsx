import React from 'react';
import addStyles from '../../libs/styles';


function renderStyles() {
  addStyles(`.atomicjolt-loading-animation {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 48px auto;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background-image: linear-gradient(to top right, #B388FF, #E7B9FF);
    box-shadow: -2px 3px 6px rgba(0,0,0,0.25);
  }`);
  addStyles(`.atomicjolt-loading-animation svg {
    width: 38px;
    position: relative;
    left: -2px;
    top: -1px;
  }`);
  addStyles(`.atomicjolt-loading-animation svg polygon, .atomicjolt-loading-animation svg polyline {
    fill: none;
    stroke: #fff;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 8px;
  }`);
  addStyles(`.atomicjolt-loading-animation svg .cls-1 {
    stroke-dasharray: 0 250;
    animation: line1 1.5s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }`);
  addStyles(`.atomicjolt-loading-animation svg .cls-2 {
    stroke-dasharray: 0 270;
    animation: line2 1.5s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }`);
  addStyles(`@keyframes line1 {
    0% {
      stroke-dasharray: 0 250;
   }
    40% {
      stroke-dasharray: 250 250;
   }
    60% {
      stroke-dasharray: 250 250;
   }
    100% {
      stroke-dasharray: 0 250;
   }
  }`);
  addStyles(`@keyframes line2 {
    0% {
      stroke-dasharray: 0 270;
   }
    40% {
      stroke-dasharray: 270 270;
   }
    60% {
      stroke-dasharray: 270 270;
   }
    100% {
      stroke-dasharray: 0 270;
   }
  }`);
}

export default class Loader extends React.PureComponent {

  render() {
    renderStyles();
    return (
      <div className="atomicjolt-loading-animation">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91.87 114.09" role="img" aria-label="loading">
          <g data-name="Layer 2">
            <polygon className="cls-1" points="40.45 111.32 89.11 99.26 71.35 19.9 21.1 89.71 40.45 111.32" />
            <polyline className="cls-2" points="50.67 2.77 2.77 69.96 25.47 94.65 66.36 84.13 50.67 2.77 71.35 19.9" />
          </g>
        </svg>
      </div>
    );
  }
}
