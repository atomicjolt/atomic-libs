import React from 'react';
import PropTypes from 'prop-types';
import AtomicJoltLoader from '../common/atomicjolt_loader';
import InlineError from '../common/errors/inline_error';

export default function GqlStatus(props) {
  if (props.loading) {
    return (
      <AtomicJoltLoader message={props.loadMessage} />
    );
  }

  if (props.error) {
    return <InlineError error={props.error.message} />;
  }

  return null;
}

GqlStatus.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.shape({ message: PropTypes.string }),
  loadMessage: PropTypes.string,
};