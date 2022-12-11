import useMediaQuery from '@mui/material/useMediaQuery';
import { useState, useEffect } from 'react';

const useImageList = () => {
  const [listCols, setListCols] = useState(4);
  const mobiles = useMediaQuery('(max-width:420px)');
  const tablets = useMediaQuery('(max-width:820px)');
  const desktop = useMediaQuery('(max-width:1440px)');

  useEffect(() => {
    if (mobiles) return setListCols(1);
    if (tablets) return setListCols(2);
    if (desktop) return setListCols(3);
    setListCols(4);
  }, [mobiles, tablets, desktop]);

  return {
    listCols,
  };
};

export default useImageList;
