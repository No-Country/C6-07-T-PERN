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
import { H2, H3semiBold, H4 } from "../../ui/text";
import css from "./index.module.css";
import { useTransition, animated } from "react-spring";
export default function Sinopsis(props) {
  return (
    <animated.div
      style={props.style}
      className={css.divSinopsisContainer}
      onMouseLeave={() => {
        props.setShowSinopsis(false);
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
