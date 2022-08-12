import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { isLogged } from "../../lib";
import { getMedia } from "../../store/actions";
import {
  ProfileIcon,
  ColorLogo,
  WatchListIcon,
  SearchIcon,
} from "../../ui/icons";
import Login from "../login";
import SearchBar from "../searchBar";

import css from "./index.module.css";

//Nano: Mapeo de los funciones dispatch de redux con las props del elemento
function mapDispatchToProps(dispatch) {
  return {
    getMedia: () => dispatch(getMedia()),
  };
}

function NavBar(props) {
  const [showLogContainer, setShowLogContainer] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleWatchList() {
    const res = await isLogged();
    if (res.logged == true) {
      router.push("/my-list");
    } else {
      setShowLogContainer(true);
    }
  }
  async function handleProfile() {
    const res = await isLogged();
    if (res.logged == true) {
      router.push("/profile");
    } else {
      setShowLogContainer(true);
    }
  }
  async function handleReload() {
    console.log("handle reload");
    dispatch(getMedia("trending"));
    router.push("/");
  }
  return (
    <nav className={css.navBar}>
      <div className={css.navBarItemsContainer}>
        <div className={css.navBarLogo} onClick={handleReload}>
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

export default connect(null, mapDispatchToProps)(NavBar);
