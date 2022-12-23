import '@testing-library/jest-dom';

import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../../src/redux/store';

import CardHome from '../../src/components/cardHome';
import App from '../../src/App';

describe('CardHome component', () => {
  it('should render CardHome component', () => {
    render(<CardHome />, { wrapper: MemoryRouter });
  });

  it('should have a link to /dogs', () => {
    const { container } = render(<CardHome />, { wrapper: MemoryRouter });
    const element = container.querySelector('a');
    expect(element).toHaveAttribute('href', '/dogs');
  });

  it('should able to take me to /dogs', async () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const element = container.querySelector('a');
    fireEvent.click(element);

    await waitFor(() => {
      const pathname = window.location.pathname;
      expect(pathname).toBe('/dogs');
    });
  });
});
