function getAddStyles(selectorTextRegex = /[^{]*/) {
  const memo = {};
  const id = 'atomic-fuel-styles';

  let styleEl = document.getElementById(id);

  return (styles) => {
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = id;
      document.head.appendChild(styleEl);
    }

    /*
     * The RegEx below extracts the selectorText from the styles
     * string. For example running this regex on the styles string
     * ".myClass > h1 .myclassTwo {...}" would yield ".myClass > h1 .myclassTwo"
     */
    const classes = styles.match(selectorTextRegex)[0].trim();

    if (memo[classes] === undefined) {
      const styleSheet = styleEl.sheet;
      styleSheet.insertRule(styles, styleSheet.cssRules.length);
      memo[classes] = 1;
    }
  };
}

export default getAddStyles();
