import '@testing-library/jest-dom';
import reqAxios from '../../../src/utils/axios';

describe('HTTP request axios for dogs', () => {
  it('should have the properties rows and count', async () => {
    const queries = {
      page: 1,
    };

    const data = await reqAxios('get', '/dogs/allDogs', {}, queries);
    expect(data).toHaveProperty('count');
    expect(data).toHaveProperty('rows');
  });

  it('should get 10 dogs by page', async () => {
    const queries = {
      page: 1,
    };

    const data = await reqAxios('get', '/dogs/allDogs', {}, queries);
    expect(data.rows).toHaveLength(10);
  });

  it('should get one dog', async () => {
    const queries = {
      page: 1,
    };

    const data = await reqAxios('get', '/dogs/allDogs', {}, queries);

    const dogId = data.rows[0].id;
    const dog = await reqAxios('get', `/dogs/${dogId}`, {}, queries);

    expect(dog.id).toEqual(dogId);
  });

  it('should search dogs by name', async () => {
    const queries = {
      page: 1,
      search: 'american',
    };

    const data = await reqAxios('get', '/dogs/allDogs', {}, queries);
    data.rows.forEach((dog) => expect(dog.name).toMatch(/american/i));
  });

  it('should filter by temp', async () => {
    const queries = {
      page: 1,
      filter: 'Active',
    };

    const data = await reqAxios('get', '/dogs/allDogs', {}, queries);
    data.rows.forEach((dog) => {
      expect(dog.temps).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ temperament: queries.filter }),
        ])
      );
    });
  });
});
