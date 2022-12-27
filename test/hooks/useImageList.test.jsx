import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react';
import useImageList from '../../src/hooks/useImageList';

describe('useImageList custom hook', () => {
  it('should have 4 listCols by default', async () => {
    const { result } = renderHook(() => useImageList());
    expect(result.current.listCols).toBe(4);
  });
});
