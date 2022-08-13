import {DarkLogo, InstagramIcon, TwitterIcon} from "../../ui/icons/index.js";
import css from "./index.module.css";

export default function Footer() {
return <div className={css.divFooterMain}>
	<div className={css.divFooterLogo}>
	<DarkLogo /> 
	</div>
	<div className={css.divFooterIcons}>
		<InstagramIcon /> 
        <TwitterIcon />
	</div>
	<div className={css.copyrightFooter}>
		Todos los derechos reservados
	</div>
</div>
;
}
