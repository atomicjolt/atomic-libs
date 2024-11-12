import React from 'react';
import { Mutation } from '@apollo/client/react/components';
import PropTypes from 'prop-types';

import InlineError from '../components/common/errors/inline_error';

export default class AtomicMutation extends React.Component {

  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Mutation {...this.props}>
        {(method, result) => {
          const { error } = result;
          if (error) {
            return (
              <InlineError error={error.message} />
            );
          }
          return this.props.children(method, result);
        }}
      </Mutation>
    );
  }

}
