import { useState } from "react";
import { MustLoginAlert } from "../alertMessages";
import { LoginForm, SignUpForm } from "../login-forms";

export default function Login(props) {
  const [showLogIn, setShowLogIn] = useState(true);
  const [showAlert, setShowshowAlert] = useState(true);
  return (
    <div>
      {showAlert ? (
        <MustLoginAlert showAlert={setShowshowAlert} close={props.close} />
      ) : (
        <>
          {showLogIn ? (
            <SignUpForm show={setShowLogIn} />
          ) : (
            <LoginForm show={setShowLogIn} close={props.close} />
          )}
        </>
      )}
    </div>
  );
}
