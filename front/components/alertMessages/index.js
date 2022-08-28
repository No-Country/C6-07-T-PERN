import { H2, H3, H5 } from "../../ui/text";
import css from "../alertMessages/index.module.css";

export default function WatchlistAlert() {
	return (
		<div>
			<H2>Debes ingresar a una cuenta</H2>
		    <H3>Para utilizar "Mi Lista" debes ingresar<span></span> o registrarte en una cuenta</H3>
			<button className={css.logButton}>Ingresar o registrarse</button>
		</div>
	)
}

export default function recoveryAlert() {
	return (
		<div>
			<H2>Recuperar contraseña</H2>
			<H3>Mail de recuperación enviado con éxito</H3>
			<H5>Revisa tu correo y continua desde el mail enviado</H5>
			<button className={css.logButton}>Entendido</button>
		</div>
	)
}

export default function loginAlert() {
	return (
		<div>
			<H2>Hola {usuario}</H2>
			<H3>Ingresaste a tu cuenta con éxito</H3>
			<button className={css.logButton}>Continuar</button>
		</div>
	)
}