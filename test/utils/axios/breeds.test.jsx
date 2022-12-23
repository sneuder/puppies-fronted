import '@testing-library/jest-dom';
import reqAxios from '../../../src/utils/axios';

describe('HTTP request axios for breeds', () => {
  it('should get all breeds', async () => {
    const data = await reqAxios('get', '/breeds/allBreeds');
    expect(data).not.toHaveLength(0);
    expect(data.length).not.toBe(undefined);
  });

  it('should get one breed', async () => {
    const data = await reqAxios('get', '/breeds/allBreeds');
    const breedId = data[0].id;

    const breed = await reqAxios('get', `/breeds/${breedId}`);
    expect(breed.id).toEqual(breedId);
  });
});
