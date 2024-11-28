import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import styles from "./Navbar.module.css";
import LinkButton from "./LinkButton";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <LinkButton to="/" icon={<HomeIcon />} text="Home" />
      <LinkButton to="/recipes" icon={<MenuBookIcon />} text="Recipes" />
      <LinkButton to="/recipes/add" icon={<AddCircleOutlineOutlinedIcon />} text="Add Recipes" />
      <LinkButton to="/your-recipes" icon={<PersonOutlineIcon />} text="Yours Recipes" />
    </nav>
  );
};

export default Navbar;