import React from 'react';
import { render } from '@testing-library/react';
import Loader, { CoreLoader } from './atomicjolt_loader';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);
const store = mockStore({});

describe('Loader', () => {
  it('renders the default loader', () => {
    const { container } = render(
      <Provider store={store}>
        <Loader message="Loading..." />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders the core loader', () => {
    const { container } = render(
      <Provider store={store}>
        <CoreLoader message="Loading..." />
      </Provider>,
    );

    expect(container).toMatchSnapshot();
  });
});
