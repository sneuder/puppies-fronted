import '@testing-library/jest-dom';
import reqAxios from '../../../src/utils/axios';

describe('HTTP request axios for temps', () => {
  it('should get all temps', async () => {
    const data = await reqAxios('get', '/temps/allTemps');
    expect(data).not.toHaveLength(0);
    expect(data.length).not.toBe(undefined);
  });

  it('should get one temp', async () => {
    const data = await reqAxios('get', '/temps/allTemps');
    const tempId = data[0].id;

    const temp = await reqAxios('get', `/temps/${tempId}`);
    expect(temp.id).toEqual(tempId);
  });
});
