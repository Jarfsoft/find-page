import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Favorites from './Favorites';

describe('Favorites render', () => {
  const mockStore = configureStore();
  let store;
  const state = { 
    devices: [],
    favorites: [],
  };

  describe('Snapshot check', () => {
    it('should render Favorites section', () => {
      store = mockStore(state);
      const favorites = renderer
        .create(
          <Provider store={store}>
            <BrowserRouter>
              <Favorites />
            </BrowserRouter>
          </Provider>
        ).toJSON();
      expect(favorites).toMatchSnapshot();
    });
  });
  describe('Favorites contains', () => {
    it('should have div', () => {
      const favorites = render(
        <Provider store={store}>
          <BrowserRouter>
            <Favorites />
          </BrowserRouter>
        </Provider>
      );
      const div = favorites.container.querySelectorAll('div');
      expect(div).toHaveLength(1);
    });
  });
});