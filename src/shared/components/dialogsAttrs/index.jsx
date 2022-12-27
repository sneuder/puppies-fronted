import {
  Button,
  Card,
  CardContent,
  Dialog,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const DialogsAttrs = ({ dialogtools, postattrs }) => {
  const { handleAttrsState, attrsState, handleSubmit, register, attrName } =
    dialogtools;

  return (
    <Dialog
      onClose={handleAttrsState}
      open={attrsState}
    >
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit((data) => postattrs(data, attrName))}>
            <Grid
              container
              direction={'column'}
            >
              <TextField
                size="small"
                {...register('name', { required: true })}
              />
              <Typography>Error</Typography>
              <Button
                variant="contained"
                type="submt"
              >
                Create
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default DialogsAttrs;
