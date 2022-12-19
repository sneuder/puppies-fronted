import { useNavigate } from 'react-router';

import { Fab } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Navigate = ({ url }) => {
  const nav = useNavigate();

  return (
    <Fab
      size={'medium'}
      sx={{
        position: 'absolute',
        top: 16,
        left: 16,
      }}
      onClick={() => nav(url)}
    >
      <ArrowBackIcon />
    </Fab>
  );
};

export default Navigate;
