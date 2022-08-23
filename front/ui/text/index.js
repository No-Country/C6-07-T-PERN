import css from "./index.module.css";
const classH2 = css.title + " " + css.text;
const classH3 = css.subtitle + " " + css.text;
const classH3semiBold = css.subtitleSemiBold + " " + css.text;
const classH4 = css.body + " " + css.text;
const classH4Buttons = css.buttons + " " + css.text;
const classH5 = css.tiny + " " + css.text;

export function H2(props) {
  const classProp = props.className || "";
  return <h2 className={classH2 + " " + classProp}>{props.children}</h2>;
}
export function H3(props) {
  const classProp = props.className || "";
  return <h3 className={classH3 + " " + classProp}>{props.children}</h3>;
}
export function H3semiBold(props) {
  const classProp = props.className || "";
  return (
    <h3 className={classH3semiBold + " " + classProp}>{props.children}</h3>
  );
}
export function H4(props) {
  const classProp = props.className || "";
  return <p className={classH4 + " " + classProp}>{props.children}</p>;
}
export function H4Buttons(props) {
  const classProp = props.className || "";
  return <p className={classH4Buttons + " " + classProp}>{props.children}</p>;
}
export function H5(props) {
  const classProp = props.className || "";
  return <p className={classH5 + " " + classProp}>{props.children}</p>;
}
