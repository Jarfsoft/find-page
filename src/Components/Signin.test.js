import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Signin from './Signin';

describe('Navbar render', () => {
  const mockStore = configureStore();
  let store;
  const state = { 
    users: {
      userId: 0,
      name: '',
    },
  };

  describe('Snapshot check', () => {
    it('should render Signin component', () => {
      store = mockStore(state);
      const signin = renderer
        .create(
          <Provider store={store}>
            <BrowserRouter>
              <Signin />
            </BrowserRouter>
          </Provider>
        ).toJSON();
      expect(signin).toMatchSnapshot();
    });
  });
  it('should containt a form', () => {
    store = mockStore(state);
    const signin = render(
      <BrowserRouter>
        <Provider store={store}>
          <Signin />
        </Provider>
      </BrowserRouter>,
    );
    const form = signin.container.querySelectorAll('form');
    expect(form).toHaveLength(1);
  });
});