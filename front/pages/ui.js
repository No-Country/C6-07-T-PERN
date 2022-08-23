// import { PrimaryButton } from "../ui/buttons";
import Footer from "../components/footer";
import NavBar from "../components/nav-bar";
import { PlatformFilterButton, PrimaryButton } from "../ui/buttons";
import {
  AmazonIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ProfileIcon,
  CloseIcon,
  ColorLogo,
  DarkLogo,
  DisneyIcon,
  FacebookIcon,
  HboIcon,
  ImdbIcon,
  InstagramIcon,
  NetflixIcon,
  SaveIcon,
  SearchIcon,
  TwitterIcon,
  Loading,
} from "../ui/icons";
import { H2, H3, H3semiBold, H4, H4Buttons, H5 } from "../ui/text";

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
          padding: "10px",
        }}
      >
        <DarkLogo></DarkLogo>
        <ColorLogo></ColorLogo>
        <ProfileIcon></ProfileIcon>
        <SearchIcon></SearchIcon>
        <SaveIcon></SaveIcon>
        <ArrowDownIcon></ArrowDownIcon>
        <CloseIcon></CloseIcon>
        <ArrowRightIcon></ArrowRightIcon>
        <ImdbIcon></ImdbIcon>
        <InstagramIcon></InstagramIcon>
        <TwitterIcon></TwitterIcon>
        <PrimaryButton>Más Datos</PrimaryButton>
        <PlatformFilterButton>
          <AmazonIcon></AmazonIcon>
        </PlatformFilterButton>
        <PlatformFilterButton>
          <NetflixIcon></NetflixIcon>
        </PlatformFilterButton>
        <PlatformFilterButton>
          <DisneyIcon></DisneyIcon>
        </PlatformFilterButton>
        <PlatformFilterButton>
          <HboIcon></HboIcon>
        </PlatformFilterButton>
        <NavBar></NavBar>
        <Footer></Footer>
        <H2>H2!</H2>
        <H3>H3!</H3>
        <H3semiBold>H3Semi!</H3semiBold>
        <H4>H4!</H4>
        <H4Buttons>H4Buttons!</H4Buttons>
        <H5>H5!</H5>
        <Loading />
      </div>
    </>
  );
}
