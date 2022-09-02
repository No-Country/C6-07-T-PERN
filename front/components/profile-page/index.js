import { useRouter } from "next/router";
import { logout } from "../../lib";
import { BorderlessButton } from "../../ui/buttons";
import { H2, H3, H5 } from "../../ui/text";
import css from "./index.module.css";

export default function ProfilePage(props) {
  const router = useRouter();
  async function handleClick() {
    await logout();
    router.push("/");
  }
  return (
    <div className={css.profileContainer}>
      <H2>Mi perfil</H2>
      <div className={css.profileUser}>
        <H3>{props.username}</H3>
        <H5>{props.email}</H5>
      </div>
      <div className={css.profileCloseButton}>
        <BorderlessButton onClick={handleClick}>Cerrar sesión</BorderlessButton>
      </div>
    </div>
  );
}
