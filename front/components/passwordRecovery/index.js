import { H2, H5 } from "../../ui/text";
import css from "../passwordRecovery/index.module.css";


export default function PasswordRecovery() {

	function onSubmit() {
		return (<></>);
	}

	return (
		<form>
			<H2>Recuperar contraseña</H2>
			<H5>Ingresa tu correo electrónico</H5>
			<textarea className={css.emailTextArea} name="email"></textarea>
			<H5>Enviaremos un correo electrónico para recuperar la contraseña</H5>
			<button className={css.recoveryButton} onSubmit={onSubmit()}>Recuperar Contraseña</button>
		</form>
	);
}
