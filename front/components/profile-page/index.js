import { useRouter } from "next/router";
import { logout } from "../../lib";
import { BorderlessButton } from "../../ui/buttons";
import { H2, H3, H5 } from "../../ui/text";

export default function ProfilePage(props) {
  const router = useRouter();
  async function handleClick() {
    await logout();
    router.push("/");
  }
  return (
    <div style={{ backgroundColor: "black", height: "80vh", margin: "12px" }}>
      <H2>Mi perfil</H2>
      <div style={{ padding:"2px" }}>
        <H3>{props.username}Alicia Ramirez</H3>
        <H5>{props.email}aliciaramirez@gmail.com</H5>
      </div>
      <div style={{ padding: "2px" }}>
        <H3>País</H3>
        <H3>{props.country}Argentina</H3>
      </div>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}><BorderlessButton onClick={handleClick}>Cerrar sesión</BorderlessButton></div>
    </div>
  );
}
