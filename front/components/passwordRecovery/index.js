import { H2, H5 } from "../../ui/text";
import css from "../passwordRecovery/index.module.css";


export default function PasswordRecovery() {
	return (
		<form>
			<H2>Recuperar Contraseña</H2>
			<H5>Ingresa tu correo electrónico</H5>
			<textarea className={css.emailTextArea}></textarea>
			<H5>Enviaremos un correo electrónico para recuperar la contraseña</H5>
			<button className={css.recoveryButton}>Recuperar Contraseña</button>
		</form>
	);
}
