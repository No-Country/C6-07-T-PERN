import { Layout } from "../components/layout";
import { H2 } from "../ui/text";

export default function WatchList() {
  return (
    <Layout filterless={true}>
      <div style={{ backgroundColor: "black", height: "80vh" }}>
        <H2>WatchList</H2>
      </div>
    </Layout>
  );
}
