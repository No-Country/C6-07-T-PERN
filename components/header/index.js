import { useState } from "react";
import { ColorLogo } from "../../ui/icons";
import NavBar from "../nav-bar";
import SearchBar from "../searchBar";
import SearchBarContainer from "../searchBarContainer";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  //Denis: Funcion que sirve para mostrar u ocultar el sarchBar
  function toggleSearchBar() {
    setToggle(!toggle);
  }
  return (
    <header>
      <NavBar toggle={toggleSearchBar} />
      {
        //Denis: Si toggle es == true muestro el searchBar sino devuelvo null
        toggle ? <SearchBar toggle={toggleSearchBar} /> : null
      }
    </header>
  );
}
