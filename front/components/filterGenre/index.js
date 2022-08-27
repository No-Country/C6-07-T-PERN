var _ = require("lodash");
import { H4 } from "../../ui/text";
import { PrimaryButton } from "../../ui/buttons";
import { getMedia, filterMedia, setFilterByGenre } from "../../store/actions";
import css from "../filterGenre/index.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function FilterGenre() {
  const dispatch = useDispatch();

  const genreFilters = [];

  function checkBoxClick(e) {
    const { name, checked } = e.target;
    if (checked) {
      genreFilters.push(name);
    } else {
      _.remove(genreFilters, (genre) => genre == name);
    }
  }

  function handleOnSubmit() {
    // console.log(genreFilters);
    dispatch(setFilterByGenre(genreFilters));
  }

  return (
    <div>
      <div className={css.filterBoxNew}>
        <H4>
          <label>
            <input
              className={css.checkBox}
              type="checkbox"
              name="Estrenos"
              onChange={checkBoxClick}
            />{" "}
            Estrenos
          </label>
          <label>
            <input type="checkbox" name="populares" onChange={checkBoxClick} />{" "}
            Populares
          </label>
        </H4>
      </div>
      <div className={css.filterGenreBoxA}>
        <H4>
          <label>
            <input
              type="checkbox"
              name="Acción"
              id={0}
              onChange={checkBoxClick}
            />{" "}
            Acción
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Animación"
              id={2}
              onChange={checkBoxClick}
            />{" "}
            Animación
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Aventura"
              id={1}
              onChange={checkBoxClick}
            />{" "}
            Aventura
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Bélica"
              id={17}
              onChange={checkBoxClick}
            />{" "}
            Bélica
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Ciencia ficción"
              id={14}
              onChange={checkBoxClick}
            />{" "}
            Ciencia Ficción
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Comedia"
              id={3}
              onChange={checkBoxClick}
            />{" "}
            Comedia
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Crimen"
              id={4}
              onChange={checkBoxClick}
            />{" "}
            Crimen
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Documental"
              id={5}
              onChange={checkBoxClick}
            />{" "}
            Documental
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Drama"
              id={6}
              onChange={checkBoxClick}
            />{" "}
            Drama
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Familia"
              id={7}
              onChange={checkBoxClick}
            />{" "}
            Familia
          </label>
        </H4>
      </div>
      <div className={css.filterGenreBoxB}>
        <H4>
          <label>
            <input
              type="checkbox"
              name="Fantasía"
              id={8}
              onChange={checkBoxClick}
            />{" "}
            Fantasia
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Historia"
              id={9}
              onChange={checkBoxClick}
            />{" "}
            Historia
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Misterio"
              id={12}
              onChange={checkBoxClick}
            />{" "}
            Misterio
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Música"
              id={11}
              onChange={checkBoxClick}
            />{" "}
            Música
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Película de TV"
              id={15}
              onChange={checkBoxClick}
            />{" "}
            Película de TV
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Romance"
              id={13}
              onChange={checkBoxClick}
            />{" "}
            Romance
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Suspenso"
              id={16}
              onChange={checkBoxClick}
            />{" "}
            Suspenso
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Terror"
              id={10}
              onChange={checkBoxClick}
            />{" "}
            Terror
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              name="Western"
              id={18}
              onChange={checkBoxClick}
            />{" "}
            Western
          </label>
        </H4>
        <div className={css.filterButton}>
          <PrimaryButton onClick={handleOnSubmit}>Filtrar</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
