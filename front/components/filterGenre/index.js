import { H4 } from "../../ui/text";
import { PrimaryButton } from "../../ui/buttons";
var _ = require('lodash');
import css from "../filterGenre/index.module.css";

export default function FilterGenre() {
    const genre = [];

	function checkBoxClick(e) {
		const { name, checked } = e.target;
		if (checked) {
			genre.push(name);
		} else {
			_.remove(genre, (genre) => (genre == name));
		} 
	};

	function genreSubmit() {
		
	}

	return ( <div>
		<div className={css.filterBoxNew}>
		<H4>
		<label>
			<input className={css.checkBox}
                type="checkbox"
                name="estrenos"
				onChange={checkBoxClick}
                /> Estrenos
		</label>
		<label>
				<input
                type="checkbox"
                name="populares"
				onChange={checkBoxClick}
                /> Populares
		</label>
		</H4>
		</div>
		<div className={css.filterGenreBoxA}>
			<H4> 
			<label>
				<input
                type="checkbox"
                name="accion"
				onChange={checkBoxClick}
                /> Acción
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="animacion"
				onChange={checkBoxClick}
                /> Animación
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="aventura"
				onChange={checkBoxClick}
                /> Aventura
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="belica"
				onChange={checkBoxClick}
                /> Bélica
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="ciencia ficcion"
				onChange={checkBoxClick}
                /> Ciencia Ficción
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="comedia"
				onChange={checkBoxClick}
                /> Comedia
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="crimen"
				onChange={checkBoxClick}
                /> Crimen
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="documental"
				onChange={checkBoxClick}
                /> Documental
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="drama"
				onChange={checkBoxClick}
                /> Drama
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="familia"
				onChange={checkBoxClick}
                /> Familia
		    </label>
			</H4>
			</div>
			<div className={css.filterGenreBoxB}>
			<H4>
			<label>
				<input
                type="checkbox"
                name="Fantasia"
				onChange={checkBoxClick}
                /> Fantasia
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="historia"
				onChange={checkBoxClick}
                /> Historia
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="misterio"
				onChange={checkBoxClick}
                /> Misterio
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="musica"
				onChange={checkBoxClick}
                /> Música
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="pelicula de tv"
				onChange={checkBoxClick}
                /> Película de TV
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="romance"
				onChange={checkBoxClick}
                /> Romance
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="suspenso"
				onChange={checkBoxClick}
                /> Suspenso
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="terror"
				onChange={checkBoxClick}
                /> Terror
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="western"
				onChange={checkBoxClick}
                /> Western
		    </label>
			</H4>
			<PrimaryButton onClick={() =>genreSubmit()}>Filtrar</PrimaryButton>
		</div>
	</div>
	
	)
}