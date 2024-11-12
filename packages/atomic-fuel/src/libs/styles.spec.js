/**
 * @jest-environment jsdom
 */
import addStyles from './styles.js';

describe('addStyles function', () => {
  it('Should only add one class rule to the style element when invoked repetitively', () => {
    for (let i = 0; i < 5; i += 1) {
      addStyles(`.error-banner__content {
        color: #fff;
        font-family: 'montserratregular';
        font-weight: normal;
        font-size: 1.4rem;
      }`);
    }

    const styleEl = document.getElementById('atomic-fuel-styles');
    const stylesheet = styleEl.sheet;
    const rulesLength = stylesheet.cssRules.length;
    expect(rulesLength).toEqual(1);
  });

  it('Should not insert repetitive selectorText to the style element', () => {
    const expectedSelectorTextOne = '.error-banner__content';
    const expectedSelectorTextTwo = '.atomicjolt-loading-animation svg polygon, .atomicjolt-loading-animation svg polyline';

    for (let i = 0; i < 5; i += 1) {
      addStyles(`${expectedSelectorTextOne} {
        color: #fff;
        font-family: 'montserratregular';
        font-weight: normal;
        font-size: 1.4rem;
      }`);

      addStyles(`${expectedSelectorTextTwo}{
        fill: none;
        stroke: #424;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 8px;
      }`);
    }

    const styleEl = document.getElementById('atomic-fuel-styles');
    const stylesheet = styleEl.sheet;
    const rulesLength = stylesheet.cssRules.length;

    const selectorTextOne = stylesheet.cssRules[0].selectorText;
    const selectorTextTwo = stylesheet.cssRules[1].selectorText;

    expect(rulesLength).toEqual(2);
    expect(selectorTextOne).toEqual(expectedSelectorTextOne);
    expect(selectorTextTwo).toEqual(expectedSelectorTextTwo);
  });
});
