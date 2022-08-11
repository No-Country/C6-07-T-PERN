import css from "./index.module.css";
export function PrimaryButton(props) {
  return <button className={css.buttons}>{props.children}</button>;
}
