import { Button, TextField, Select, MenuItem } from '@mui/material';

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

export const SelectForm = ({ defaultItem, items }) => {
  return (
    <Select
      fullWidth
      size={'small'}
    >
      <MenuItem
        value={defaultItem}
        defaultValue={defaultItem}
        selected
        disabled
      >
        {defaultItem}
      </MenuItem>
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
