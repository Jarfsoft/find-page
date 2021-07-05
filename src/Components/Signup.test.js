import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Signup from './Signup';

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
      const signup = renderer
        .create(
          <Provider store={store}>
            <BrowserRouter>
              <Signup />
            </BrowserRouter>
          </Provider>
        ).toJSON();
      expect(signup).toMatchSnapshot();
    });
  });
  it('should containt a form', () => {
    store = mockStore(state);
    const signup = render(
      <BrowserRouter>
        <Provider store={store}>
          <Signup />
        </Provider>
      </BrowserRouter>,
    );
    const form = signup.container.querySelectorAll('form');
    expect(form).toHaveLength(1);
  });
});