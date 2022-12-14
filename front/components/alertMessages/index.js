import { useRouter } from "next/router";
import Spinner, { SpinnerAccent } from "../../ui/spinner";
import { H2, H3, H4Buttons, H5 } from "../../ui/text";
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

export function MustLoginAlert(props) {
  return (
    <div className={css.mainDiv}>
      <div className={css.alertDiv}>
        <div className={css.alertTitle}>
          <H2>Debes ingresar a una cuenta</H2>
        </div>
        <div className={css.alertSubtitle}>
          <H3>
            Para ir a "Perfil" o utilizar "Mi Lista" debes ingresar<span></span>{" "}
            o registrarte en una cuenta
          </H3>
        </div>
        <button
          className={css.logButton}
          onClick={() => {
            props.showAlert(false);
          }}
        >
          <H4Buttons className={css.primary}>Ingresar o registrarse</H4Buttons>
        </button>
        <button
          className={css.closeButton}
          onClick={() => {
            props.close(false);
          }}
        >
          <H4Buttons className={css.primary}>Cancelar</H4Buttons>
        </button>
      </div>
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

export function LoginAlert(props) {
  const router = useRouter();
  return (
    <div className={css.mainDiv}>
      <div className={css.alertDiv}>
        <div className={css.alertTitle}>
          <H2>¡Hola!</H2>
        </div>
        <div className={css.alertSubtitle}>
          <H3>Ingresaste a tu cuenta con éxito</H3>
        </div>
        <button
          className={css.logButton}
          onClick={() => {
            props.close(false);
          }}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}

export function MessageBox(props) {
  return <div className={css.borderlessMessage}>{props.children}</div>;
}

export function Messages(props) {
  return (
    <MessageBox className={css.borderlessMessage}>
      {props.loading ? (
        <SpinnerAccent />
      ) : (
        <H5 className={css.accent}>{props.text}</H5>
      )}
    </MessageBox>
  );
}
