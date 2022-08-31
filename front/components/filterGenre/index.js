var _ = require("lodash");
import { H4 } from "../../ui/text";
import {
  BorderlessButton,
  OutlinedButton,
  PrimaryButton,
} from "../../ui/buttons";
import { getMedia, filterMedia, setFilterByGenre } from "../../store/actions";
import css from "../filterGenre/index.module.css";
import { useDispatch, connect, useSelector } from "react-redux";
import { useState } from "react";
import { Checkbox } from "../../ui/input";

function mapStateToProps(state) {
  return {
    media: state.filterReducer,
  };
}

function FilterGenre(props) {
  const { filter } = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  const genreFilters = filter.genres;

  function checkBoxClick(e) {
    const { name, checked } = e.target;

    if (checked) {
      genreFilters.push(name);
    } else {
      _.remove(genreFilters, (genre) => genre == name);
    }
  }

  function handleOnSubmit() {
    dispatch(setFilterByGenre(genreFilters));
    props.click(false);
  }

  return (
    <div className={css.filterGenreContainer}>
      <div className={css.containerFilterBox}>
        <div className={css.filterGenreBoxA}>
          <Checkbox
            name="Acción"
            label="Acción"
            id={0}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Acción")}
          />
          <Checkbox
            name="Aventura"
            label="Aventura"
            id={1}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Aventura")}
          />
          <Checkbox
            name="Animación"
            label="Animación"
            id={2}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Animación")}
          />
          <Checkbox
            name="Comedia"
            label="Comedia"
            id={3}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Comedia")}
          />
          <Checkbox
            name="Crimen"
            label="Crimen"
            id={4}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Crimen")}
          />
          <Checkbox
            name="Documental"
            label="Documental"
            id={5}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Documental")}
          />
          <Checkbox
            name="Drama"
            label="Drama"
            id={6}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Drama")}
          />
          <Checkbox
            name="Familia"
            label="Familia"
            id={7}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Familia")}
          />
          <Checkbox
            name="Fantasia"
            label="Fantasia"
            id={8}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Fantasia")}
          />
          <Checkbox
            name="Historia"
            label="Historia"
            id={9}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Historia")}
          />
        </div>
        <div className={css.filterGenreBoxB}>
          <Checkbox
            name="Terror"
            label="Terror"
            id={10}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Terror")}
          />
          <Checkbox
            name="Música"
            label="Música"
            id={11}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Música")}
          />
          <Checkbox
            name="Misterio"
            label="Misterio"
            id={12}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Misterio")}
          />
          <Checkbox
            name="Romance"
            label="Romance"
            id={13}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Romance")}
          />
          <Checkbox
            name="Ciencia Ficción"
            label="Ciencia Ficción"
            id={14}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Ciencia Ficción")}
          />
          <Checkbox
            name="Película de TV"
            label="Película de TV"
            id={15}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Película de TV")}
          />
          <Checkbox
            name="Suspenso"
            label="Suspenso"
            id={16}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Suspenso")}
          />
          <Checkbox
            name="Bélica"
            label="Bélica"
            id={17}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Bélica")}
          />
          <Checkbox
            name="Western"
            label="Western"
            id={18}
            onChange={checkBoxClick}
            checked={filter.genres.includes("Western")}
          />
        </div>
      </div>
      <div className={css.filterButton} style={{ border: "none" }}>
        <BorderlessButton
          onClick={() => {
            props.click(false);
          }}
        >
          Cerrar
        </BorderlessButton>
        <OutlinedButton onClick={handleOnSubmit}>Filtrar</OutlinedButton>
      </div>
    </div>
  );
}
export default connect(mapStateToProps)(FilterGenre);
