import useTemps from '../../../hooks/useTemps';
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
  const { handleSearch, handleSubmit, register, defaultSearch } = useSearch();
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
            defaultValue={defaultSearch}
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
  const { temps, selectedTemp } = useTemps();
  const { handleFilter } = useFilter();

  return (
    <FormControl>
      <Select
        size="small"
        sx={styleInputs}
        defaultValue={'selected'}
        onChange={handleFilter}
      >
        <MenuItem
          value={'selected'}
          disabled
        >
          Filter by Temps
        </MenuItem>
        {temps.map(({ name, id }) => (
          <MenuItem
            key={id}
            value={name.toLowerCase()}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const FilterAlpha = () => {
  const { handleOrder, selectedOrder } = useFilter();

  return (
    <FormControl>
      <Select
        size="small"
        sx={styleInputs}
        defaultValue={'selected'}
        onChange={handleOrder}
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
      color={'primary'}
    >
      <MenuIcon sx={styleMenuMobile} />
    </Fab>
  );
};
