//Nano: Importado de librerias:
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//Nano: Importado de archivos propios:
import { clearMedia, getMedia } from "../../store/actions";
import Card from "../card";
import css from "./index.module.css";
import { Loading } from "../../ui/icons";

//Nano: Mapeo de los estados de redux con las props del elemento
function mapStateToProps(state) {
  return {
    media: state.mediaReducer,
  };
}

//Nano: Mapeo de los funciones dispatch de redux con las props del elemento
function mapDispatchToProps(dispatch) {
  return {
    getMedia: () => dispatch(getMedia()),
  };
}

//Nano: Función principal para contrucción de la etiqueta
function CardsContainer(props) {
  //Nano: Asociación del objeto media y los dispátch con las props:
  const { media } = useSelector((state) => state.mediaReducer);
  const { filter } = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();
  //Nano: Aministración de estados de la etiqueta Card

  useEffect(() => {
    media.length && dispatch(clearMedia());
    dispatch(getMedia());
  }, [filter]);

  //Nano: Devolución de la etiqueta
  return (
    <div className={css.divCardContainer}>
      {!media.length ? (
        <Loading />
      ) : (
        media.map((element, index) => {
          return (
            <Card
              key={element.id}
              media={element}
              priority={index == 0 ? true : false}
              actors={element.actors}
              sinopsis={element.overview}
              title={element.title}
              director={element.director}
            />
          );
        })
      )}
    </div>
  );
}

//Nano: Exportación por defecto de la etiqueta para llamos externos
export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
