import useMediaQuery from '@mui/material/useMediaQuery';

const useNavbar = () => {
  const toShowDesktop = useMediaQuery('(min-width:1070px)');
  const toShowMobile = useMediaQuery('(max-width:1069px)');

  return {
    toShowDesktop,
    toShowMobile,
  };
};

export default useNavbar;
