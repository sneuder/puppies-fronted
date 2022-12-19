import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

const useNavbar = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const toShowDesktop = useMediaQuery('(min-width:1024px)');
  const toShowMobile = useMediaQuery('(max-width:1023px)');

  const handleDialog = () => {
    setOpenDialog(!openDialog);
    console.log('Esneier');
  };

  return {
    openDialog,
    handleDialog,
    toShowDesktop,
    toShowMobile,
  };
};

export default useNavbar;
