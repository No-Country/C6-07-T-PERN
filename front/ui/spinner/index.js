import css from "./index.module.css";
export default function Spinner() {
  return (
    <div className={css.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
