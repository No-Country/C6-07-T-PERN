//Nano: Importado de archivos propios:
import { PrimaryButton } from "../../ui/buttons";
import {
  PlatformIcon,
  ArrowDownIcon,
  DisneyIcon,
  HboIcon,
  ImdbIcon,
  NetflixIcon,
  AmazonIcon,
} from "../../ui/icons";
import Image from "next/future/image";
import css from "./index.module.css";

//Denis: funcion que devuelve el icono de la plataforma correspondiente
function showMoviePlatform(platform) {
  //Denis: Objeto con los posibles elementos a retornar
  const dictionary = {
    Netflix: (
      <PlatformIcon key={platform.id}>
        <NetflixIcon></NetflixIcon>
      </PlatformIcon>
    ),
    "Disney Plus": (
      <PlatformIcon key={platform.id}>
        <DisneyIcon></DisneyIcon>
      </PlatformIcon>
    ),
    "HBO Max": (
      <PlatformIcon key={platform.id}>
        <HboIcon></HboIcon>
      </PlatformIcon>
    ),
    "Amazon Prime Video": (
      <PlatformIcon key={platform.id}>
        <AmazonIcon></AmazonIcon>
      </PlatformIcon>
    ),
  };
  //Denis: devuelvo la key del objeto que coincide con el nombre de la plataforma
  return dictionary[platform.name];
}

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
        <Image
          priority={props.priority}
          className={css.imgCardMain}
          width={290}
          height={420}
          src={media.image}
          alt={`${media.title}-banner`}
        />
        <div className={css.divImgCardPlatform}>
          {media.platforms.map((element) => {
            return showMoviePlatform(element);
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
