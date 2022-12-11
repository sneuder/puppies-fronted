import useFilter from '../../../hooks/useFilter';
import { ButtonLink } from './style';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from '@mui/material';

export const FilterTemp = () => {
  const { temps } = useFilter();

  return (
    <FormControl>
      <InputLabel id="filter-by-temps">Temperaments</InputLabel>
      <Select
        labelId="filter-by-temps"
        label={'Temperaments'}
      >
        {temps.map(({ temperament, id }) => (
          <MenuItem
            key={id}
            value={temperament}
          >
            {temperament}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const FilterAlpha = () => {
  return (
    <FormControl>
      <InputLabel id="filter-by-alphabet">Order by name</InputLabel>
      <Select
        labelId="filter-by-alphabet"
        label={'alphabet'}
      >
        <MenuItem value={'A-Z'}>A - Z</MenuItem>
        <MenuItem value={'Z-A'}>Z - A</MenuItem>
      </Select>
    </FormControl>
  );
};

export const CreateDog = () => {
  return (
    <ButtonLink to="/createDog">
      <Button variant="contained">Create Dog</Button>
    </ButtonLink>
  );
};
