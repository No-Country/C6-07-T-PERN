// Manu: Importacion de librerias
import { CloseIcon, ArrowRightIcon } from "../../ui/icons";

// Manu: Importacion de archivos propios
import css from "./index.module.css";

// Manu: exportacion del componente SearchBar
export default function SearchBar(props) {
  return (
    <div className={css.searchBarContainer}>
      <form onSubmit={props.submit} className={css.searchBarForm}>
        <div className={css.searchBarIcons} onClick={props.toggle}>
          <CloseIcon />
        </div>
        <input className={css.searchBarInput} type="text" placeholder="" />
        <div className={css.searchBarIcons}>
          <ArrowRightIcon />
        </div>
      </form>
    </div>
  );
}
