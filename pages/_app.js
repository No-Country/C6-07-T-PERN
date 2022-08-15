import "../lib/base.css";
import { Provider } from "react-redux";
import store from "../store";
function MyApp({ Component, pageProps }) {
  // Nano: El provider envuelve el componente principal, para hacer
  // que los estados globales del stores esten en toda app
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
