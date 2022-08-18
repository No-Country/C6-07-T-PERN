import { ProfileIcon, ColorLogo, SaveIcon, SearchIcon } from "../../ui/icons";
import css from "./index.module.css";
export default function NavBar() {
  return (
    <nav className={css.navBar}>
      <div className={css.navBarItemsContainer}>
        <div className={css.navBarLogo}>
          <ColorLogo></ColorLogo>
        </div>
        <ul className={css.navMenu}>
          <li className={css.navMenuItem}>
            <SearchIcon></SearchIcon>
          </li>
          <li className={css.navMenuItem}>
            <SaveIcon></SaveIcon>
          </li>
          <li className={css.navMenuItem}>
            <ProfileIcon></ProfileIcon>
          </li>
        </ul>
      </div>
    </nav>
  );
}
