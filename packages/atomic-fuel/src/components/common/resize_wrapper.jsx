import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import initResizeHandler from '../../libs/resize_iframe';

export default function ResizeWrapper(props) {

  const { children, getSize, observeImages } = props;

  useEffect(() => {
    const cleanup = initResizeHandler(getSize, observeImages);
    return cleanup;
  }, []);

  return (
    <>
      {children}
      <div id="content-measuring-stick" />
    </>
  );
}

ResizeWrapper.propTypes = {
  children: propTypes.node,
  getSize: propTypes.func,
};
