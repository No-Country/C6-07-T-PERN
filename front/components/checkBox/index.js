import { ArrowDownIcon, ArrowUpIcon } from "../../ui/icons";
import css from "./index.module.css";
import { H3, H4 } from "../../ui/text";
import { useState } from "react";
import { PrimaryButton } from "../../ui/buttons";

export default function CheckBox() {
    const [ showGenreFilter, setShowGenreFilter ] = useState(false);
	const [ showYearFilter, setShowYearFilter ] = useState(false);
	const [ showRatingFilter, setShowRatingFilter ] = useState(false);

	


	return (
	<div className={css.checkBoxDiv}>
		<li className={css.checkBoxList}>
			<button className={css.checkBoxButton} onClick={() =>{
				setShowGenreFilter(!showGenreFilter);
			}}>
			<H3> Género { showGenreFilter ? (<> <ArrowUpIcon></ArrowUpIcon>
			<H4 className={css.checkBoxItem}>
			<input
                type="checkbox"
                name="genre"
                />
				<PrimaryButton>Filtrar</PrimaryButton> 
			</H4>
			</>
			) : 
			( 
			<ArrowDownIcon></ArrowDownIcon>
			)} 
			</H3>
			</button>

			<button className={css.checkBoxButton} onClick={() =>{
				setShowYearFilter(!showYearFilter);
			}}>
			<H3> Año { showYearFilter ? (<> <ArrowUpIcon></ArrowUpIcon>
			<div className={css.checkBoxContainer}>
			<H4 className={css.checkBoxItem}>
			<input
                type="checkbox"
                name="year"
				value="new media" /> Más recientes primero
				<br></br>
			<input
                type="checkbox"
                name="year"
				value="old media" /> Más antigüas primero
				<br></br>
				<div className={css.checkBoxFilterButton}>
				<PrimaryButton>Filtrar</PrimaryButton> 
				</div>
			</H4>
			</div>
			</>
			) : 
			( 
			<ArrowDownIcon></ArrowDownIcon>
			)}
			</H3>
			</button>

			<button className={css.checkBoxButton} onClick={() =>{
				setShowRatingFilter(!showRatingFilter);
			}}>
			<H3> Puntaje { showRatingFilter ? (<> <ArrowUpIcon></ArrowUpIcon>
			<H4 className={css.checkBoxItem}>
			<input 
                type="checkbox"
                name="best rating"
                value="mayor puntaje" />Mayor puntaje primero
				<br></br>
			<input 
                type="checkbox"
                name="worst rating"
                value="menor puntaje" />Menor puntaje primero
				<br></br>
				<PrimaryButton>Filtrar</PrimaryButton> 
			</H4>
			</>
			) : 
			( 
			<ArrowDownIcon></ArrowDownIcon>
			)}
			</H3>
			</button>
		</li>
	</div>			
	)
} 
