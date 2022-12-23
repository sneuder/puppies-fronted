import '@testing-library/jest-dom';
import { waitFor, renderHook } from '@testing-library/react';
import useImageList from '../../src/hooks/useImageList';

describe('useImageList custom hook', () => {
  it('should 4 listCols by default', async () => {
    const { result } = renderHook(() => useImageList());
    await waitFor(() => {
      expect(result.current.listCols).toBe(4);
    });
  });
});
