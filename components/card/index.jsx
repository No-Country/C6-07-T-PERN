import { useSelector } from "react-redux";

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
  SeenIcon,
  SaveIcon,
  ArrowUpIcon,
} from "../../ui/icons";
import Image from "next/future/image";
import css from "./index.module.css";
import { useEffect, useState } from "react";
import { H2, H3semiBold, H4 } from "../../ui/text";

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
  const [showSinopsis, setShowsinopsis] = useState(false);
  //Nano: Estados para transcición de inggreso
  const [isMounted, setIsMounted] = useState(false);
  //Nano: Adición de estilos para ingreso de las cards(
  const unmountedStyle = {
    opacity: 0,
    transform: "translate(0px, 100px)",
    transition: "all 500ms ease-out",
  };
  const mountedStyle = { opacity: 1, transition: "all 500ms ease-out" };
  const { filter } = useSelector((state) => state.filterReducer);

  useEffect(() => {
    if (!isMounted) {
      return setIsMounted(true);
    }
    return function cleanup() {
      isMounted && setIsMounted(false);
    };
  }, [filter, isMounted]);

  //Nano: Devolución de la etiqueta
  return (
    <div
      className={css.divCardMain}
      style={isMounted ? mountedStyle : unmountedStyle}
    >
      <div
        className={css.divCardHeader}
        onClick={() => {
          setShowsinopsis(!showSinopsis);
        }}
      >
        <p className={css.sinopsisText}>Sinopsis</p>
        {showSinopsis ? (
          <ArrowUpIcon className={css.headerArrowDown}></ArrowUpIcon>
        ) : (
          <ArrowDownIcon className={css.headerArrowDown}></ArrowDownIcon>
        )}
      </div>
      {showSinopsis ? (
        <div
          className={css.divSinopsisContainer}
          onMouseLeave={() => {
            setShowsinopsis(false);
          }}
        >
          <div className={css.divSinopsisHeader}>
            <SeenIcon></SeenIcon>
            <h2 style={{ padding: "0px 15px", textAlign: "center" }}>
              {props.title}
            </h2>
            <SaveIcon></SaveIcon>
          </div>
          <div className={css.divSinopsisBody}>
            <div>
              <H4 className={css.sinopsisTextMargin}>Director</H4>
              <H3semiBold className={css.sinopsisTextMargin}>
                {props.director}{" "}
              </H3semiBold>
            </div>
            <div>
              <H4 className={css.sinopsisTextMargin}>Elenco</H4>
              {props.actors.map((element, index) => {
                return index <= 1 ? (
                  <H3semiBold
                    className={css.sinopsisTextMargin}
                    key={element.id}
                  >
                    {element.name}
                  </H3semiBold>
                ) : null;
              })}
            </div>
            <div>
              <H3semiBold className={css.sinopsisTextMargin}>
                Sinopsis
              </H3semiBold>
              <H4 className={css.sinopsisBodyText}>{props.sinopsis}</H4>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={css.divCardImage}
          onMouseEnter={() => {
            setShowsinopsis(true);
          }}
        >
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
      )}
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
