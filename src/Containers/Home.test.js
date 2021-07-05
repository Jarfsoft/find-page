import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home render', () => {
  const mockStore = configureStore();
  let store;
  const state = {
    devices: [],
  };

  describe('Snapshot check', () => {
    it('should render Home section', () => {
      store = mockStore(state);
      const home = renderer
        .create(
          <Provider store={store}>
            <BrowserRouter>
              <Home />
            </BrowserRouter>
          </Provider>,
        ).toJSON();
      expect(home).toMatchSnapshot();
    });
  });
  describe('Home contains', () => {
    it('should have div', () => {
      const home = render(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>,
      );
      const div = home.container.querySelectorAll('div');
      expect(div).toHaveLength(1);
    });
  });
});
