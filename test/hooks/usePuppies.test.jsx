import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
// import { renderHook } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import usePuppies from '../../src/hooks/usePuppies';

import { Provider } from 'react-redux';
import store from '../../src/redux/store';

import { MemoryRouter } from 'react-router-dom';

describe('usePuppies custome hook', () => {
  let dogs;

  it('should have 10 dogs by default', async () => {
    const { waitForNextUpdate, result } = renderHook(() => usePuppies(), {
      wrapper: ({ children }) => (
        <Provider store={store}>
          <MemoryRouter initialEntries={['/dogs']}>{children}</MemoryRouter>
        </Provider>
      ),
    });

    await waitForNextUpdate();
    dogs = result.current.dogs;
    expect(dogs.length).toBe(10);
  });

  it('should have enough properties', () => {
    expect(dogs[0]).toHaveProperty('name');
    expect(dogs[0]).toHaveProperty('lifespan');
    expect(dogs[0]).toHaveProperty('temps');
  });
});
