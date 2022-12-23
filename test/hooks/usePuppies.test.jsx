import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react';
// import { renderHook } from '@testing-library/react-hooks';
import usePuppies from '../../src/hooks/usePuppies';

import { Provider } from 'react-redux';
import store from '../../src/redux/store';

import { MemoryRouter } from 'react-router-dom';
import App from '../../src/App';

describe('usePuppies custome hook', () => {
  it('should have 10 dogs by default', async () => {
    const { result } = renderHook(() => usePuppies(), {
      wrapper: () => (
        <Provider store={store}>
          <MemoryRouter initialEntries={['/dogs']}>
            <App />
          </MemoryRouter>
        </Provider>
      ),
    });

    // await waitForNextUpdate();
    await waitFor(() => {
      console.log(result.current);
      // const dogsLength = result.current.rows.length;
      // expect(dogsLength).toHaveProperty('rows');
    });
  });
});
