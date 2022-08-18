//Nano: Importado de librerias:
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

//Nano: Importado de archivos propios:
import { getMedia } from "../../store/actions";
import Card from "../card";
import css from "./index.module.css";

//Nano: Mapeo de los estados de redux con las props del elemento
function mapStateToProps(state) {
  return {
    media: state.media,
  };
}

//Nano: Mapeo de los funciones dispatch de redux con las props del elemento
function mapDispatchToProps(dispatch) {
  return {
    getMedia: () => dispatch(getMedia()),
  };
}

//Nano: Función principal para contrucción de la etiqueta
function CardsContainer() {
  //Nano: Asociación del objeto media y los dispátch con las props:
  const media = useSelector((state) => state.media);
  const dispatch = useDispatch();
  //Nano: Aministración de estados de la etiqueta Card
  useEffect(() => {
    dispatch(getMedia());
  }, []);

  //Nano: Devolución de la etiqueta
  return (
    <div className={css.divCardContainer}>
      {media.map((element, index) => {
        return <Card key={element.id} media={element} priority={index == 0? true: false}/>;
      })}
    </div>
  );
}

//Nano: Exportación por defecto de la etiqueta para llamos externos
export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
