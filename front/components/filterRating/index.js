import { H4 } from "../../ui/text";
import { PrimaryButton } from "../../ui/buttons";
var _ = require('lodash');
import css from "../filterRating/index.module.css";
import { useDispatch } from "react-redux";
import { setFilterByRating } from "../../store/actions";



export default function FilterRating() {
	const dispatch = useDispatch();

    const ratingFilters = [];

	function checkBoxClick(e) {
		const { name, checked } = e.target;
		if (checked) {
			ratingFilters.push(name);
		} else {
			_.remove(ratingFilters, (rating) => rating == name);
		} 
	};

	function handleOnSubmit() {
		console.log(ratingFilters);
		dispatch(setFilterByRating(ratingFilters));
	}

	return ( <div>
		<H4>
		<label>
			<input
                type="checkbox"
                name="1"
				onChange={checkBoxClick}
                /> 1
		</label>
		<br></br>
		<label>
				<input
                type="checkbox"
                name="2"
				onChange={checkBoxClick}
                /> 2
		</label>
		<br></br>
		<label>
			<input
                type="checkbox"
                name="3"
				onChange={checkBoxClick}
                /> 3
		</label>
		<br></br>
		<label>
			<input
                type="checkbox"
                name="4"
				onChange={checkBoxClick}
                /> 4
		</label>
		<br></br>
		<label>
			<input
                type="checkbox"
                name="5"
				onChange={checkBoxClick}
                /> 5
		</label>
		<br></br>
		<label>
			<input
                type="checkbox"
                name="6"
				onChange={checkBoxClick}
                /> 6
		</label>
		<br></br>
		<label>
			<input
                type="checkbox"
                name="7"
				onChange={checkBoxClick}
                /> 7
		</label>
		<br></br>
		<label>
			<input
                type="checkbox"
                name="8"
				onChange={checkBoxClick}
                /> 8
		</label>
		<br></br>
		<label>
			<input
                type="checkbox"
                name="9"
				onChange={checkBoxClick}
                /> 9
		</label>
		<br></br>
		<label>
			<input
                type="checkbox"
                name="10"
				onChange={checkBoxClick}
                /> 10
		</label>
		<br></br>
		</H4>
		<div className={css.filterButtonRating}><PrimaryButton onClick={handleOnSubmit}>Filtrar</PrimaryButton></div>
	</div> 
	)
}