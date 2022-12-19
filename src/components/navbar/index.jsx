import useNavbar from '../../hooks/useNavbar';

import NavbarDesktop from './desktop';
import Mobile from './mobile';

const Navbar = () => {
  const showOptions = useNavbar();

  return (
    <>
      <NavbarDesktop showOptions={showOptions} />
      <Mobile
        handleDialog={showOptions.handleDialog}
        openDialog={showOptions.openDialog}
      />
    </>
  );
};

export default Navbar;
