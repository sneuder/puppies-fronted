import useFilter from '../../../hooks/useFilter';
import useSearch from '../../../hooks/useSearch';

import MenuIcon from '@mui/icons-material/Menu';

import {
  styleButton,
  ButtonLink,
  styleInputs,
  styleMenuMobile,
  styleSearchButton,
  Form,
} from './style';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  TextField,
  Grid,
  Fab,
} from '@mui/material';

export const SearchDogs = () => {
  const { handleSearch, handleSubmit, register } = useSearch();
  return (
    <Form onSubmit={handleSubmit(handleSearch)}>
      <Grid
        container
        item
        xs={12}
        spacing={1}
      >
        <Grid
          item
          xs={9}
        >
          <TextField
            {...register('search')}
            placeholder="Search dog"
            size="small"
            sx={styleInputs}
          />
        </Grid>
        <Grid
          item
          xs={3}
        >
          <Button
            variant="contained"
            type="submit"
            sx={styleSearchButton}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
};

export const FilterTemp = () => {
  const { temps } = useFilter();

  return (
    <FormControl>
      <Select
        size="small"
        sx={styleInputs}
        defaultValue={'selected'}
      >
        <MenuItem
          value={'selected'}
          disabled
        >
          Filter by Temps
        </MenuItem>
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
        defaultValue={'selected'}
      >
        <MenuItem
          value={'selected'}
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

export const MenuMobile = ({ event }) => {
  return (
    <Fab
      sx={{ position: 'fixed', right: '16px', bottom: '16px' }}
      onClick={event}
    >
      <MenuIcon sx={styleMenuMobile} />;
    </Fab>
  );
};
