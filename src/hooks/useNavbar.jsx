import useMediaQuery from '@mui/material/useMediaQuery';

const useNavbar = () => {
  const toShowDesktop = useMediaQuery('(min-width:1024px)');
  const toShowMobile = useMediaQuery('(max-width:1023px)');

  return {
    toShowDesktop,
    toShowMobile,
  };
};

export default useNavbar;
