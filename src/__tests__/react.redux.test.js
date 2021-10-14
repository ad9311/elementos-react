import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store/storeSetup';
import loadReducer from '../store/elements/loadReducer';
import fetchAPI from '../api/fetchAPI';
import App from '../App';

describe('Load Table reducer', () => {
  test('initial state', () => {
    expect(loadReducer(undefined, {})).toEqual(
      {
        status: 'default',
        elements: [],
      },
    );
  });

  test('Fetch API', async () => {
    const elements = await fetchAPI();
    expect(elements[0].name).toEqual('Hydrogen');
  });

  test('App', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(await screen.findByText('Elementos')).toMatchSnapshot();
  });

  it('Home', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(await screen.findByText('Carbon')).toMatchSnapshot();
  });

  it('Details page for Carbon', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    fireEvent.click(await screen.findByText('Carbon'));
    expect(screen.findByText('4300 K')).toMatchSnapshot();
  });
});
