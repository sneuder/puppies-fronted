import '@testing-library/jest-dom';
import reqAxios from '../../src/utils/axios';

describe('HTTP request with axios', () => {
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
    expect(data.rows.length).toBe(10);
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

  it('should get all breeds', async () => {
    const data = await reqAxios('get', '/breeds/allBreeds');
    expect(data.length).not.toBe(0);
    expect(data.length).not.toBe(undefined);
  });

  it('should get one breed', async () => {
    const data = await reqAxios('get', '/breeds/allBreeds');
    const breedId = data[0].id;

    const breed = await reqAxios('get', `/breeds/${breedId}`);
    expect(breed.id).toEqual(breedId);
  });

  it('should get all temps', async () => {
    const data = await reqAxios('get', '/temps/allTemps');
    expect(data.length).not.toBe(0);
    expect(data.length).not.toBe(undefined);
  });

  it('should get one temp', async () => {
    const data = await reqAxios('get', '/temps/allTemps');
    const tempId = data[0].id;

    const temp = await reqAxios('get', `/temps/${tempId}`);
    expect(temp.id).toEqual(tempId);
  });

  it('should get all countries', async () => {
    const data = await reqAxios('get', '/countries/allCountries');
    expect(data.length).not.toBe(0);
    expect(data.length).not.toBe(undefined);
  });

  it('should get one country', async () => {
    const data = await reqAxios('get', '/countries/allCountries');
    const countryId = data[0].id;

    const country = await reqAxios('get', `/countries/${countryId}`);
    expect(country.id).toEqual(countryId);
  });
});
