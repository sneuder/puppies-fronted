import useFilter from '../../../hooks/useFilter';
import MenuIcon from '@mui/icons-material/Menu';
import { styleButton, ButtonLink, styleInputs, styleMenuMobile } from './style';

import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  TextField,
} from '@mui/material';

export const SearchDogs = () => {
  return (
    <TextField
      fullWidth
      placeholder="Search dog"
      size="small"
      sx={styleInputs}
    />
  );
};

export const FilterTemp = () => {
  const { temps } = useFilter();

  return (
    <FormControl>
      <Select
        size="small"
        sx={styleInputs}
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
      <Select
        size="small"
        sx={styleInputs}
      >
        <MenuItem
          value={''}
          disabled
        >
          Order by name
        </MenuItem>
        <MenuItem value={'A-Z'}>A - Z</MenuItem>
        <MenuItem value={'Z-A'}>Z - A</MenuItem>
      </Select>
    </FormControl>
  );
};

export const CreateDog = () => {
  return (
    <ButtonLink to="/createDog">
      <Button
        variant="contained"
        sx={styleButton}
        size="small"
      >
        Create Dog
      </Button>
    </ButtonLink>
  );
};

export const MenuMobile = () => {
  return <MenuIcon sx={styleMenuMobile} />;
};
