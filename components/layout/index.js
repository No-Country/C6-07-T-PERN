import Footer from "../footer";
import Header from "../header";

export default function Layout(props) {
  return (
    <>
      <Header></Header>
      {props.children}
      <Footer></Footer>
    </>
  );
}
