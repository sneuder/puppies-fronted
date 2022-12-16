import { Button, TextField, Select, MenuItem, Chip, Grid } from '@mui/material';

export const InputForm = ({ labelProp, event, attr, subAttr }) => {
  return (
    <TextField
      fullWidth
      size="small"
      variant="outlined"
      label={labelProp}
      onChange={(e) => event(e, attr, subAttr)}
    />
  );
};

export const InputFormNumber = ({ labelProp, event, attr, subAttr }) => {
  return (
    <TextField
      type={'number'}
      fullWidth
      size="small"
      variant="outlined"
      label={labelProp}
      onChange={(e) => event(e, attr, subAttr)}
    />
  );
};

export const SelectForm = ({ defaultItem, items, event, attr }) => {
  return (
    <Select
      fullWidth
      size={'small'}
      onChange={(e) => event(e, attr)}
      defaultValue={defaultItem}
    >
      <MenuItem
        value={defaultItem}
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

export const ButtonForm = ({ buttonContent, event }) => {
  return (
    <Button
      fullWidth
      size="small"
      variant="contained"
      sx={{ height: '40px', minWidth: 'auto' }}
      onClick={event}
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
