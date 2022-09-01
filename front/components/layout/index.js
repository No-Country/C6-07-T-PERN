import Footer from "../footer";
import Header from "../header";

export function Layout(props) {
  return (
    <>
      <Header filterless={props.filterless}></Header>
      {props.children}
      <Footer></Footer>
    </>
  );
}
