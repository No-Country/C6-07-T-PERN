import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailsPage from "../../../components/details-page";
import { Layout } from "../../../components/layout";
import { serieBuilder } from "../../../store/object-builders/series";
import { Loading } from "../../../ui/icons";

export default function DetailsMovie() {
  const router = useRouter();
  const { id } = router.query;
  const [serie, setserie] = useState();

  useEffect(() => {
    async function getserie() {
      const data = await serieBuilder(id, [], "ar");
      setserie(data);
    }
    getserie();
  }, [id]);
  return (
    <Layout filterless={true}>
      {serie ? (
        <DetailsPage type="serie" media={serie} />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "80vh",
            alignItems: "center",
          }}
        >
          <Loading />
        </div>
      )}
    </Layout>
  );
}
