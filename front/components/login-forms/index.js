import { H2, H4, H5 } from "../../ui/text";
import { PrimaryButton } from "../../ui/buttons";
import css from "./index.module.css";
import { LoginAlert } from "../alertMessages";
import { useState } from "react";
import { getAuth, getToken } from "../../lib";
import { Spinner } from "../../ui/spinner";
import { connect, useDispatch } from "react-redux";
import { clearAllFilters, clearAllMedia } from "../../store/actions";
import Modal from "../modal";
import { HidePasswordIcon } from "../../ui/icons";

//Nano: Mapeo de los funciones dispatch de redux con las props del elemento
function mapDispatchToProps(dispatch) {
  return {
    clearAllMedia: () => dispatch(clearAllMedia()),
    clearAllFilters: () => dispatch(clearAllFilters()),
  };
}

export function SignUpForm(props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState([]);
  const [password, setPassword] = useState([]);
  const [email, setEmail] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    setLoading(true);
    const res = await getAuth(username, email, password.toString());
    if (res && res.status === 201) {
      setLoading(false);
      props.show(false);
    } else {
      setLoading(false);
      setError(true);
    }
  }
  return (
    <div className={css.mainDiv}>
      <form className={css.mainForm} onSubmit={handleSubmit}>
	  <Modal onClick={() => {
				setModalOpen(true);
			}}></Modal>
			{modalOpen && <Modal setOpenModal={setModalOpen} />}
        <div>
          <H2>Registrate</H2>
        </div>
        <div>
          <H5>Nombre de usuario</H5>
        </div>
        <input
          className={css.mailForm}
          type="text"
          name="username"
          required={true}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <div>
          <H5>Correo electrónico</H5>
        </div>
        <input
          style={{ color: "white" }}
          placeholder="tumail@gmail.com"
          className={css.mailForm}
          type="text"
          name="email"
          required={true}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div>
          <H5>Contraseña</H5>
        </div>
		<view style={{ flexDirection: "row", borderBottomWidth: 1, paddingBottom: 10  }}> 
		<HidePasswordIcon /> 
		<input
          style={{ color: "white", flex: 1 }}
          placeholder="Contraseña de 8 dígitos o más"
          className={css.mailForm}
          name="password"
          type="password"
          required={true}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        /> 
        Contraseña de 8 dígitos o más 
		</view> 
        <div className={css.enterButton}>
          <H4>
            <label>
              <input type="checkbox" name="recordarme" />
              Recordarme
            </label>
          </H4>
          <PrimaryButton
            onClick={() => {
              props.showRegistered(true);
            }}
          >
            {!loading ? "Registrate" : <Spinner />}
          </PrimaryButton>
        </div>
        {error ? (
          <H5 className={css.red}>Algo salio mal, vuelve a intentarlo.</H5>
        ) : null}
        <div className={css.regButton}>
          <H5>¿Ya tenés cuenta?</H5>
          <button
            className={css.registerForm}
            onClick={() => {
              props.show(false);
              props.showRegistered(false);
              // console.log(props);
            }}
          >
            Ingresa
          </button>
        </div>
      </form>
    </div>
  );
}

export function LoginForm(props) {
  const dispatch = useDispatch();
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [identification, setIdentification] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    setWrongPassword(false);
    setLoading(true);
    const res = await getToken(identification, password);
    if (res && res.status === 200) {
      dispatch(clearAllFilters());
      dispatch(clearAllMedia());
      setLoading(false);
      setLogged(true);
    }
    if (res && res.status === 401) {
      setLoading(false);
      setWrongPassword(true);
    } else {
      setLoading(false);
      setError(true);
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
            <H5>Nombre de usuario ó Correo electrónico</H5>
          </div>
          <input
            autoComplete="off"
            className={css.mailForm}
            type="text"
            name="email"
            onChange={(e) => {
              setIdentification(e.target.value);
            }}
          />
          Ejemplo: tumail@gmail.com
          <div className={css.enterButton}>
            <H5>Contraseña</H5>
            <a className={css.passRecoveryLink}>¿Olvidaste tu contraseña?</a>
          </div>
          <input
            autoComplete="off"
            className={css.mailForm}
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {wrongPassword ? (
            <H5 className={css.red}>Contraseña o User incorrectos</H5>
          ) : null}
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

export default connect(null, mapDispatchToProps)(LoginForm);
