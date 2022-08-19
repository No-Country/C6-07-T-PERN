//Nano: Importo dispatch para enviar estados al store
import { setFilterByPlatform } from "../../store/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

//Se importan los estiilos desde archivo propio
import css from "./index.module.css";

export function PrimaryButton(props) {
  return <button className={css.primary}>{props.children}</button>;
}
export function PlatformFilterButton(props) {
  const [active, setActive] = useState(false);
  function toggle() {
    setActive(!active);
  }
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        console.log(props);
        toggle();
        dispatch(setFilterByPlatform(props.platform));
      }}
      className={css.buttonFilter}
      style={{
        opacity: `${active ? "100%" : "40%"}`,
        filter: `${
          active
            ? "drop-shadow(0px -2px 2px rgba(211, 167, 255, 0.67)) drop-shadow(0px -0.448053px 5.01331px rgba(211, 167, 255, 0.481632)) drop-shadow(0px 0.301988px 2.68036px rgba(211, 167, 255, 0.399392)) drop-shadow(0px 0.616466px 1.50259px rgba(211, 167, 255, 0.335)) drop-shadow(0px 0.62806px 0.798012px rgba(211, 167, 255, 0.270608)) drop-shadow(0px 0.407744px 0.332071px rgba(211, 167, 255, 0.188368))"
            : "none"
        }`,
      }}
    >
      {props.children}
    </button>
  );
}
