import '@testing-library/jest-dom';

import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../../src/redux/store';

import App from '../../src/App';

describe('CardHome component', () => {
  let appComponent;

  beforeEach(() => {
    appComponent = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should have a link to /dogs', () => {
    const { container } = appComponent;
    const element = container.querySelector('a');
    expect(element).toHaveAttribute('href', '/dogs');
  });

  it('should able to take me to /dogs', async () => {
    const { container } = appComponent;
    const element = container.querySelector('a');
    fireEvent.click(element);

    await waitFor(() => {
      const pathname = window.location.pathname;
      expect(pathname).toBe('/dogs');
    });
  });
});
