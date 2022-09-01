import { useState } from "react";
import FilterGenre from "../filterGenre";
import YearOrder from "../yearOrder";
import FilterRating from "../filterRating";
import { ArrowDownIcon, ArrowUpIcon } from "../../ui/icons";
import css from "../filterContainer/index.module.css";
import { H3 } from "../../ui/text";
import { PrimaryButton } from "../../ui/buttons";

export default function FilterContainer() {
  const [showFilter, setShowFilter] = useState();
  const [show, setShow] = useState(false);
  // const [toggleGenre, setToggleGenre] = useState(false);
  // const [toggleYear, setToggleYear] = useState(false);
  // const [toggleRating, setToggleRating] = useState(false);
  function setFilter(filter) {
    setShow(true);
    const actions = {
      genero: () => {
        setShowFilter("genero");
        <ArrowUpIcon />;
      },
      año: () => {
        setShowFilter("año");
      },
      puntuacion: () => {
        setShowFilter("puntuacion");
      },
    };
    const action = actions[filter];
    action();
  }

  return (
    <div>
      <div className={css.buttonsContainer}>
        <button
          className={css.openButton}
          onClick={() => {
            setFilter("genero");
          }}
        >
          <H3>
            Géneros
            <ArrowUpIcon
              className={
                show && showFilter == "genero"
                  ? css.headerArrowDown
                  : css.headerArrowUp
              }
            />
          </H3>
        </button>
        <button
          className={css.openButton}
          onClick={() => {
            setFilter("año");
          }}
        >
          <H3>
            Año
            <ArrowUpIcon
              className={
                show && showFilter == "año"
                  ? css.headerArrowDown
                  : css.headerArrowUp
              }
            />
          </H3>
        </button>
        <button
          className={css.openButton}
          onClick={() => {
            setFilter("puntuacion");
          }}
        >
          <H3>
            Puntuación
            <ArrowUpIcon
              className={
                show && showFilter == "puntuacion"
                  ? css.headerArrowDown
                  : css.headerArrowUp
              }
            />
          </H3>
        </button>
      </div>
      {show ? (
        <div className={css.filtersContainer}>
          <div>
            {showFilter == "genero" ? (
              <>
                <FilterGenre click={setShow}>
                  <ArrowUpIcon /> Géneros
                </FilterGenre>
              </>
            ) : showFilter == "año" ? (
              <>
                <YearOrder click={setShow}>Año</YearOrder>
              </>
            ) : showFilter == "puntuacion" ? (
              <>
                <FilterRating click={setShow}>Puntuación</FilterRating>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
