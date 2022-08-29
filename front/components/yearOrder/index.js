import { H4 } from "../../ui/text";
import { PrimaryButton } from "../../ui/buttons";
var _ = require("lodash");
import css from "./index.module.css";
import { setOrderByYear } from "../../store/actions";
import { useDispatch } from "react-redux";

export default function FilterYear() {
  const dispatch = useDispatch();

  let order = null;

  function checkBoxClick(e) {
    const { id, checked } = e.target;
    if (checked) order = id;
  }

  function handleOnSubmit() {
    dispatch(setOrderByYear(order));
  }

  return (
    <div>
      <H4>
        <label>
          <input
            type="radio"
            name="antiguedad"
            id="des"
            onChange={checkBoxClick}
          />{" "}
          Más recientes primero
        </label>
        <br></br>
        <label>
          <input
            type="radio"
            name="antiguedad"
            id="asc"
            onChange={checkBoxClick}
          />{" "}
          Más antigüas primero
        </label>
      </H4>
      <div className={css.orderButtonYear}>
        <PrimaryButton onClick={handleOnSubmit}>Filtrar</PrimaryButton>
      </div>
    </div>
  );
}
