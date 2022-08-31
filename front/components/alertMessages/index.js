import { H2, H3, H5 } from "../../ui/text";
import css from "../alertMessages/index.module.css";

export function PasswordRecovery() {
  function onSubmit() {
    return <></>;
  }

  return (
    <form>
      <H2>Recuperar contraseña</H2>
      <H5>Ingresa tu correo electrónico</H5>
      <input className={css.emailTextArea} type="text" name="email" />
      tumail@gmail.com
      <br></br>
      <H5>Enviaremos un correo electrónico para recuperar la contraseña</H5>
      <button className={css.recoveryButton} onSubmit={onSubmit()}>
        Recuperar Contraseña
      </button>
    </form>
  );
}

export function WatchlistAlert() {
  return (
    <div>
      <div className={css.alertTitle}>
        <H2>Debes ingresar a una cuenta</H2>
      </div>
      <div className={css.alertSubtitle}>
        <H3>
          Para utilizar "Mi Lista" debes ingresar<span></span> o registrarte en
          una cuenta
        </H3>
      </div>
      <button className={css.logButton}>Ingresar o registrarse</button>
    </div>
  );
}

export function RecoveryAlert() {
  return (
    <div>
      <div className={css.alertTitle}>
        <H2>Recuperar contraseña</H2>
      </div>
      <div className={css.alertSubtitle}>
        <H3>Mail de recuperación enviado con éxito</H3>
      </div>
      <div className={css.alertSubtitle}>
        <H5>Revisa tu correo y continua desde el mail enviado</H5>
      </div>
      <button className={css.logButton}>Entendido</button>
    </div>
  );
}

export function LoginAlert() {
  return (
    <div>
      <div className={css.alertTitle}>
        <H2>¡Hola!</H2>
      </div>
      <div className={css.alertSubtitle}>
        <H3>Ingresaste a tu cuenta con éxito</H3>
      </div>
      <button className={css.logButton}>Continuar</button>
    </div>
  );
}

export function MessageBox(props) {
  return <div className={css.borderlessMessage}>{props.children}</div>;
}

export function Messages() {
  return (
    <div>
      <MessageBox className={css.borderlessMessage}>
        <H5>Agregada a la lista</H5>
      </MessageBox>
      <MessageBox className={css.borderlessMessage}>
        <H5>Quitada de la lista</H5>
      </MessageBox>
      <MessageBox className={css.borderlessMessage}>
        <H5>Marcada como vista</H5>
      </MessageBox>
      <MessageBox className={css.borderlessMessage}>
        <H5>Marcada como no vista</H5>
      </MessageBox>
    </div>
  );
}
