//Nano: Importado de archivos propios:
import css from "./index.module.css";

//Nano: Función principal para contrucción de la etiqueta
export default function Card(props) {
    const { media } = props;
  //Nano: Devolución de la etiqueta
  return (
    <div className={css.divCardMain}>
      <div className={css.divCardHeader}>
        <p className={css.sinopsisText}>Sinopsis</p>
        <p>{">"}</p>
      </div>
      <div className={css.divCardImage}>
        <img
          className={css.imgCardMain}
          src={media.image}
          alt={`${media.title}-banner`}
        />
        {media.platforms.map((element) => {
          return (
            <img
              key={element.id}
              className={css.imgCardPlatform}
              src={element.logo}
              alt={`${element.name}_logo`}
            />
          );
        })}
      </div>
      <div className={css.divCardFooter}>
        <div className={css.divCardRaiting}>
          <p className={css.textCardRaiting}>{media.vote_average}</p>
          <img
            className={css.imgCardRaiting}
            src="https://download.logo.wine/logo/IMDb/IMDb-Logo.wine.png"
            alt="IMDbLogo"
          />
        </div>
        <p className={css.textCardYear}>{media.release_year}</p>
        <button className={css.buttonCardData}>Mas Datos</button>
      </div>
    </div>
  );
}
