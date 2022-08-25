var _ = require('lodash');
import { H4 } from "../../ui/text";
import { PrimaryButton } from "../../ui/buttons";
import { getMedia, filterMedia } from "../../store/actions";
import css from "../filterGenre/index.module.css";

export default function FilterGenre() {
	const media = getMedia();
	const genre = [media.id];

	function checkBoxClick(e) {
		const { name, checked } = e.target;
		if (checked) {
			genre.push(name);
		} else {
			_.remove(genre, (genre) => (genre == name));
		} 
	};

	function genreSubmit(e, media) {
		this.media({...this.state.request.media, [e.data.target]: e.data.value})
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
				id={0}
				onChange={checkBoxClick}
                /> Acción
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="animacion"
				id={2}
				onChange={checkBoxClick}
                /> Animación
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="aventura"
				id={1}
				onChange={checkBoxClick}
                /> Aventura
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="belica"
				id={17}
				onChange={checkBoxClick}
                /> Bélica
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="ciencia ficcion"
				id={14}
				onChange={checkBoxClick}
                /> Ciencia Ficción
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="comedia"
				id={3}
				onChange={checkBoxClick}
                /> Comedia
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="crimen"
				id={4}
				onChange={checkBoxClick}
                /> Crimen
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="documental"
				id={5}
				onChange={checkBoxClick}
                /> Documental
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="drama"
				id={6}
				onChange={checkBoxClick}
                /> Drama
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="familia"
				id={7}
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
				id={8}
				onChange={checkBoxClick}
                /> Fantasia
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="historia"
				id={9}
				onChange={checkBoxClick}
                /> Historia
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="misterio"
				id={12}
				onChange={checkBoxClick}
                /> Misterio
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="musica"
				id={11}
				onChange={checkBoxClick}
                /> Música
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="pelicula de tv"
				id={15}
				onChange={checkBoxClick}
                /> Película de TV
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="romance"
				id={13}
				onChange={checkBoxClick}
                /> Romance
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="suspenso"
				id={16}
				onChange={checkBoxClick}
                /> Suspenso
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="terror"
				id={10}
				onChange={checkBoxClick}
                /> Terror
		    </label>
			<br></br>
			<label>
				<input
                type="checkbox"
                name="western"
				id={18}
				onChange={checkBoxClick}
                /> Western
		    </label>
			</H4>
			<div className={css.filterButton}><PrimaryButton onClick={() =>genreSubmit()}>Filtrar</PrimaryButton></div>
		</div>
	</div>
	
	)
}