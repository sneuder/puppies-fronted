import { Button, TextField, Select, MenuItem, Chip, Grid } from '@mui/material';

export const InputForm = ({ labelProp }) => {
  return (
    <TextField
      fullWidth
      size="small"
      variant="outlined"
      label={labelProp}
    />
  );
};

export const SelectForm = ({ defaultItem, items, event, attr }) => {
  return (
    <Select
      fullWidth
      size={'small'}
      onChange={(e) => event(e, attr)}
    >
      <MenuItem
        value={defaultItem}
        defaultValue={defaultItem}
        selected
        disabled
      >
        {defaultItem}
      </MenuItem>
      {items?.map((item) => (
        <MenuItem
          key={item.id}
          id={item.id}
          value={item[attr]}
        >
          {item[attr]}
        </MenuItem>
      ))}
    </Select>
  );
};

export const ButtonForm = ({ buttonContent }) => {
  return (
    <Button
      fullWidth
      size="small"
      variant="contained"
      sx={{ height: '40px', minWidth: 'auto' }}
    >
      {buttonContent}
    </Button>
  );
};

export const SelectedElements = ({ elements, deletelement, attr }) => {
  if (!elements) return <></>;

  return (
    <Grid
      container
      item
      spacing={0.7}
    >
      {elements.map((element) => (
        <Grid item>
          <Chip
            size="small"
            label={element}
            onDelete={() => deletelement(element, attr)}
          />
        </Grid>
      ))}
    </Grid>
  );
};
