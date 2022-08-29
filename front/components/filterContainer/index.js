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
      <div>
        <button
          className={css.openButton}
          onClick={() => {
            setFilter("genero");
          }}
        >
          <H3>
            {" "}
            Géneros <ArrowDownIcon />{" "}
          </H3>{" "}
        </button>
        <button
          className={css.openButton}
          onClick={() => {
            setFilter("año");
          }}
        >
          <H3>
            Año <ArrowDownIcon />{" "}
          </H3>{" "}
        </button>
        <button
          className={css.openButton}
          onClick={() => {
            setFilter("puntuacion");
          }}
        >
          <H3>
            {" "}
            Puntuación <ArrowDownIcon />{" "}
          </H3>
        </button>
      </div>
      {show ? (
        <div>
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
                <FilterRating>Puntuación</FilterRating>
                <div className={css.closeButtonYear}>
                  <PrimaryButton
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    Close
                  </PrimaryButton>
                </div>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}
