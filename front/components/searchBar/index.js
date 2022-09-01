// Manu: Importacion de librerias
import { CloseIcon, ArrowRightIcon, SearchIcon } from "../../ui/icons";
import { connect, useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// Manu: Importacion de archivos propios
import css from "./index.module.css";
import { clearMedia, getMedia } from "../../store/actions";

//Nano: Mapeo de los estados de redux con las props del elemento
function mapStateToProps(state) {
  return {
    media: state.mediaReducer,
  };
}

//Nano: Mapeo de los funciones dispatch de redux con las props del elemento
function mapDispatchToProps(dispatch) {
  return {
    getMedia: () => dispatch(getMedia()),
  };
}

// Manu: exportacion del componente SearchBar
function SearchBar(props) {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  // Nano: Manejo del submit
  function handleOnSubmit(event) {
    event.preventDefault();
    dispatch(clearMedia());
    dispatch(getMedia("search", searchValue));
  }
  // Nano: Manejo del cambio en la searchbar
  function handleOnChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <div
      className={
        props.type == "outlined"
          ? css.searchBarContainerOulined
          : css.searchBarContainer
      }
    >
      {props.type == "outlined" ? (
        <form onSubmit={handleOnSubmit} className={css.searchBarForm}>
          <div className={css.containerSearchBar}>
            <input
              className={css.searchBarInputDesktop}
              type="text"
              placeholder="Busca una película o serie"
              onChange={handleOnChange}
            />
            <button type="submit" className={css.searchBarButtonDesktop}>
              <SearchIcon />
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleOnSubmit} className={css.searchBarForm}>
          <div className={css.searchBarIcons} onClick={props.toggle}>
            <CloseIcon />
          </div>
          <input
            className={css.searchBarInput}
            type="text"
            placeholder="Buscar..."
            onChange={handleOnChange}
          />
          <button type="submit" className={css.searchBarButton}>
            <div className={css.searchBarIcons}>
              <ArrowRightIcon />
            </div>
          </button>
        </form>
      )}
    </div>
  );
}

//Nano: Exportación por defecto de la etiqueta para llamos externos
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
