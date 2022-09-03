import css from "./index.module.css";
export function Spinner() {
  return (
    <div className={css.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
export function SpinnerAccent() {
  return (
    <div className={css.spinnerAccent}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
