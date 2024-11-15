import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import GqlStatus from './gql_status';

const mockStore = configureStore([]);
const store = mockStore({});

describe('GqlStatus', () => {
  it('renders loading', () => {
    const props = {
      loading: true,
      error: {
        message: 'There was an error',
      },
      loadMessage: 'Loading...',
    };
    const { container } = render(
      <Provider store={store}>
        <GqlStatus {...props} />
      </Provider>);
    expect(container).toMatchSnapshot();
  });

  it('renders error', () => {
    const props = {
      loading: false,
      error: {
        message: 'There was an error',
      },
      loadMessage: 'Loading...',
    };
    const { container } = render(
      <Provider store={store}>
        <GqlStatus {...props} />
      </Provider>);
    expect(container).toMatchSnapshot();
  });
});
