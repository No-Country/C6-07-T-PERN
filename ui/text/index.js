import css from "./index.module.css";

const classH2 = css.title + " " + css.text;
console.log(classH2);
export function H2(props) {
  return <h1 className={classH2}>{props.children}</h1>;
}
export function H3() {
  return <h2 className={css.text}>title</h2>;
}
export function H4() {
  return <h3 className={css.text}>title</h3>;
}
export function H5() {
  return <h4 className={css.text}>title</h4>;
}
