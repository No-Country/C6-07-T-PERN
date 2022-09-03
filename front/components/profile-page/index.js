import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";
import { logout } from "../../lib";
import { clearAllFilters, clearAllMedia } from "../../store/actions";
import { BorderlessButton } from "../../ui/buttons";
import { H2, H3, H5 } from "../../ui/text";
import css from "./index.module.css";

//Nano: Mapeo de los funciones dispatch de redux con las props del elemento
function mapDispatchToProps(dispatch) {
  return {
    clearAllMedia: () => dispatch(clearAllMedia()),
    clearAllFilters: () => dispatch(clearAllFilters()),
  };
}
export function ProfilePage(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  async function handleClick() {
    dispatch(clearAllMedia());
    dispatch(clearAllFilters());
    await logout();
    router.push("/");
  }
  return (
    <div className={css.profileContainer}>
      <H2>Mi perfil</H2>
      <div className={css.profileUser}>
        <div className={css.fieldContainer}>
          <H5 className={css.noMargin}>User:</H5>
          <H3 className={css.noMargin}>{props.username}</H3>
        </div>
        <div className={css.fieldContainer}>
          <H5 className={css.noMargin}>Mail:</H5>
          <H5 className={css.noMargin}>{props.email}</H5>
        </div>
      </div>
      <div className={css.profileCloseButton}>
        <BorderlessButton onClick={handleClick}>Cerrar sesión</BorderlessButton>
      </div>
    </div>
  );
}
export default connect(null, mapDispatchToProps)(ProfilePage);
