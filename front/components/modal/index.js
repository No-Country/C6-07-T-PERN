import react from "react";
import { CloseIcon } from "../../ui/icons";
import css from "./index.module.css";

export default function Modal({ setOpenModal }) {
	return (
		<button className={css.modalButton} onClick={() => {
			setOpenModal(false);
		}}>
			<CloseIcon>
			</CloseIcon>
		</button>
	);
}