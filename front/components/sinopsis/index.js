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
  const [showSaved, setShowSaved] = useState(false);
  const [showSeen, setShowSeen] = useState(false);
  const test = false;
  return (
    <animated.div style={props.style} className={css.divSinopsisContainer}>
      <SinopsisHeader title={props.title} />
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
              <H3semiBold className={css.sinopsisTextMargin} key={element.id}>
                {element.name}
              </H3semiBold>
            ) : null;
          })}
        </div>
        <div>
          <H3semiBold className={css.sinopsisTextMargin}>Sinopsis</H3semiBold>
          <H4 className={css.sinopsisBodyText}>{props.sinopsis}</H4>
        </div>
      </div>
    </animated.div>
  );
}
