import '@testing-library/jest-dom';
import reqAxios from '../../../src/utils/axios';

describe('HTTP request axios for countries', () => {
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
