import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../../src/redux/store';
import { MemoryRouter } from 'react-router-dom';

import App from '../../src/App';

describe('cardDogs component', () => {
  let appComponent;

  beforeEach(() => {
    appComponent = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/dogs']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  });

  it('should be in /dogs', () => {
    const pathname = window.location.pathname;
    expect(pathname).toBe('/dogs');
  });

  it('should have max of 10 skeletons', () => {
    const { container } = appComponent;
    const elementsLength = container.querySelectorAll('li').length;
    expect(elementsLength).toBe(10);
  });

  it('should have max of 10 dogs', async () => {
    const { container } = appComponent;
    await waitFor(() => {
      const elementsLength = container.querySelectorAll('img').length;
      expect(elementsLength).toBe(10);
    });
  });
});
