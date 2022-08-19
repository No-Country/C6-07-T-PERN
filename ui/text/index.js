import css from "./index.module.css";

const classH2 = css.title + " " + css.text;
const classH3 = css.subtitle + " " + css.text;
const classH3semiBold = css.subtitleSemiBold + " " + css.text;
const classH4 = css.body + " " + css.text;
const classH4Buttons = css.buttons + " " + css.text;
const classH5 = css.tiny + " " + css.text;

export function H2(props) {
  return <h2 className={classH2}>{props.children}</h2>;
}
export function H3(props) {
  return <h3 className={classH3}>{props.children}</h3>;
}
export function H3semiBold(props) {
  return <h3 className={classH3semiBold}>{props.children}</h3>;
}
export function H4(props) {
  return <p className={classH4}>{props.children}</p>;
}
export function H4Buttons(props) {
  return <p className={classH4Buttons}>{props.children}</p>;
}
export function H5(props) {
  return <p className={classH5}>{props.children}</p>;
}
