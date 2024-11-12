import React from 'react';
import PropTypes from 'prop-types';
import addStyles from '../../../libs/styles';

function renderStyles() {
  addStyles(`.error-banner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    min-height: 4rem;
    background: #f00;
    padding: 0.8rem 1.2rem;
    border-radius: 0.3rem;
    margin: 20px 0;
  }`);
  addStyles(`.error-banner > i {
    font-size: 2.4rem;
    color: #fff;
    margin-right: 1.2rem;
  }`);
  addStyles(`.error-banner h3 {
    color: #fff;
    font-size: 1.4rem;
    font-family: 'montserratbold';
    font-weight: normal;
    margin: 0;
    margin-right: 3.2rem;
  }`);
  addStyles(`.error-banner__content {
    color: #fff;
    font-family: 'montserratregular';
    font-weight: normal;
    font-size: 1.4rem;
  }`);
  addStyles(`.error-banner__content span {
    margin-right: 0.8rem;
  }`);
}
export default class InlineError extends React.PureComponent {

  static propTypes = {
    error: PropTypes.string,
  };

  render() {
    renderStyles();
    return (
      <div className="error-banner">
        <i className="material-icons">error</i>
        <h3>Error</h3>
        <div className="error-banner__content">
          { this.props.error }
        </div>
      </div>
    );
  }
}
