import { DarkLogo, FacebookIcon, InstagramIcon, TwitterIcon } from "../../ui/icons/index.js";
import css from "./index.module.css";

export default function Footer() {
  return (
    <div className={css.divFooterMain}>
		<div className={css.divFooterLogo}>
        <DarkLogo />
        </div>
        <div className={css.divFooterIcons}>
		<FacebookIcon />
        <TwitterIcon />
		<InstagramIcon />
        </div>
		<div className={css.copyrightFooter}> 
		<div>Todos los derechos reservados</div>   
		</div>
    </div>
  );
}
