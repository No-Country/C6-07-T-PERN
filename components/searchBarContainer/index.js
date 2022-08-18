// Manu: Importacion de librerias
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

// Manu: Importacion de archivos propios
import { getMedia } from "../../store/actions";
import SearchBar from "../searchBar";


// Manu: Mapeo de los estados de redux con las props del elemento
function mapStateToProps(state) {
	return {
		media: state.media,
	};
}

// Manu: Mapeo de los funciones dispatch de redux con las props del elemento
function mapDispatchToProps(dispatch) {
	return {
	  getMedia: () => dispatch(getMedia()),
	};
}

// Manu:  Función principal para contrucción de la etiqueta
function SearchBarContainer() {
	// Definicion de los estados 
	const [ searchMedia, setSearchMedia ] = useState('');

	//Manu: Asociación del objeto media y los dispátch con las props:
	const media = useSelector((state) => state.media);
	const dispatch = useDispatch();
	//Manu: Aministración de estados de la etiqueta SearchBar
	useEffect(() => {
		dispatch(getMedia());
	}, []);

    // Manu: efecto de los cambios que ocurriran al suceder el request del usuario
	const onChange = (e) => {
		const searchMedia = e.target.value;
		setSearchMedia(searchMedia)
		if (searchMedia.length) {
			fetch (media(searchMedia));
		}
	}

	// Manu: devolucion de la busqueda
return (
	<div>
		<SearchBar />
	</div>
);
}

// Manu: exportacion por defecto de la etiqueta para el uso de llamados externos
export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);
