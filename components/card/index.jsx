//Nano: Importado de archivos propios:
import { PrimaryButton } from "../../ui/buttons";
import { ArrowDownIcon, ImdbIcon } from "../../ui/icons";
import css from "./index.module.css";

//Nano: Función principal para contrucción de la etiqueta
export default function Card(props) {
    const { media } = props;
  //Nano: Devolución de la etiqueta
  return (
    <div className={css.divCardMain}>
      <div className={css.divCardHeader}>
        <p className={css.sinopsisText}>Sinopsis</p>
        <ArrowDownIcon className={css.headerArrowDown}></ArrowDownIcon>
      </div>
      <div className={css.divCardImage}>
        <img
          className={css.imgCardMain}
          src={media.image}
          alt={`${media.title}-banner`}
        />
        <div className={css.divImgCardPlatform}>
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
      </div>
      <div className={css.divCardFooter}>
        <div className={css.divCardRaiting}>
          <p className={css.textCardRaiting}>{media.vote_average}</p>
         <ImdbIcon></ImdbIcon>
        </div>
        <p className={css.textCardYear}>{media.release_year}</p>
        <PrimaryButton className={css.buttonCardData}>Mas Datos</PrimaryButton>
      </div>
    </div>
  );
}
