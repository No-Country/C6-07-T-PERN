import { useState } from "react";
import FilterGenre from "../filterGenre";
import FilterYear from "../filterYear";
import FilterRating from "../filterRating";
import css from "../filterContainer/index.module.css";

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
				<button onClick={() => {setFilter("genero");}}>Géneros</button>
				<button onClick={() => {setFilter("año")}}>Año</button>
				<button onClick={() => {setFilter("puntuacion")}}>Puntuación</button>
			</div>
			{show ? (
			<div style={{ height: "50px", color: "white" }}> 
				<div>
				{showFilter == "genero" ? (
					<>
					<button className={css.closeButtonGenre} onClick={() => {setShow(false);}}>Close</button>
					<FilterGenre>Géneros</FilterGenre>
					</>
				) : showFilter == "año" ? (
					<>
					<button className={css.closeButtonYear} onClick={() => {setShow(false);}}>Close</button>
					<FilterYear>Año</FilterYear>
					</>
				) : showFilter == "puntuacion" ? (
					<>
					<button className={css.closeButtonYear} onClick={() => {setShow(false);}}>Close</button>
					<FilterRating>Puntuación</FilterRating>
					</>
				) : null}
			</div>
		</div>
	) : null }
	</div>
	);
}