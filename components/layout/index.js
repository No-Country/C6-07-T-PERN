import Footer from "../footer";
import Header from "../header";

export function Layout(props) {
  return (
    <>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  );
}
