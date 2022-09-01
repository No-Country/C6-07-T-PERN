import { useRouter } from "next/router";
import { logout } from "../../lib";
import { BorderlessButton } from "../../ui/buttons";
import { H2 } from "../../ui/text";

export default function ProfilePage() {
  const router = useRouter();
  async function handleClick() {
    await logout();
    router.push("/");
  }
  return (
    <div style={{ backgroundColor: "black", height: "80vh" }}>
      <H2>Perfil</H2>
      <BorderlessButton onClick={handleClick}>Cerrar sesión</BorderlessButton>
    </div>
  );
}
