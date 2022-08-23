import {
  ProfileIcon,
  ColorLogo,
  WatchListIcon,
  SearchIcon,
} from "../../ui/icons";
import css from "./index.module.css";
export default function NavBar(props) {
  return (
    <nav className={css.navBar}>
      <div className={css.navBarItemsContainer}>
        <div className={css.navBarLogo}>
          <ColorLogo></ColorLogo>
        </div>
        <ul className={css.navMenu}>
          <li className={css.navMenuItem} onClick={props.toggle}>
            <SearchIcon></SearchIcon>
          </li>
          <li className={css.navMenuItem}>
            <WatchListIcon></WatchListIcon>
          </li>
          <li className={css.navMenuItem}>
            <ProfileIcon></ProfileIcon>
          </li>
        </ul>
      </div>
    </nav>
  );
}
