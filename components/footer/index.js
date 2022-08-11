import {DarkLogo, InstagramIcon, TwitterIcon} from "../../ui/icons/index.js";
import css from "./index.module.css";

export default function Footer() {
return <div>
	<div className={css.divFooterLogo}>
	<DarkLogo /> 
	</div>
	<div className={css.divFooterIcons}>
		<InstagramIcon /> 
        <TwitterIcon />
	</div>
	<div>
		Todos los derechos reservados
	</div>
</div>
;
}
