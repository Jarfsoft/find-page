import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar render', () => {
  const mockStore = configureStore();
  let store;
  const state = {
    navbar: {
      page: 'Devices',
    },
    users: {
      userId: 0,
      name: '',
    },
  };

  describe('Snapshot check', () => {
    it('should render Navbar section', () => {
      store = mockStore(state);
      const navbar = renderer
        .create(
          <Provider store={store}>
            <BrowserRouter>
              <Navbar />
            </BrowserRouter>
          </Provider>,
        ).toJSON();
      expect(navbar).toMatchSnapshot();
    });
  });

  describe('Navbar contains', () => {
    it('should have a text that says Devices', () => {
      const navbar = render(
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>,
      );
      const header = navbar.container.querySelector('h1');
      expect(header.textContent).toBe('Devices');
    });
    it('should contain 2 link', () => {
      const navbar = render(
        <Provider store={store}>
          <BrowserRouter>
            <Navbar />
          </BrowserRouter>
        </Provider>,
      );
      const link = navbar.container.querySelectorAll('a');
      expect(link).toHaveLength(2);
    });
  });
});
