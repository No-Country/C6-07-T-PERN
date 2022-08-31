import css from "./index.module.css";
export function Checkbox(props) {
  return (
    <label className={css.checkboxLabel}>
      {props.label}
      <input
        type="checkbox"
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        defaultChecked={props.checked}
      />
      <span className={css.checkboxMark}></span>
    </label>
  );
}
export function Radio(props) {
  return (
    <label className={css.radioLabel}>
      {props.label}
      <input
        type="radio"
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        defaultChecked={props.checked}
      />
      <span className={css.radioMark}></span>
    </label>
  );
}
