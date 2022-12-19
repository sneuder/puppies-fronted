import { Fab } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import usePage from '../../hooks/usePage';

const Navigate = ({ url }) => {
  const { handleNavigation } = usePage();
  return (
    <Fab
      size={'medium'}
      sx={{
        position: 'absolute',
        top: 16,
        left: 16,
      }}
      onClick={() => handleNavigation(url)}
    >
      <ArrowBackIcon />
    </Fab>
  );
};

export default Navigate;
