// Manu: Importacion de librerias
import { CloseIcon, ArrowRightIcon } from "../../ui/icons";

// Manu: Importacion de archivos propios
import css from "./index.module.css";

// Manu: exportacion del componente SearchBar
export default function SearchBar(props) {
	
return (
	<div className={css.searchBarContainer}>
		<form onSubmit={props.submit}>
		<button className={css.searchBarCloseIcon}><CloseIcon /></button>
		<input className={css.searchBarInput}
		type='text'
		value='Búsqueda'
		placeholder="searchMediaBar"
		/>
		<button className={css.searchBarArrowRightIcon}><ArrowRightIcon /></button>
		</form>	  	
	</div>

);

}