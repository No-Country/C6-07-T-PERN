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
  UnseenIcon,
  UnsavedIcon,
  SavedIcon,
} from "../../ui/icons";
import { H2, H3semiBold, H4 } from "../../ui/text";
import css from "./index.module.css";
import { useTransition, animated } from "react-spring";
import { useState } from "react";
import SinopsisHeader from "../sinopsisHeader";
export default function Sinopsis(props) {
  return (
    <animated.div style={props.style} className={css.divSinopsisContainer}>
      <SinopsisHeader
        title={props.title}
        id={props.id}
        type={props.type}
        list={props.list}
        watched={props.watched}
      />
      <div className={css.divSinopsisBody}>
        <div>
          <H4 className={css.sinopsisTextMargin}>Director</H4>
          <H3semiBold className={css.sinopsisTextMargin}>
            {props.director || "No disponible"}
          </H3semiBold>
        </div>
        <div>
          <H4 className={css.sinopsisTextMargin}>Elenco</H4>
          {props.actors ? (
            props.actors.map((element, index) => {
              return (
                index <= 1 && (
                  <H3semiBold className={css.sinopsisTextMargin} key={element.id}>
                    {element.name}
                  </H3semiBold>
                )
              );
            })
          ) : (
            <H3semiBold className={css.sinopsisTextMargin} key={"none"}>
              No disponible
            </H3semiBold>
          )}
        </div>
        <div>
          <H3semiBold className={css.sinopsisTextMargin}>Sinopsis</H3semiBold>
          <H4 className={css.sinopsisBodyText}>{props.sinopsis}</H4>
        </div>
      </div>
    </animated.div>
  );
}
