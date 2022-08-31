import { useEffect, useState } from "react";
import { ColorLogo } from "../../ui/icons";
import NavBar from "../nav-bar";
import SearchBar from "../searchBar";
import SearchBarContainer from "../searchBarContainer";
import PlatformFilters from "../platform-filters";
import FilterContainer from "../filterContainer";
import css from "./index.module.css";
import { SignUp } from "../login-forms";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  //Denis: Funcion que sirve para mostrar u ocultar el sarchBar
  function toggleSearchBar() {
    setToggle(!toggle);
  }

  return (
    <header className={css.header}>
      <NavBar toggle={toggleSearchBar} />
      {
        //Denis: Si toggle es == true muestro el searchBar sino devuelvo null
        toggle ? <SearchBar toggle={toggleSearchBar} /> : null
      }
      <div className={css.headerFiltersContainer}>
        <PlatformFilters></PlatformFilters>
        <FilterContainer />
      </div>
    </header>
  );
}
