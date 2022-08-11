// import { PrimaryButton } from "../ui/buttons";
import Footer from "../components/footer";
import NavBar from "../components/nav-bar";
import { PrimaryButton } from "../ui/buttons";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BurgerIcon,
  CloseIcon,
  ColorLogo,
  DarkLogo,
  FacebookIcon,
  ImdbIcon,
  InstagramIcon,
  SaveIcon,
  SearchIcon,
  TwitterIcon,
} from "../ui/icons";

export default function UI() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#060606",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DarkLogo></DarkLogo>
        <ColorLogo></ColorLogo>
        <BurgerIcon></BurgerIcon>
        <SearchIcon></SearchIcon>
        <SaveIcon></SaveIcon>
        <ArrowDownIcon></ArrowDownIcon>
        <CloseIcon></CloseIcon>
        <ArrowRightIcon></ArrowRightIcon>
        <ImdbIcon></ImdbIcon>
        <InstagramIcon></InstagramIcon>
        <TwitterIcon></TwitterIcon>
        <PrimaryButton>Más Datos</PrimaryButton>
        <Footer></Footer>
      </div>
      <NavBar></NavBar>
    </>
  );
}
