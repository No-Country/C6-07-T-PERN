import { H4 } from "../../ui/text";
import {
  BorderlessButton,
  OutlinedButton,
  PrimaryButton,
} from "../../ui/buttons";
var _ = require("lodash");
import css from "../filterRating/index.module.css";
import { useDispatch, connect, useSelector } from "react-redux";
import { setFilterByRating } from "../../store/actions";
import { Checkbox } from "../../ui/input";

function mapStateToProps(state) {
  return {
    media: state.filterReducer,
  };
}

function FilterRating(props) {
  const { filter } = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  const ratingFilters = filter.vote_average;

  function checkBoxClick(e) {
    const { name, checked } = e.target;
    if (checked) {
      ratingFilters.push(Number(name));
    } else {
      _.remove(ratingFilters, (rating) => rating == name);
    }
  }

  function handleOnSubmit() {
    dispatch(setFilterByRating(ratingFilters));
    props.click(false);
  }

  return (
    <div className={css.filtersContainer}>
      <div className={css.ratingContainer}>
        <div className={css.checkboxContainer}>
          <Checkbox
            name="1"
            label="1"
            id={0}
            onChange={checkBoxClick}
            checked={filter.vote_average.includes(1)}
          />
          <Checkbox
            name="2"
            label="2"
            id={0}
            onChange={checkBoxClick}
            checked={filter.vote_average.includes(2)}
          />
          <Checkbox
            name="3"
            label="3"
            id={0}
            onChange={checkBoxClick}
            checked={filter.vote_average.includes(3)}
          />
          <Checkbox
            name="4"
            label="4"
            id={0}
            onChange={checkBoxClick}
            checked={filter.vote_average.includes(4)}
          />
          <Checkbox
            name="5"
            label="5"
            id={0}
            onChange={checkBoxClick}
            checked={filter.vote_average.includes(5)}
          />
        </div>
        <div className={css.checkboxContainer}>
          <Checkbox
            name="6"
            label="6"
            id={0}
            onChange={checkBoxClick}
            checked={filter.vote_average.includes(6)}
          />
          <Checkbox
            name="7"
            label="7"
            id={0}
            onChange={checkBoxClick}
            checked={filter.vote_average.includes(7)}
          />
          <Checkbox
            name="8"
            label="8"
            id={0}
            onChange={checkBoxClick}
            checked={filter.vote_average.includes(8)}
          />
          <Checkbox
            name="9"
            label="9"
            id={0}
            onChange={checkBoxClick}
            checked={filter.vote_average.includes(9)}
          />
          <Checkbox
            name="10"
            label="10"
            id={0}
            onChange={checkBoxClick}
            checked={filter.vote_average.includes(10)}
          />
        </div>
      </div>
      <div className={css.filterButtonRating}>
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
export default connect(mapStateToProps)(FilterRating);
