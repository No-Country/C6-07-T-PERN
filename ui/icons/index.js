import Color from "./images/color-logo.svg";
import Dark from "./images/dark-logo.svg";
import Profile from "./images/profile-icon.svg";
import Search from "./images/search-icon.svg";
import Save from "./images/save-icon.svg";
import Down from "./images/arrow-down.svg";
import Close from "./images/close.svg";
import Right from "./images/arrow-right.svg";
import Imdb from "./images/imdb-icon.svg";
import Insta from "./images/instagram-icon.svg";
import Face from "./images/facebook-icon.svg";
import Twitter from "./images/twitter-icon.svg";
import Amazon from "./images/amazon-icon.svg";
import Netflix from "./images/netflix-icon.svg";
import Disney from "./images/disney-icon.svg";
import Hbo from "./images/hbo-icon.svg";
import css from "./index.module.css";
export function ColorLogo() {
  return <Color className={css.logo}></Color>;
}
export function DarkLogo() {
  return <Dark className={css.logo}></Dark>;
}
export function ProfileIcon() {
  return <Profile className={css.icon}></Profile>;
}
export function SearchIcon() {
  return <Search className={css.icon}></Search>;
}
export function SaveIcon() {
  return <Save className={css.icon}></Save>;
}
export function ArrowDownIcon() {
  return <Down className={css.icon}></Down>;
}
export function CloseIcon() {
  return <Close className={css.icon}></Close>;
}
export function ArrowRightIcon() {
  return <Right className={css.icon}></Right>;
}
export function ImdbIcon() {
  return <Imdb></Imdb>;
}
export function InstagramIcon() {
  return <Insta className={css["social_media"]}></Insta>;
}
export function FacebookIcon() {
  return <Face className={css["social_media"]}></Face>;
}

export function TwitterIcon() {
  return <Twitter className={css["social_media"]}></Twitter>;
}
export function AmazonIcon() {
  return <Amazon className={css.platform}></Amazon>;
}
export function NetflixIcon() {
  return <Netflix className={css.platform}></Netflix>;
}
export function DisneyIcon() {
  return <Disney className={css.platform}></Disney>;
}
export function HboIcon() {
  return <Hbo className={css.platform}></Hbo>;
}
export function PlatformIcon(props) {
  return <button className={css.platformIcon}>{props.children}</button>;
}
