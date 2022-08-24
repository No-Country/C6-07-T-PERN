import { H4 } from "../../ui/text";
import { PrimaryButton } from "../../ui/buttons";
var _ = require('lodash');
import css from "../filterYear/index.module.css";


export default function FilterYear() {
    const year = [];

	function checkBoxClick(e) {
		const { name, checked } = e.target;
		if (checked) {
			year.push(name);
		} else {
			_.remove(year, (year) => (year == name));
		} 
	};

	function yearSubmit() {
		
	}

	return ( <div>
		<H4>
		<label>
			<input
                type="radio"
                name="antiguedad"
				onChange={checkBoxClick}
                /> Más recientes primero
		</label>
		<br></br>
		<label>
				<input
                type="radio"
                name="antiguedad"
				onChange={checkBoxClick}
                /> Más antigüas primero
		</label>
		</H4>
		<div className={css.filterButtonYear}><PrimaryButton onClick={() =>yearSubmit()}>Filtrar</PrimaryButton></div>
	</div> 
	)
}