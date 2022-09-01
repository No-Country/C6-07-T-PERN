import { Layout } from "../components/layout";
import ProfilePage from "../components/profile-page";

export default function Profile() {
  return (
    <Layout filterless={true}>
      <ProfilePage />
    </Layout>
  );
}
