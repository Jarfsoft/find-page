import React from 'react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import Device from './Device';

describe('Navbar render', () => {
  const mockStore = configureStore();
  let store;
  const state = {
    devices: [],
  };

  describe('Snapshot check', () => {
    it('should render Device component', () => {
      store = mockStore(state);
      const device = renderer
        .create(
          <Provider store={store}>
            <BrowserRouter>
              <Device
                imageUrl="image"
                id="id"
                name="name"
                price="price"
              />
            </BrowserRouter>
          </Provider>,
        ).toJSON();
      expect(device).toMatchSnapshot();
    });
  });
  it('should containt an image', () => {
    store = mockStore(state);
    const device = render(
      <BrowserRouter>
        <Provider store={store}>
          <Device
            imageUrl="image"
            id="id"
            name="name"
            price="price"
          />
        </Provider>
      </BrowserRouter>,
    );
    const img = device.container.querySelectorAll('img');
    expect(img).toHaveLength(1);
  });
});
