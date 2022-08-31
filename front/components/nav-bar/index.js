import { useRouter } from "next/router";
import { useState } from "react";
import {
  ProfileIcon,
  ColorLogo,
  WatchListIcon,
  SearchIcon,
} from "../../ui/icons";
import Login from "../login";
import SearchBar from "../searchBar";

import css from "./index.module.css";
export default function NavBar(props) {
  const [showLogContainer, setShowLogContainer] = useState(false);
  const router = useRouter();
  const logged = false;
  function handleWatchList() {
    if (logged) {
      router.push("/watch-list");
    } else {
      setShowLogContainer(true);
    }
  }
  function handleProfile() {
    if (logged) {
      router.push("/profile");
    } else {
      setShowLogContainer(true);
    }
  }
  return (
    <nav className={css.navBar}>
      <div className={css.navBarItemsContainer}>
        <div className={css.navBarLogo}>
          <ColorLogo></ColorLogo>
        </div>
        <div className={css.searchBar}>
          <SearchBar type="outlined" />
        </div>
        <ul className={css.navMenuMobile}>
          <li className={css.navMenuItem} onClick={props.toggle}>
            <SearchIcon></SearchIcon>
          </li>
          <li className={css.navMenuItem} onClick={handleWatchList}>
            <WatchListIcon></WatchListIcon>
          </li>
          <li className={css.navMenuItem} onClick={handleProfile}>
            <ProfileIcon></ProfileIcon>
          </li>
        </ul>
        <ul className={css.navMenuMedium}>
          <li className={css.navMenuItem} onClick={props.toggle}>
            Buscar
            <SearchIcon></SearchIcon>
          </li>
          <li className={css.navMenuItem} onClick={handleWatchList}>
            Mi Lista<WatchListIcon></WatchListIcon>
          </li>
          <li className={css.navMenuItem} onClick={handleProfile}>
            Mi Perfil<ProfileIcon></ProfileIcon>
          </li>
        </ul>
        <div className={css.navLarge}>
          <ul className={css.navMenuLarge}>
            <li className={css.navMenuItem} onClick={handleWatchList}>
              Mi Lista<WatchListIcon></WatchListIcon>
            </li>
            <li className={css.navMenuItem} onClick={handleProfile}>
              Mi Perfil<ProfileIcon></ProfileIcon>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className={css.navBarItemsContainerMedium}>
        <div className={css.navBarLogo}>
          <ColorLogo></ColorLogo>
        </div>
        
      </div> */}
      {showLogContainer ? (
        <div>{<Login close={setShowLogContainer} />}</div>
      ) : null}
    </nav>
  );
}
