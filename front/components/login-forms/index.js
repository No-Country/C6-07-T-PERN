import { H2, H4, H5 } from "../../ui/text";
import { PrimaryButton } from "../../ui/buttons";
import css from "./index.module.css";
import { LoginAlert } from "../alertMessages";
import { useState } from "react";
import { getAuth, getToken } from "../../lib/api";
import Spinner from "../../ui/spinner";

export function SignUpForm(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    setLoading(true);
    const res = await getAuth();
    if (res) {
      setTimeout(() => {
        setLoading(false);
        props.show(false);
      }, 500);
    } else {
      setTimeout(() => {
        setLoading(false);
        setError(true);
      }, 500);
    }
  }
  return (
    <div className={css.mainDiv}>
      <form className={css.mainForm} onSubmit={handleSubmit}>
        <div>
          <H2>Registrate</H2>
        </div>
        <div>
          <H5>Correo electrónico</H5>
        </div>
        <input
          className={css.mailForm}
          type="text"
          name="email"
          required={true}
        />
        <div>
          <H5>Contraseña</H5>
        </div>
        <input
          className={css.mailForm}
          name="password"
          type="password"
          required={true}
        />
        Contraseña de 8 dígitos o más
        <div className={css.enterButton}>
          <H4>
            <label>
              <input type="checkbox" name="recordarme" />
              Recordarme
            </label>
          </H4>
          <PrimaryButton>{!loading ? "Registrate" : <Spinner />}</PrimaryButton>
        </div>
        {error ? (
          <H5 className={css.red}>Algo salio mal, vuelve a intentarlo.</H5>
        ) : null}
        <div className={css.regButton}>
          <H5>¿Ya tenés cuenta?</H5>
          <button
            className={css.registerForm}
            onClick={() => props.show(false)}
          >
            Ingresa
          </button>
        </div>
      </form>
    </div>
  );
}

export function LoginForm(props) {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    setLoading(true);
    const res = await getToken();
    if (res) {
      setTimeout(() => {
        setLoading(false);
        setLogged(true);
      }, 500);
    } else {
      setTimeout(() => {
        setLoading(false);
        setError(true);
      }, 500);
    }
  }
  return (
    <div className={css.mainDiv}>
      {!logged ? (
        <form className={css.mainForm} onSubmit={handleSubmit}>
          <div>
            <H2>Ingresar</H2>
          </div>
          <div>
            <H5>Correo electrónico</H5>
          </div>
          <input className={css.mailForm} type="text" name="email" />
          tumail@gmail.com
          <div className={css.enterButton}>
            <H5>Contraseña</H5>
            <a className={css.passRecoveryLink}>¿Olvidaste tu contraseña?</a>
          </div>
          <input className={css.mailForm} type="password" name="password" />
          Contraseña de 8 dígitos o más
          <div className={css.enterButton}>
            <H4>
              <label>
                <input type="checkbox" name="recordarme" />
                Recordarme
              </label>
            </H4>
            <PrimaryButton>{!loading ? "Ingresar" : <Spinner />}</PrimaryButton>
          </div>
          {error ? (
            <H5 className={css.red}>Algo salio mal, vuelve a intentarlo.</H5>
          ) : null}
          <div className={css.regButton}>
            <H5>¿No tenés cuenta?</H5>
            <button
              className={css.registerForm}
              onClick={() => props.show(true)}
            >
              Registrarse
            </button>
          </div>
        </form>
      ) : (
        <LoginAlert close={props.close} />
      )}
    </div>
  );
}
