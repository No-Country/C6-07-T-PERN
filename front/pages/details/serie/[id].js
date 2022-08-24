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
  console.log(serie);
  useEffect(() => {
    async function getserie() {
      const data = await serieBuilder(id, "ar");
      setserie(data);
    }
    getserie();
  }, [id]);
  return (
    <Layout>
      {serie ? <DetailsPage type="serie" media={serie} /> : <Loading></Loading>}
    </Layout>
  );
}
