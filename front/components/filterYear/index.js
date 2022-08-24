import { H4 } from "../../ui/text";
import { PrimaryButton } from "../../ui/buttons";
var _ = require('lodash');


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
                type="checkbox"
                name="mas recientes primero"
				onChange={checkBoxClick}
                /> Más recientes primero
		</label>
		<br></br>
		<label>
				<input
                type="checkbox"
                name="mas antiguas primero"
				onChange={checkBoxClick}
                /> Más antigüas primero
		</label>
		</H4>
		<div><PrimaryButton onClick={() =>genreSubmit()}>Filtrar</PrimaryButton></div>
	</div> 
	)
}