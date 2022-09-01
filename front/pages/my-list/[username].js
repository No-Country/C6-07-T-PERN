import { Layout } from "../../components/layout";
import MyListPage from "../../components/myListPage";
import { H2 } from "../../ui/text";

export default function WatchList() {
  return (
    <Layout filterless={false}>
      <MyListPage />
    </Layout>
  );
}
