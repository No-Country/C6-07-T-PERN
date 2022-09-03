import { useEffect, useState } from "react";
import { isLogged } from "../../lib";
import { BorderlessButton } from "../../ui/buttons";
import { H2, H3 } from "../../ui/text";
import { MustLoginAlert } from "../alertMessages";
import { LoginForm, SignUpForm } from "../login-forms";
import css from "./index.module.css";

export default function Login(props) {
  const [showLogIn, setShowLogIn] = useState(true);
  const [showAlert, setShowshowAlert] = useState(true);
  const [showRegistered, setshowRegistered] = useState(true);

  return (
    <div className={props.className}>
      {showAlert ? (
        <MustLoginAlert showAlert={setShowshowAlert} close={props.close} />
      ) : (
        <>
          {showLogIn ? (
            <SignUpForm
              show={setShowLogIn}
              showRegistered={setshowRegistered}
            />
          ) : (
            <>
              {showRegistered ? (
                <div className={css.mainDiv}>
                  <div className={css.containerMessage}>
                    <div className={css.alertSubtitle}>
                      <H2>¡Registro exitoso!</H2>
                      <H3>Ahora ingresa a tu cuenta</H3>
                    </div>
                    <BorderlessButton
                      className={css.logButton}
                      onClick={() => {
                        setshowRegistered(false);
                      }}
                    >
                      Continuar
                    </BorderlessButton>
                  </div>
                </div>
              ) : (
                <LoginForm show={setShowLogIn} close={props.close} />
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
