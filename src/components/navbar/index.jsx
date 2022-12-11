import useNavbar from '../../hooks/useNavbar';
import NavbarDesktop from './desktop';

const Navbar = () => {
  const showOptions = useNavbar();

  return <NavbarDesktop showOptions={showOptions} />;
};

export default Navbar;
