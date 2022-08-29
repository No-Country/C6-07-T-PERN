var _ = require("lodash");
import { H4 } from "../../ui/text";
import {
  BorderlessButton,
  OutlinedButton,
  PrimaryButton,
} from "../../ui/buttons";
import { getMedia, filterMedia, setFilterByGenre } from "../../store/actions";
import css from "../filterGenre/index.module.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Checkbox } from "../../ui/input";

export default function FilterGenre(props) {
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
    dispatch(setFilterByGenre(genreFilters));
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
          />
          <Checkbox
            name="Aventura"
            label="Aventura"
            id={1}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Animación"
            label="Animación"
            id={2}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Comedia"
            label="Comedia"
            id={3}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Crimen"
            label="Crimen"
            id={4}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Documental"
            label="Documental"
            id={5}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Drama"
            label="Drama"
            id={6}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Familia"
            label="Familia"
            id={7}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Fantasia"
            label="Fantasia"
            id={8}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Historia"
            label="Historia"
            id={9}
            onChange={checkBoxClick}
          />
        </div>
        <div className={css.filterGenreBoxB}>
          <Checkbox
            name="Terror"
            label="Terror"
            id={10}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Música"
            label="Música"
            id={11}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Misterio"
            label="Misterio"
            id={12}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Romance"
            label="Romance"
            id={13}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Ciencia Ficción"
            label="Ciencia Ficción"
            id={14}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Película de TV"
            label="Película de TV"
            id={15}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Suspenso"
            label="Suspenso"
            id={16}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Bélica"
            label="Bélica"
            id={17}
            onChange={checkBoxClick}
          />
          <Checkbox
            name="Western"
            label="Western"
            id={18}
            onChange={checkBoxClick}
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
