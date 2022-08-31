import { H4 } from "../../ui/text";
import {
  BorderlessButton,
  OutlinedButton,
  PrimaryButton,
} from "../../ui/buttons";
var _ = require("lodash");
import css from "./index.module.css";
import { setOrderByYear } from "../../store/actions";
import { useDispatch, connect, useSelector } from "react-redux";
import { Radio } from "../../ui/input";

function mapStateToProps(state) {
  return {
    media: state.filterReducer,
  };
}

function FilterYear(props) {
  const { filter } = useSelector((state) => state.filterReducer);
  console.log(filter);
  const dispatch = useDispatch();

  let order = null;

  function checkBoxClick(e) {
    const { id, checked } = e.target;

    if (checked) order = id;
  }

  function handleOnSubmit() {
    dispatch(setOrderByYear(order));
    props.click(false);
  }

  return (
    <div className={css.mainContainer}>
      <div className={css.filterContainer}>
        <Radio
          label="Más recientes primero"
          name="antiguedad"
          id="des"
          onChange={checkBoxClick}
          checked={filter.year_order == "des"}
        />

        <Radio
          label="Más antigüas primero"
          name="antiguedad"
          id="asc"
          onChange={checkBoxClick}
          checked={filter.year_order == "asc"}
        />
      </div>
      <div className={css.filterButton} style={{ border: "none" }}>
        <BorderlessButton
          onClick={() => {
            props.click(false);
          }}
        >
          Cerrar
        </BorderlessButton>
        <OutlinedButton onClick={handleOnSubmit}>Filtrar</OutlinedButton>
      </div>
    </div>
  );
}
export default connect(mapStateToProps)(FilterYear);
