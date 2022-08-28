import { H2, H4, H5 } from "../../ui/text";
import { PrimaryButton } from "../../ui/buttons";
import css from "../login/index.module.css";

export function Login() {
  return (
    <div>
      <form>
        <div>
          <H2>Registrate</H2>
        </div>
        <div>
          <H5>Correo electrónico</H5>
        </div>
        <input className={css.mailForm} type="text" name="email" />tumail@gmail.com
        <div>
          <H5>Contraseña</H5>
        </div>
        <input className={css.mailForm} name="password" type="text" />Contraseña de 8 dígitos o más
        <div className={css.enterButton}>
		<H4>
          <label>
            <input type="checkbox" name="recordarme" />
            Recordarme
          </label>
        </H4>
          <PrimaryButton>Registrate</PrimaryButton>
        </div>
        <div className={css.regButton}><H5>¿Ya tenés cuenta?</H5><button className={css.registerForm}>Ingresa</button></div>
      </form>
    </div>
  );
}

export function SignUp() {
	return (
		<div>
		<form>
		  <div>
			<H2>Ingresar</H2>
		  </div>
		  <div>
			<H5>Correo electrónico</H5>
		  </div>
		  <input className={css.mailForm} type="text" name="email" />tumail@gmail.com
		  <div>
			<H5>Contraseña</H5>
		  </div>
		  <input className={css.mailForm} type="text" name="password" />Contraseña de 8 dígitos o más
		  <div className={css.enterButton}>
		  <H4>
			<label>
			  <input type="checkbox" name="recordarme" />
			  Recordarme
			</label>
		  </H4>
			<PrimaryButton>Ingresar</PrimaryButton>
		  </div>
		  <div className={css.regButton}><H5>¿No tenés cuenta?</H5><button className={css.registerForm}>Registrarse</button></div>
		</form>
	  </div>
	)
}
