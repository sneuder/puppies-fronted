import useFilter from '../../hooks/useFilter';
import useNavbar from '../../hooks/useNavbar';

import NavbarDesktop from './desktop';
import Mobile from './mobile';

const Navbar = () => {
  const showOptions = useNavbar();
  const { handleOrder } = useFilter();

  return (
    <>
      <NavbarDesktop
        showOptions={showOptions}
        handleOrder={handleOrder}
      />
      <Mobile
        handleDialog={showOptions.handleDialog}
        openDialog={showOptions.openDialog}
      />
    </>
  );
};

export default Navbar;
