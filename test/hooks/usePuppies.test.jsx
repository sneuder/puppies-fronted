import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
// import { renderHook } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import usePuppies from '../../src/hooks/usePuppies';

import { Provider } from 'react-redux';
import store from '../../src/redux/store';

import { MemoryRouter } from 'react-router-dom';

describe('usePuppies custome hook', () => {
  it('should have 10 dogs by default', async () => {
    const { waitForNextUpdate, result } = renderHook(() => usePuppies(), {
      wrapper: ({ children }) => (
        <Provider store={store}>
          <MemoryRouter initialEntries={['/dogs']}>{children}</MemoryRouter>
        </Provider>
      ),
    });

    await waitForNextUpdate();
    expect(result.current.dogs.length).toBe(10);
  });
});
