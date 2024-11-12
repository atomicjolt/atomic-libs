import React from 'react';
import { Query } from '@apollo/client/react/components';
import PropTypes from 'prop-types';

import AtomicJoltLoader from '../components/common/atomicjolt_loader';
import InlineError from '../components/common/errors/inline_error';

export default class AtomicQuery extends React.Component {

  static propTypes = {
    children: PropTypes.func.isRequired,
    loadingMessage: PropTypes.string,
    hideLoader: PropTypes.bool,
    // the base Query component has an onCompleted function, but it's only
    // called after the initial request for data returns, and not if you visit
    // the page again
    onDataReady: PropTypes.func,
    onDataLoading: PropTypes.func,
  };

  static defaultProps = {
    onDataReady: () => { },
    onDataLoading: () => { },
  };

  dataReady = false;

  dataLoading = false;

  render() {
    return (
      <Query {...this.props}>
        {(result) => {
          const { loading, error } = result;
          if (loading) {
            if (!this.dataLoading) {
              this.props.onDataLoading();
              this.dataLoading = true;
              this.dataReady = false;
            }

            if (this.props.hideLoader) {
              return null;
            }
            return (
              <AtomicJoltLoader message={this.props.loadingMessage} />
            );
          }
          if (error) {
            if (error.networkError &&
              error.networkError.result &&
              error.networkError.result.canvas_authorization_required) {
              // This error will be handled by a Canvas reauth. Don't output an error.
              return null;
            }

            if (error.networkError &&
              error.networkError.bodyText &&
              error.networkError.bodyText.indexOf('JWT::ExpiredSignature') >= 0) {
              return (
                <InlineError error="Your authentication token has expired. Please refresh the page to enable authentication." />
              );
            }

            return (
              <InlineError error={error.message} />
            );
          }
          if (!this.dataReady) {
            this.props.onDataReady(result.data);
            this.dataReady = true;
            this.dataLoading = false;
          }
          return this.props.children(result);
        }}
      </Query>
    );
  }

}
